import React from "react";
import './slider.css';
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
const Slider = () => {
    const { loading : loadingCategories, error : errorCategories, data : dataCategories } = useQuery(GET_CATEGORIES);
    return(
        <>
            <div className = "slider-container">
                <div className = "slider-container-centre">
                    
                    {loadingCategories ?"" : errorCategories ? "" :
                        dataCategories.categories.map((data,index) => {
                            if(index < 3){
                                return (
                                    <div className = "slider-content-container">
                                        <div className ="slider-img-container">
                                            <img src = {data.url_img} className = "slider-img" alt = "category-image"></img>
                                        </div>
                                        <p className = "slider-title">{data.title}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Slider