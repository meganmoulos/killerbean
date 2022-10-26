import React from 'react';

function Coffee({coffee, handleAddToCart}) {

    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[287px]">
                <p>{coffee.name}</p>
                <p className="text-sm">{coffee.ingredients}</p>
                <p className='py-3'>${coffee.price}</p>
                <button className='border-white border p-2 text-xs' onClick={() => handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Coffee;