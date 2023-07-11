import React from 'react';
import '../Summary/summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Summary = ({carts, handleRemoveAll}) => {
//    const {carts} = props.carts;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const cart of carts)
    {
        if(cart.quantity === 0)
        {
            cart.quantity = 1;
        }
        // cart.quantity = cart.quantity || 1;
        totalPrice = totalPrice + cart.price * cart.quantity;
        totalShipping = totalShipping + cart.shipping * cart.quantity;
        quantity = quantity + cart.quantity;
    }
    let tax = totalPrice * 0.07;

    let grandTotal = totalPrice+totalShipping+tax;
    return (
        <div className='summary'>
            <h3>Order Summary</h3>
            <p>Selected items: <b>{quantity}</b> </p>
            <p>Total Price: <b>${totalPrice}</b></p>
            <p>Total Shipping Charge: <b>${totalShipping}</b></p>
            <p>Tax: <b>${tax.toFixed(2)}</b></p>
            <h4>Grand Total: <b>${grandTotal.toFixed(2)}</b></h4>
            <button onClick={handleRemoveAll} className='deleteBtn'  >Clear All &nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default Summary;