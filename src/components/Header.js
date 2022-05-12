import React, { Component } from 'react';
import { Nav,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import catLogo from '../assets/cats/logo.png'

class Header extends Component {
    render() {
        return (
            <Nav className="header-nav">
                <NavItem>
                    <NavLink to="/">
                        <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo" width="150" height="150" />      
                        </NavLink>         
                 </NavItem>
             </Nav>
        );
    }
}

export default Header;