import React, { useState } from 'react';
import { GiGooeyDaemon} from "react-icons/gi";
import { IconContext } from "react-icons";
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MobileIcon } from './Navbar-elements.js'
import { CartWidget } from '../CartWidget/index.jsx';
import {NavLink, Link} from "react-router-dom";
import {useCartContext} from '../../Contex/CartContex.jsx';


import { 
    FaBars,
    FaHome,
    FaTshirt,
    FaTimes,
 } from "react-icons/fa";
import{BsCpu} from "react-icons/bs"
import {GiEmeraldNecklace} from "react-icons/gi"


const Navbar = () => {
    const {totalProducts} = useCartContext();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
        <Wrapper >
            <IconContext.Provider value = {{style: {fontSize: "2.4em"}}}>
            <NavLink to='/'>
                <LogoContainer>
                        <GiGooeyDaemon/>    
                        <p>ZzShop</p>
                </LogoContainer>
            </NavLink>
            <MobileIcon onClick={() =>{
                    setShowMobileMenu(!showMobileMenu);
                }}>
                {
                    showMobileMenu ? <FaTimes/> : <FaBars/> 
                }
            </MobileIcon>
            <Menu open = {showMobileMenu} height = {window.screen.height}>
                <MenuItem>
                    <Link className='Link' to='/' onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                        <div>
                            <FaHome/>
                            Home
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to='/category/electronics' onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                         <div>
                            <BsCpu/>
                            Electronics
                        </div> 
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to='/category/jewelery' onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                        <div>
                            <GiEmeraldNecklace/>
                            Jewelery
                        </div> 
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to="/category/men's clothing" onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                        <div>
                            <FaTshirt/>
                            Men's clothing
                        </div> 
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className='Link' to="/category/women's clothing" onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                        <div>
                            <FaTshirt/>
                            Women's clothing
                        </div> 
                    </Link>
                </MenuItem>
                
                <MenuItem>
                    <Link className='Link LinkCartWidget' to='/cart' onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                    }}>
                        <CartWidget/> <h4>{ totalProducts() > 0 ? totalProducts() : <></> }</h4>
                    </Link>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export {Navbar}