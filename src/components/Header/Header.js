import React, { useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import searchIcon from '../../assets/icon/icons8-search.svg';

const Header = () => {

    let navigate = useNavigate();
    
    const handleClick = (param) => {
        navigate(`/product/search/${param}`);
        setUserInput("");
    }
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const [userInput,setUserInput] = useState("");
    return(
        <>
            <div className = "header-container">
                <div className = "company-logo-container">
                    <div className = "company-logo-centre">
                        <h1 className = "company-logo">BakingStore</h1>
                    </div>
                </div>
                <div className = "search-container">
                    <div className = "search-centre">
                        <input type = "text" id = "name" name = "name" placeholder = "Cari bahan kue" value = {userInput} onChange = {(e) => handleChange(e)}></input>
                        <img src = {searchIcon} alt = "search-btn" className = "search-home-icon" onClick = {() => handleClick(userInput)}/>
                    </div>
                </div>
            </div>
            <nav className = "nav-container">
                    <ul className = "navbar-flex">
                        <li><NavLink to = "/" onClick = {() => setUserInput("")}>Home</NavLink></li>
                        <li><NavLink to = "/product" onClick = {() => setUserInput("")}>Produk</NavLink></li>
                        <li><NavLink to = "/promo" onClick = {() => setUserInput("")}>Promo</NavLink></li>
                    </ul>
                </nav>
        </>
    )
}

export default Header