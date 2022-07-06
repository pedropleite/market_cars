import React from 'react';
import Burger from '../Burger/Burger';
import { Nav, Logo } from './Styles';

const Header = () => {
    return (
        <Nav>
            <Logo className="logo">WebCars</Logo>
            <Burger />
        </Nav>
    );
};

export default Header;
