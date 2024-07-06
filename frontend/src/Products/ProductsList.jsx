// ProductsList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductsList = ({ products, handleDragStart, handleIconClick, favoriteStatus }) => {
    return (
        <ul style={{ listStyle: 'none' }} className='d-flex flex-wrap justify-content-evenly p-0 m-0'>
            {products.map(product => (
                <ProductCard
                    key={product._id}
                    product={product}
                    handleDragStart={handleDragStart}
                    handleIconClick={handleIconClick}
                    favoriteStatus={favoriteStatus}
                />
            ))}
        </ul>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    handleDragStart: PropTypes.func.isRequired,
    handleIconClick: PropTypes.func.isRequired,
    favoriteStatus: PropTypes.object.isRequired
};

export default ProductsList;
