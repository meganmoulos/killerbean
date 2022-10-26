import React from 'react';

function PastCoffeeOrder({order}) {
    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[287px]">
                <p>{order.coffee.name}</p>
            </div>
        </div>
    );
}

export default PastCoffeeOrder;