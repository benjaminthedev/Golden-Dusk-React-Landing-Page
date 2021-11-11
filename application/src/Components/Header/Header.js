import React from 'react'
import FindAStore from './FindAStore';
import Logo from './Logo'
import MenuList from './MenuList'

import './Header.scss';

const Header = () => {
    return (
        <>
          <div className="header__top">
             
             <div className="header__findAStore">
                <FindAStore />
            </div>


            <div className="header__logo">
                <Logo />
            </div>

            <div className="header__loginLink">
                <a href="https://sunnamusk.com/my-account/" target="_blank" rel="noreferrer" className="loginLink">Sign in or register</a>
            </div>

          </div>  
            <MenuList />
        </>
    )
}

export default Header
