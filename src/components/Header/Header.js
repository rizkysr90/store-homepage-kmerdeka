import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import searchIcon from '../../assets/icon/icons8-search.svg';
const Header = () => {
    return(
        <>
            <div className = "header-container">
                <div className = "company-logo-container">
                    <div className = "company-logo-centre">
                        <h1 className = "company-logo">Logo</h1>
                    </div>
                </div>
                <div className = "search-container">
                    <div className = "search-centre">
                        <input type = "text" id = "name" name = "name" placeholder = "Cari bahan kue"></input>
                        <img src = {searchIcon} alt = "search-btn" className = "search-home-icon"/>
                    </div>
                </div>
            </div>
            <nav className = "nav-container">
                    <ul className = "navbar-flex">
                        <li><NavLink to = "/" >Home</NavLink></li>
                        <li><NavLink to = "/product">Produk</NavLink></li>
                        <li><NavLink to = "/promo">Promo</NavLink></li>
                    </ul>
                </nav>
        </>
    )
}

export default Header