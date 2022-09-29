import React, { useState } from 'react';
import { GiGooeyDaemon } from "react-icons/gi";
import { IconContext } from "react-icons";
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar-elements.js'
import { CartWidget } from '../CartWidget/index.jsx';
import { CarritoLink } from '../CartWidget/CartWidgetStyle.js';

import {NavLink, Link} from "react-router-dom";

import { 
    FaBars,
    FaHome,
    FaUserAlt,
    FaTshirt,
    FaTimes,
 } from "react-icons/fa";
 
const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value = {{style: {fontSize: "2.2em"}}}>
            <NavLink to='/'>
                <LogoContainer>
                        <GiGooeyDaemon/>    
                        <p>DripCode</p>
                </LogoContainer>
            </NavLink>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {
                    showMobileMenu ? <FaTimes/> : <FaBars/>
                }
            </MobileIcon>
            <Menu open = {showMobileMenu}>
                <MenuItem>
                    <Link className='Link' to='/' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaHome/>
                            Home
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to='/category/electronics' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                         <div>
                            <FaUserAlt/>
                            Electronics
                        </div> 
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to='/category/jewelery' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaTshirt/>
                            Jewelery
                        </div> 
                    </Link>
                </MenuItem>
                
                <MenuItem>
                    <Link className='Link LinkCartWidget' to='/cart' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <CartWidget/>
                    </Link>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export {Navbar}