import React from 'react';
import profile from '../../assets/profile.jpg';
import iconModify from '../../assets/icon-modify-white.svg'
import iconLogout from '../../assets/icon-logout.svg'

import './LoginButton.css';


const Login = () => {
    return (
        <ul>
            <li className="profile-img"> 
                <a href='#'>
                    <img src={profile} alt='My Page' />
                </a>
            </li>
            <li> 
                <a href='#' className="button">
                    <img src={iconModify} alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li > 
                <button className="button white">
                    <img src={iconLogout} alt="" />
                    <span>Logout</span>
                </button>
            </li>
        </ul>
    )
}

export default Login;