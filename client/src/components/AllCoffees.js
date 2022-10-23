import React from 'react';
import Coffee from './Coffee';

function AllCoffees({allCoffees}) {
    return (
        <div>
            {allCoffees.map(coffee => <Coffee key={coffee.name} coffee={coffee} />)}
        </div>
    );
}

export default AllCoffees;