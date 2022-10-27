import React from 'react';
import AllCoffees from './AllCoffees';
import DetailSection from './DetailSection';


function HomePage({allCoffees, handleAddToCart, faveCoffee}) {


    return (
        <div>
            <div>
                <DetailSection faveCoffee={faveCoffee}/>
            </div>
            <div className=''>
                <AllCoffees handleAddToCart={handleAddToCart} allCoffees={allCoffees} />
            </div>
        </div>
    );
}

export default HomePage;