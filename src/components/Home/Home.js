import React from "react";
import './home.css';
import cover from '../../assets/img/bg-cover.jpg'
import Slider from "../Slider/Slider";
const Home = () => {
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
                        <div className = "category-btn">Lihat Semua</div>
                    </div>
                    <Slider />

                </div>
            </div>
            
       </>
    )
}

export default Home