import React from 'react';
import CoffeeOrder from './CoffeeOrder';

function ShoppingCart({coffeeOrders, currentCart}) {

    return (
        <div>
            <div>
                <h2>Current Order</h2>
                {currentCart.map(order => <CoffeeOrder key={order.id} order={order} />)}
            </div>
            <div>
                <h3>Order History</h3>
                {coffeeOrders.map(order => <CoffeeOrder key={order.id} order={order} />)}
            </div>
        </div>
    );
}

export default ShoppingCart;