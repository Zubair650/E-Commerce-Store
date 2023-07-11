import React from 'react';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {name,img,price} = props.product;

    const handleCart = props.btnCart;

    return (
        <div className='carts'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button className='orderBtn' onClick={()=>handleCart(props.product)}>Add to cart &nbsp;
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Cart;