import React from 'react';
import { ReactComponent as LogoSvg  } from '../../assets/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='max-width'>
                <h1>
                    <a href='./'>
                        <LogoSvg alt='My Blog'/>
                    </a>
                </h1>
            </div>
        </header>
    )
}

export default Header;