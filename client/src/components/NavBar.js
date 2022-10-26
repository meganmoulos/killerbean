import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar({currentUser, handleLogout}) {


    return (
        <div className='m-6 text-white'>
            <div className='flex justify-between'>
                <div className='flex gap-7'>
                    <NavLink
                        to='/'
                        exact
                    >
                        <p className='font-bold'>KILLER BEAN COFFEE</p>    
                    </NavLink>
                    <NavLink
                        to='/'
                        exact
                    >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to='/coffee'
                        exact
                    >
                        <p>Coffee</p>
                    </NavLink>
                </div>
                <div className='flex gap-7'>
                    <NavLink
                        to='/cart'
                        exact
                    >
                        <p>Shopping Cart</p>
                    </NavLink>
                    <NavLink
                        to='/signup'
                        exact
                    >
                        <p>Signup</p>
                    </NavLink>
                    {currentUser ? 
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <img width="25px" className="userImage" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user"/>
                        </>
                        : 
                        <NavLink
                        to='/login'
                        exact
                        >
                            <p>Log In</p>
                        </NavLink>}
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;