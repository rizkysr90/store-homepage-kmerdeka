import React from "react";
import './slider.css';
import {useNavigate} from "react-router-dom";



const Slider = (props) => {
    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/product/category/${id}`);
    }
    return(
        <>
            <div className = "slider-container">
                <div className = "slider-container-centre">
                    
                    {props.statusLoading ?"" : props.statusError ? <p>Oops,something went wrong</p>:
                        props.data.categories.map((data,index) => {
                            if(index < 3){
                                return (
                                    <div className = "slider-content-container" key = {data.id} onClick = {() => handleClick(data.id)}>
                                        <div className ="slider-img-container">
                                            <img src = {data.url_img} className = "slider-img" alt = "category"></img>
                                        </div>
                                        <p className = "slider-title">{data.title}</p>
                                    </div>
                                )
                            }else {
                                return ""

                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Slider