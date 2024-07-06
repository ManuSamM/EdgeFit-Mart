// Products.jsx
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import './Products.css';

function Products({ searchTerm, userId }) {

    // Image drag handler
    const handleDragStart = (e) => {
        e.preventDefault();
    };

    // Display products from database
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Logic for favorite icon
    const [favoriteStatus, setFavoriteStatus] = useState({});
    const handleIconClick = (productId) => {
        setFavoriteStatus(prevStatus => ({
            ...prevStatus,
            [productId]: !prevStatus[productId]
        }));

        // Get the JWT token from localStorage
        const token = localStorage.getItem('token');

        // Set the Authorization header with the JWT token
        axios.post(`http://localhost:5000/api/user/${userId}/wishlist/add`, { productId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log('Product added to wishlist:', response.data);
        }).catch(error => {
            console.error('Error adding product to wishlist:', error);
        });
    };

    // Search filter
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Scroll to the products section when the searchTerm changes
    const productsRef = useRef(null);
    useEffect(() => {
        if (searchTerm && productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchTerm]);

    return (
        <div className="products" ref={productsRef}>
            <div className="products-text container d-flex justify-content-center">
                Our Products
            </div>
            <ProductsList
                products={filteredProducts}
                handleDragStart={handleDragStart}
                handleIconClick={handleIconClick}
                favoriteStatus={favoriteStatus}
            />
        </div>
    );
}

Products.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
};

export default Products;
