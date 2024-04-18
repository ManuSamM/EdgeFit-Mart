import './Products.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Products({ searchTerm, userId }) {

    //image drag handler
    const handleDragStart = (e) => {
        e.preventDefault();
    };

    //display products from database
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch products from the API
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    //logic for favourite icon
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
            // Handle successful response, such as updating state to reflect the change
            console.log('Product added to wishlist:', response.data);
        }).catch(error => {
            console.error('Error adding product to wishlist:', error);
        });
    };

    //search filter
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
        <>
            <div className="products" ref={productsRef}>

                <div className="products-text container d-flex justify-content-center">Our Products</div>

                <ul style={{ listStyle: 'none' }} className='d-flex flex-wrap justify-content-evenly p-0 m-0'>
                    {filteredProducts.map(product => (
                        <li key={product._id}>

                            <div className="product-card bg-gradient rounded-3" >
                                <Link to={`/product/${product._id}`} className="product-link">
                                    <img src={`http://localhost:5000/api/image/${encodeURIComponent(product.imagePath)}`}
                                        alt={product.name}
                                        className='product-image rounded-top-3'
                                        onDragStart={handleDragStart} />
                                </Link>
                                <i
                                    className={`fa ${favoriteStatus[product._id] ? 'fa-solid' : 'fa-regular'} fa-star fa-xl favourite`}
                                    onClick={() => handleIconClick(product._id)}
                                    style={{ color: 'orange' }} ></i>
                                <div className='d-flex justify-content-between align-items-center ps-3 pe-3'>
                                    <div>
                                        <h6 className='product-name'><b>{product.name}</b></h6>
                                        <h6 className='product-price'><b>Rs. {product.price}</b></h6>
                                    </div>
                                    <button className='btn btn-secondary btn-sm shadow'>Add to cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

Products.propTypes = {
    searchTerm: PropTypes.string.isRequired, // Validate searchTerm as a required string
    userId: PropTypes.string.isRequired, // Validate userId as a required string
};

export default Products