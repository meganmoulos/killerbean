import React from 'react';

function CoffeeOrder({order}) {
    return (
        <div>
            <p>Date: {order.created_at}</p>
            <div className="bg-medium-brown p-4 m-4 w-[287px]">
                <p>{order.coffee.name}</p>
                <p>{order.size}</p>
            </div>
        </div>
    );
}

export default CoffeeOrder;