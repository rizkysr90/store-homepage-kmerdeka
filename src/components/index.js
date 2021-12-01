import React from 'react'
import './index.css'
import { Routes, Route} from "react-router-dom";

import Home from './Home/Home';
import Product from './Product/Product';
import Promo from './Promo/Promo';
import Header from './Header/Header';
import ProductCategories from './ProductCategories/ProductCategories';
import DetailProduct from './DetailProduct/DetailProduct';
import SearchProduct from './SearchProduct/SearchProduct';
import Footer from './Footer/Footer';
import ErrorPage from './ErrorPage/ErrorPage';

const AppWrapper = () => {
    return(
        <div className = "main-container">
            <Header />
        <Routes>
            <Route path = "/" element = {<Home />}></Route>
            <Route path = "/product" element = {<Product />}></Route>
            <Route path = "/product/category/:categoryId" element = {<ProductCategories />}></Route>
            <Route path = "/product/search/:name" element = {<SearchProduct />}></Route>
            <Route path = "/product/:productId" element = {<DetailProduct />}></Route>
            <Route path = "/promo" element = {<Promo />}></Route>
            <Route path = "*" element = {<ErrorPage/>}></Route>

            {/* <Route path = "/category" element = {<Category/>}></Route> */}
        </Routes>
            <Footer />
        </div>
    )
}

export default AppWrapper