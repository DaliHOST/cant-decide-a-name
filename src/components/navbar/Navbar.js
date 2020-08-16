import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    return (
        <>
        <div id="mySidenav" class="sidenav">
            <Link class="closebtn" onClick={closeNav}>&times;</Link>
            <Link to='/'>Home</Link>
            <Link to='#'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='#'>Contact</Link>
        </div>
        <div className='navbar'>
            <span style={{fontSize:'30px',cursor:'pointer',fontWeight:'800'}} onClick={openNav}>&#9776;</span>
            <span style={{fontSize:'27px',color:'whitesmoke',marginLeft:'-20px',marginTop:'3px'}}>Menu</span>
        </div>
        </>
    )
}
