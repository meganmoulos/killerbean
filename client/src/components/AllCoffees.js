import React from 'react';
import Coffee from './Coffee';

function AllCoffees({allCoffees, handleAddToCart}) {
    return (
        <div>
            {allCoffees.map(coffee => <Coffee handleAddToCart={handleAddToCart} key={coffee.name} coffee={coffee} />)}
        </div>
    );
}

export default AllCoffees;