import React from 'react';

function Coffee({coffee, handleAddToCart}) {

    return (
        <div>
            <p>{coffee.name}</p>
            <p>{coffee.ingredients}</p>
            <p>{coffee.price}</p>
            <button onClick={() => handleAddToCart}>Add To Cart</button>
        </div>
    );
}

export default Coffee;