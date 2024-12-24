import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";


const Navbar = () => {
    // Using useState hook to manage state in a functional component
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state
    const handleToggle = () => {
        setIsOpen(!isOpen);  // Toggling the isOpen state
    };
     console.log("isOpen",isOpen)
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to="/">
                        <img src={logo} alt='Beach Resort' style={{ width: '150px', height: 'auto' }} />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>
                        <FaAlignRight className='nav-icon' />
                    </button>
                </div>
                {/* Updated state usage and fixed Link tag */}
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
