import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration:'none'}}>
            <div className="navdiv">
                <img src="/images/techvyom_logo.jpeg" alt="Techvyom" style={{height:'100px',width:'120px',marginTop:'30px'}} />
            </div>
            </Link>
        </div>
    )
}

export default Navbar
