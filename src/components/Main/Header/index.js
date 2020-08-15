import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      {/* ##### Header Area Start ##### */}
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <a className="nav-brand" href="/"><img src="img/core-img/logo.png" alt="" /></a>
            {/* Navbar Toggler */}
            <div className="classy-navbar-toggler">
              <span className="navbarToggler"><span /><span /><span /></span>
            </div>
            {/* Menu */}
            <div className="classy-menu">
              {/* close btn */}
              <div className="classycloseIcon">
                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
              </div>
              {/* Nav Start */}
              <div className="classynav">
                <ul>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              {/* Nav End */}
            </div>
          </nav>
          {/* Header Meta Data */}
          <div className="header-meta d-flex clearfix justify-content-end">
            {/* Search Area */}
            <div className="search-area">
              <form action="#" method="post">
                <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            {/* Favourite Area */}
            <div className="favourite-area">
              <a href="#"><img src="img/core-img/heart.svg" alt="" /></a>
            </div>
            {/* User Login Info */}
            <div className="user-login-info">
              <a href="#"><img src="img/core-img/user.svg" alt="" /></a>
            </div>
            {/* Cart Area */}
            <div className="cart-area">
              <a href="#" id="essenceCartBtn"><img src="img/core-img/bag.svg" alt="" /> <span>3</span></a>
            </div>
          </div>
        </div>
      </header>
      {/* ##### Header Area End ##### */}

    </div>
  )
}

Header.propTypes = {

}

export default Header
