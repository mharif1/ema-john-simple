import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props)
    const {cart} = props

    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping 
    }

    const tax = (total * 0.1).toFixed(2)
    grandTotal = total + shipping + +tax
    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : {tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
            
        </div>
    );
};

export default Cart;