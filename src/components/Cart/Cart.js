import React from 'react';
import "./cart.css";
import {useNavigate} from "react-router-dom";

const Cart = (props) => {
    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    }
    return(
       <>
           
                <div className = "cart-product-container">
                    {
                        props.data.map((productData) => {
                            return(
                                <div className = "cart-container" key = {productData.id} onClick = {() => handleClick(productData.id)}>
                                    <div className = "cart-img-container">
                                        <img className = "cart-img" src = {productData.url_img} alt ="img-cart" />
                                    </div>
                                    <div className = "cart-heading-container">
                                        <p className = "cart-heading">{productData.name}</p>
                                    </div>
                                   
                                        {
                                        
                                            productData.is_promo ?  <div className = "cart-info-price-container">
                                                <p className = "cart-info-price">Rp {new Intl.NumberFormat(['ban', 'id']).format(productData.price - (productData.price * (productData.discount / 100)))}</p>
                                                <div className = "cart-info-discount-container">
                                                    <p className = "cart-discount-value">{productData.discount}%</p>
                                                    <p className = "cart-info-price-before">Rp {new Intl.NumberFormat(['ban', 'id']).format(productData.price)}</p>   

                                                </div>
                                            </div>
                                            :  <div className = "cart-info-price-container">
                                                <p className = "cart-info-price">Rp {new Intl.NumberFormat(['ban', 'id']).format(productData.price)}</p>   
                                            </div>
                                        }
                              
                                    <div className = "cart-info-container">
                                        <p className = "cart-info-size">{
                                            productData.size >= 1000 ?`Berat/pcs :${productData.size / 1000} Kg` :`Berat/pcs : ${productData.size} Gr`
                                        }</p>
                                        {
                                            productData.stok === 0 ? <p className = "cart-info-available empty">Habis</p>: productData.stok > 0 && productData.stok <=10 ? <p className = "cart-info-available limited">Terbatas</p> : <p className = "cart-info-available">Tersedia</p>

                                        }
                                        
                                            
                                        

                                    </div>
                            </div>
                            )
                        })
                    }
                </div>
            
      </>
    )

}
export default Cart