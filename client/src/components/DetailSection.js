import React from 'react';

function DetailSection({faveCoffee}) {

    return (
        <div className='columns-2'>
            <div className='m-8'>
                <div>
                    <p className='text-white text-6xl font-serif font-bold pb-4'>Start your day with a killer bean</p>
                    <h5 className='text-white text-sm uppercase pb-2'>Fair trade certified & delicious</h5>
                    <p className='text-white text-sm'>Killer bean coffee is the only way to start your day feeling killer. Be like the bean of legend, and knock out your todo list, or beat up some enemies.</p>
                    <div className="bg-medium-brown p-4 my-8 w-[280px]">
                        <p className='text-white text-sm'>Your favorite coffee:</p>
                        <p>{faveCoffee.name}</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80" alt="coffee"/>
            </div>
        </div>
    );
}

export default DetailSection;