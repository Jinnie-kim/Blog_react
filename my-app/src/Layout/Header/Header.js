import React from 'react';
import LogoSvg from '../../assets/Logo.svg';

import Login from '../../components/Login/Login';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='max-width'>
                <h1>
                    <a href='./'>
                        <img src={LogoSvg} alt="My Blog" />
                    </a>
                </h1>
                <Login />
            </div>
        </header>
    )
}

export default Header;