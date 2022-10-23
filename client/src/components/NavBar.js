import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div className="flex bg-slate-50">
            <div>
                <NavLink
                    to='/'
                    exact
                >
                    <p>Killer Bean Coffee</p>    
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
                <NavLink
                    to='/login'
                    exact
                >
                    <p>Login</p>
                </NavLink>
                <NavLink
                    to='/signup'
                    exact
                >
                    <p>Signup</p>
                </NavLink>
                <img width="25px" className="userImage" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user"/>
            </div>
        </div>
    );
}

export default NavBar;