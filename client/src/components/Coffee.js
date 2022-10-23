import React from 'react';

function Coffee({coffee, handleAddToCart}) {

    return (
        <div className="bg-medium-brown p-4 m-4">
            <p>{coffee.name}</p>
            <p>{coffee.ingredients}</p>
            <p>{coffee.price}</p>
            <button className='border-white border p-2 text-xs' onClick={() => handleAddToCart}>ADD TO CART</button>
        </div>
    );
}

export default Coffee;