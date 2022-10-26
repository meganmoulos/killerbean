import React from 'react';
import CoffeeOrder from './CoffeeOrder';
import PastCoffeeOrder from './PastCoffeeOrder'

function ShoppingCart({pastOrders, currentCart, removeFromCart, handleCheckout}) {

    return (
        <div className='text-white'>
            <div className='p-4'>
                <h2 className='text-xl font-serif'>Current Order</h2>
                {currentCart.map(order => <CoffeeOrder key={order.id} order={order} removeFromCart={removeFromCart}/>)}
            </div>
            <button onClick={handleCheckout} className='border p-2 m-4'>Checkout</button>
            <div className='p-4'>
                <h3 className='text-xl font-serif'>Order History</h3>
                {pastOrders.map(order => <PastCoffeeOrder key={order.id} order={order} />)}
            </div>
           
        </div>
    );
}

export default ShoppingCart;