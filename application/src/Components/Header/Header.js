import React from 'react'

import MenuList from './MenuList'

const Header = () => {
    return (
        <>
          <div className="header__top">
             
             <div className="header__findAStore">
                <a href="/">Icon Find a store</a>
            </div>


            <div className="header__logo">
                <a href="/">Logo Here!</a>
            </div>

            <div className="header__logo">
                <a href="/">Sign in or register</a>
            </div>

          </div>  
            <MenuList />
        </>
    )
}

export default Header
