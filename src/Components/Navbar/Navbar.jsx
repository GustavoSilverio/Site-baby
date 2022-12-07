import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><h1 className='title'>L + G</h1></Link>
            <ul className='list'>
            <Link to='/ourHistory'><li>Nossa história</li></Link>
            <Link to='/loveSoMuch'><li>Porque te amo tanto</li></Link>
            <Link to='/moments'><li>Momentos</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;