import React from 'react';
import AllCoffees from './AllCoffees';
import DetailSection from './DetailSection';


function HomePage({allCoffees, handleAddToCart}) {


    return (
        <div>
            <div>
                <DetailSection />
            </div>
            <div className=''>
                <AllCoffees handleAddToCart={handleAddToCart} allCoffees={allCoffees} />
            </div>
        </div>
    );
}

export default HomePage;