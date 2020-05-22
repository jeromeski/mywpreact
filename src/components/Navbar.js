/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import $ from 'jquery';


const app = {};

function Navbar() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
      app.mobileMenu();
  }, []);

  app.mobileMenu = function() {
    $(document).click(function(e) {
      const target = $(e.target);
      const iconNav = $('#nav_bar nav');
      if (target.is('span') && !toggle) {
        setToggle(true);
        iconNav.toggleClass('show');
        $('#mobile-link span').addClass('icon-x');
        $('#mobile-link span').removeClass('icon-menu');
      } else {
        iconNav.removeClass('show');
        $('#mobile-link span').addClass('icon-menu');
        $('#mobile-link span').removeClass('icon-x');
        setToggle(false);
      }
    });
  };

  return (
    <div id='nav_bar'>
      <a className='logo' rel='index' to='/'>
        <img
          src={Logo}
          alt='Front End Developer Logo, MERN Developer Logo, React Developer Logo'
        />
      </a>
      <nav>
        <NavLink exact to='/' rel='index' className='nav-link'>
          <span className='icon-home1'></span>
        </NavLink>
        <NavLink to='/about' rel='about' className='nav-link'>
          <span className='icon-user'></span>
        </NavLink>
        <NavLink to='/skills' rel='skills' className='nav-link'>
          <span className='icon-tool'></span>
        </NavLink>
        <NavLink rel='works' to='/works' className='nav-link'>
          <span className='icon-eye'></span>
        </NavLink>
        <NavLink rel='contact' to='/contact' className='nav-link'>
          <span className='icon-mail'></span>
        </NavLink>
      </nav>
      <ul className='social-media'>
        <li>
          <a to='https://twitter.com/d_JeromeG_b'>
            <span className='icon-twitter'></span>
          </a>
        </li>
        <li>
          <a to='https://www.linkedin.com/in/jerome-gacoscosim-5b3972166/'>
            <span className='icon-linkedin'></span>
          </a>
        </li>
        <li>
          <a to='fb.me/jerome.webdeveloper'>
            <span className='icon-facebook'></span>
          </a>
        </li>
        <li>
          <a
            to='#'
            // target='_blank'
          >
            <span className='icon-rss'></span>
          </a>
        </li>
      </ul>
      <a id='mobile-link' to='#'>
        <span className='icon-menu'></span>
        <span className='icon-x hidden'></span>
      </a>
    </div>
  );
};

export default Navbar;
