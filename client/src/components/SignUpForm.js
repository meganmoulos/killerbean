import React, { useState } from 'react';

function SignUpForm({newUser}) {


//FormData
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const formHandler = (e) => {
        e.preventDefault();
        fetch('/users', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                first_name: firstName, last_name: lastName, username, password_digest: password
            }),
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
        <div>
            <form onSubmit={formHandler}>
                <label>First Name </label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName}/> 
                <label>Last Name </label>
                    <input type="text" onChange={e => setLastName(e.target.value)} value={lastName}/> 
                <label>Username </label>
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username}/> 
                <label>Password </label>
                    <input type="text" onChange={e => setPassword(e.target.value)} value={password}/> 
                <button type='submit'>Sign up </button>
            </form>
        </div>
    );
}

export default SignUpForm;