import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const {handleAddToCart, product} = props
    const { img, name, price, seller, ratings } = product
    
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : <b>${price}</b> </p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} Stars</small></p>
            </div>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'><b>Add to Cart</b></p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;