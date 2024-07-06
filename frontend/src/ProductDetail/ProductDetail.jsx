import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar'
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams(); // Extract the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product data from the server using the product ID
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/product/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            {product && (
                <>
                    <div className="product-detail row">
                        <div className='product-detail-left col-md-6'>
                            <img className='product-detail-img rounded-2'
                                src={`http://localhost:5000/api/image/${encodeURIComponent(product.imagePath)}`}
                                alt={product.name} />
                        </div>
                        <div className='product-detail-right col-md-6'>
                            <h1 className='product-detail-name'><b>{product.name}</b></h1>
                            <br />
                            <h3><b>Price:</b> Rs {product.price}</h3>
                            <br /><br /><br />
                            <p><b>Description:</b><br/><br/>{product.description}</p>
                            <br /><br />
                            <button type='button' className='product-details-cart rounded-2'>
                                <b>Add to Cart</b>
                            </button>

                            <button type='button' className='product-details-wishlist rounded-2'>
                                <b>Add to Wishlist</b>
                            </button>
                        </div>
                    </div>
                </>)
            }

        </>
    );
};

ProductDetail.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ProductDetail;
