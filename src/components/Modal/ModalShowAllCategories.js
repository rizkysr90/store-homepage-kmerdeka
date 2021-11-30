import React from 'react';
import "./modalshowallcategories.css";
import {useNavigate} from "react-router-dom";

const ModalShowAllCategories = (props) => {
    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/category/${id}`);
    }
    return(
        <>
            <div className = "modal-show-all-container">
                <div className = "modal-info-container">
                    <h4>Semua Kategori</h4>
                    <div className= "modal-show-all-close" onClick = {() => props.closeModal(false)}>Tutup</div>

                </div>
                <div className = "modal-show-all-centre">
                    
                    {props.statusLoading ?"" : props.statusError ? "" :
                        props.data.categories.map((data) => {
                            return (
                                <div className = "modal-show-all-content-container" key = {data.id} onClick = {() => handleClick(data.id)} >
                                    <div className ="slider-img-container">
                                        <img src = {data.url_img} className = "slider-img" alt = "category"></img>
                                    </div>
                                    <p className = "slider-title">{data.title}</p>
                                </div>
                            )
                        })
                       
                    }
                </div>
            </div>
        </>
    )
}

export default ModalShowAllCategories