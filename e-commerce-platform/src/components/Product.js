import React from 'react';

const Product = ({ product }) => {
    return (
        <div className='product'>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;