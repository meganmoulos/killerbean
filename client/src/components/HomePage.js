import React from 'react';
import AllCoffees from './AllCoffees';
import DetailSection from './DetailSection';


function HomePage({allCoffees, handleAddToCart}) {


    return (
        <div>
            <DetailSection />
            
            <AllCoffees handleAddToCart={handleAddToCart} allCoffees={allCoffees} />
        </div>
    );
}

export default HomePage;