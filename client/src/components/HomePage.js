import React from 'react';
import AllCoffees from './AllCoffees';
import DetailSection from './DetailSection';

function HomePage({allCoffees}) {
    return (
        <div>
            <DetailSection />
            <AllCoffees allCoffees={allCoffees} />
        </div>
    );
}

export default HomePage;