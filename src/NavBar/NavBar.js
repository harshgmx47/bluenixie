import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <h5>Nav Bar</h5>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
            </ul>
            <hr/>
        </div>
    );
    
};
export default NavBar;