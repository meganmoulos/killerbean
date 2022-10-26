import React from 'react';

function CoffeeOrder({order}) {
    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[287px]">
                <p>{order.coffee.name}</p>
                <button className='border p-2'>Remove</button>
            </div>
        </div>
    );
}

export default CoffeeOrder;