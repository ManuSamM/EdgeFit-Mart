// ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleDragStart, handleIconClick, favoriteStatus }) => {
    return (
        <li>
            <div className="product-card bg-gradient rounded-3">
                <Link to={`/product/${product._id}`} className="product-link">
                    <img
                        src={`http://localhost:5000/api/image/${encodeURIComponent(product.imagePath)}`}
                        alt={product.name}
                        className='product-image rounded-top-3'
                        onDragStart={handleDragStart}
                    />
                </Link>
                <i
                    className={`fa ${favoriteStatus[product._id] ? 'fa-solid' : 'fa-regular'} fa-star fa-xl favourite`}
                    onClick={() => handleIconClick(product._id)}
                    style={{ color: 'orange' }}
                ></i>
                <div className='d-flex justify-content-between align-items-center ps-3 pe-3'>
                    <div>
                        <h6 className='product-name'><b>{product.name}</b></h6>
                        <h6 className='product-price'><b>Rs. {product.price}</b></h6>
                    </div>
                    <button className='btn btn-secondary btn-sm shadow'>Add to cart</button>
                </div>
            </div>
        </li>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleDragStart: PropTypes.func.isRequired,
    handleIconClick: PropTypes.func.isRequired,
    favoriteStatus: PropTypes.object.isRequired
};

export default ProductCard;
