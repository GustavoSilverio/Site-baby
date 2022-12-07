import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1 className='title'>L + G</h1>
            <ul className='list'>
                <li>Nossa história</li>
                <li>Porque te amo tanto</li>
                <li>Momentos</li>
            </ul>
        </nav>
    );
}

export default Navbar;