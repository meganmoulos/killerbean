import React, { useState } from 'react';

function SignUpForm({newUser, setCurrentUser}) {


//FormData
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const formHandler = (e) => {
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            username,
            password
        }
        fetch('/users', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        })

        .then(r => r.json())
        .then(aNewUser => {
            newUser(aNewUser);
            setFirstName('');
            setLastName('');
            setUsername('');
            setPassword('');
        })
    }

    return (
        <div className='p-4'>
            <form className='flex flex-col' onSubmit={formHandler}>
                <label className='text-white'>First Name </label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName}/> 
                <label className='text-white'>Last Name </label>
                    <input type="text" onChange={e => setLastName(e.target.value)} value={lastName}/> 
                <label className='text-white'>Username </label>
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username}/> 
                <label className='text-white'>Password </label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password}/> 
                <input className='border w-[150px] text-white' type='submit' value='Sign up' />
            </form>
        </div>
    );
}

export default SignUpForm;