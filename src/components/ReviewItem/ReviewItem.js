import React from 'react';
import './ReviewItem.css';
// import '../cart/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemovefromCart}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='carts'>
           <img src={img} alt=''></img>
           <h4>{name}</h4>
           <p>Quantity: <b>{quantity}</b></p>
           <p>price: <b>${price * quantity}</b></p>
           <button className='deleteBtn' onClick={()=>handleRemovefromCart(id)}>Remove &nbsp;
            <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;