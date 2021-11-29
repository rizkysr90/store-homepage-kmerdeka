import React from 'react'
import './index.css'
import { Routes, Route} from "react-router-dom";
import Category from './Category/category';
import Home from './Home/Home';
import Product from './Product/Product';
import Promo from './Promo/Promo';
import Header from './Header/Header';

const AppWrapper = () => {
    return(
        <div className = "main-container">
            <Header />
        <Routes>
            <Route path = "/" element = {<Home />}></Route>
            <Route path = "/product" element = {<Product />}></Route>
            <Route path = "/promo" element = {<Promo />}></Route>
            <Route path = "/category" element = {<Category/>}></Route>

        </Routes>
        </div>
    )
}

export default AppWrapper