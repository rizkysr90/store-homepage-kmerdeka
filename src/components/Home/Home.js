import React, { useState } from "react";
import './home.css';
import cover from '../../assets/img/bg-cover.jpg'
import Slider from "../Slider/Slider";
import ModalShowAllCategories from "../Modal/ModalShowAllCategories";
import {
    useQuery,
    gql
  } from "@apollo/client";

const GET_CATEGORIES = gql `
query MyQuery {
    categories {
      id
      title
      url_img
    }
  }
  
`;
const Home = () => {
    
    const { loading : loadingCategories, error : errorCategories, data : dataCategories } = useQuery(GET_CATEGORIES);
    const [showAllCategories,setShowAllCategories] = useState(false);
    return(
       <>
            <div className = "cover-img-container">
                <div className = "cover-motto-container">
                    <h2>One Stop Solution</h2>
                    <p>For your baking ingredients</p>
                </div>
                <img src = {cover} alt = "background-rules"></img>
            </div>
            <div className = "category-container">
                <div className = "category-container-centre">
                    <div className = "category-info-container">
                        <h3 className = "category-text">Kategori</h3>
                        <div className = "category-btn" onClick = {() => setShowAllCategories(true)}>Lihat Semua</div>
                    </div>
                    <Slider 
                        data = {dataCategories}
                        statusLoading = {loadingCategories}
                        statusError = {errorCategories}
                    />
                </div>
                {showAllCategories ? <ModalShowAllCategories
                    closeModal = {setShowAllCategories}
                     data = {dataCategories}
                     statusLoading = {loadingCategories}
                     statusError = {errorCategories}
                />:""}
            </div>
            {/* <section className = "section-contact-container">
                <div className = "section-contact-centre">
                    <h2 className ="section-contact-title">Penawaran Spesial</h2>
                    <p>Tidak menemukan produk yang dicari ? Ingin negosiasi harga ?</p>
                    <ul>
                        <li className = "section-contact-content">
                            <div className ="section-content-bullet-list"></div>
                            <p className = "section-content">Dapatkan barang yang paling sesuai dengan kebutuhan anda</p>
                        </li>
                        <li className = "section-contact-content">
                            <div className ="section-content-bullet-list"></div>
                            <p className = "section-content">Bisa negosiasi harga untuk harga lebih murah</p>
                        </li>
                        <li className = "section-contact-content">
                            <div className ="section-content-bullet-list"></div>
                            <p className = "section-content">Kemudahan mencari barang yang langka di pasaran</p>
                        </li>
                    </ul>
                </div>
            </section> */}
            
       </>
    )
}

export default Home