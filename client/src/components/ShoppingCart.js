import React from 'react';
import CoffeeOrder from './CoffeeOrder';

function ShoppingCart({coffeeOrders, currentCart}) {

    return (
        <div>
            <div className='p-4'>
                <h2 className='text-xl font-serif'>Current Order</h2>
                {currentCart.map(order => <CoffeeOrder key={order.id} order={order} />)}
            </div>
            <div className='p-4'>
                <h3 className='text-xl font-serif'>Order History</h3>
                {coffeeOrders.map(order => <CoffeeOrder key={order.id} order={order} />)}
            </div>
        </div>
    );
}

export default ShoppingCart;