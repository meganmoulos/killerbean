import React from 'react';

function Coffee({coffee, handleAddToCart}) {

    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[280px]">
                <p>{coffee.name}</p>
                <p className="text-sm">Ingredients: {coffee.ingredients}</p>
                <p className='py-3'>${coffee.price}</p>
                <button className='border-white border p-2 text-xs text-white' onClick={() => handleAddToCart(coffee)}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Coffee;