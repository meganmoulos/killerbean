import React from 'react';
import Coffee from './Coffee';

function AllCoffees({allCoffees, handleAddToCart}) {
    return (
        <div className='flex'>
            <div className='flex flex-wrap'>
                {allCoffees.map(coffee => <Coffee handleAddToCart={handleAddToCart} key={coffee.name} coffee={coffee} />)}
            </div>
        </div>
    );
}

export default AllCoffees;