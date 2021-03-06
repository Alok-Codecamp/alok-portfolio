import React from 'react';
import './NavBar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import myResume from '../../../Rezumi/Alok Kumar.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
       <div>
       <nav className='Nav-bar-text'>
         <div className='logo'>
          Alok
         </div>
         <ul className='desktop-menu'>
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Porject</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

          <button className='download-resumi'>
            <a href="">Download Resume</a>
          </button>
        </nav>
        <input type="checkbox" name="" id="menu-btn" />
         <label className='bar-line' htmlFor="menu-btn">
         <FontAwesomeIcon color='white' icon={faBars}/>
         </label>
          <ul className='mobile-menu' >
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Porject</a></li>
          <li><a href="#">My Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li> <a href="">Download Resume</a></li>
        </ul>
    
  
       
       </div>
    );
};

export default Navigation;