import React, { useState } from 'react';
import '../Summary/summary.css'
import Summary from '../Summary/summary';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../../App.css'
import '../cart/cart.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleRemovefromCart = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleRemoveAll = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="App">
        <div className='layout'>
            {/* <h2>Number of orders: {orders.length}</h2> */}
            <div className='grid'>
                {
                    cart.map(product =>
                        <ReviewItem className="grid"
                            key={product.id}
                            product={product}
                            handleRemovefromCart={handleRemovefromCart}
                        >
                        </ReviewItem>
                    )
                }</div>
            <div>
                <Summary
                    carts={cart}
                    handleRemoveAll={handleRemoveAll}></Summary>
            </div>
        </div>
        </div>
    );
};

export default Orders;