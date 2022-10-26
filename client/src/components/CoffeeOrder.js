import React, {useState} from 'react';

function CoffeeOrder({order, removeFromCart}) {
   const [input, setInput] = useState("")
   
    function handleSizeSubmit(e){
        setInput(e.target.value)
        
        fetch(`/coffee_orders/${order.id}`, {
            method: 'PATCH',
            headers: {"Content-Type" : 'application/json'},
            body: JSON.stringify({
                size: input
            })
        })
        console.log(input)
    }

    console.log(order)
    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[287px]">
                <p>{order.coffee.name}</p>
                <p>{input}</p>
                <select onChange ={handleSizeSubmit} className='text-black m-2'>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button onClick={() => removeFromCart(order)} className='border p-2'>Remove</button>
            </div>
        </div>
    );
}

export default CoffeeOrder;