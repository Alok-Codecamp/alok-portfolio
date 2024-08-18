import React from 'react';
import './NavBar.css';
import myResume from '../../../Rezumi/Alok Kumar.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import mern from '../../../image/banner logo/mern.png'

const Navigation = () => {


    return (
       <div>
       <nav className='Nav-bar-text'>
         <div className='logo'>
          <img src={mern} alt="" width="62px" />
         </div>
         <ul className='desktop-menu'>
          <li><a href="/home">Home</a></li>
          <li><a href="/home/#All-projects">Porject</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href='/home/#contact' >contact</a></li>
          <li><a href={myResume} download>Download Resume</a></li>
        </ul>

        
        </nav>
        <input type="checkbox" name="" id="menu-btn" />
         <label className='bar-line' htmlFor="menu-btn">
         <FontAwesomeIcon color='white' icon={faBars}/>
         </label>
          <ul className='mobile-menu' >
          <li><a className='active' href="/home">Home</a></li>
          <li><a href="/home/#All-projects">Porject</a></li>
          <li><a href="/blog">My Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/home/#contact">Contact</a></li>
          <li><a href={myResume} download>Download Resume</a></li>
        </ul>
       </div>
    );
};

export default Navigation;