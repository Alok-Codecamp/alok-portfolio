import React from 'react';
import './NavBar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import myResume from '../../../Rezumi/Alok Kumar.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
       <>
       <nav className='Nav-bar-text'>
         <div className='logo'>
          Alok.ME
         </div>
         <p className='bar-line'>
           <FontAwesomeIcon color='white' icon={faBars}/>
         </p>
        <ul className='' >
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Porject</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
       </nav>
       <div className='responsive'>
       <ul >
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Porject</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
       </div>
       
       
       </>
    );
};

export default Navigation;