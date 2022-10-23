import React from 'react';

function Coffee({coffee}) {
    return (
        <div>
            <p>{coffee.name}</p>
            <p>{coffee.ingredients}</p>
            <p>{coffee.price}</p>
        </div>
    );
}

export default Coffee;