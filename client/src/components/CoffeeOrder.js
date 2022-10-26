import React, {useState} from 'react';

function CoffeeOrder({order, removeFromCart}) {
    const [input, setInput] = useState("")
   
    function handleSizeChange(e){
        setInput(e.target.value)
    }

    function handleSizeSubmit(){
        fetch(`/coffee_orders/${order.id}`, {
            method: 'PATCH',
            headers: {"Content-Type" : 'application/json'},
            body: JSON.stringify({
                size: input
            })
        })
    }

    return (
        <div>
            <div className="bg-medium-brown p-4 m-4 w-[300px]">
                <p>{order.coffee.name}</p>
                <p>${order.coffee.price}</p>
                <p>{input}</p>
                <select onChange ={handleSizeChange} className='text-black m-2'>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button onClick={handleSizeSubmit} className='border p-2 m-1'>Edit Size</button>
                <button onClick={() => removeFromCart(order)} className='border p-2'>Remove</button>
            </div> 
        </div>
    );
}

export default CoffeeOrder;