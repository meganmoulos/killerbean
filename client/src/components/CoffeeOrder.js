import React from 'react';

function CoffeeOrder({order}) {
    return (
        <div>
            <p>{order.coffee.name}</p>
            <p>{order.size}</p>
        </div>
    );
}

export default CoffeeOrder;