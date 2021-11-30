import React from 'react';
import './detail.css';


const Details = (props) => {
    return(
        <>
         
            <div className = "details-container" key = {props.data.id}>
                <div className = "details-img-container">
                    <img className = "details-img" src = {props.data.url_img} alt ="img-cart" />
                </div>
                <div className = "details-info-container">
                    <div className = "details-heading-container">
                        <p className = "details-heading">{props.data.name}</p>
                    </div>
                    
                        {
                        
                            props.data.is_promo ?  <div className = "details-info-price-container">
                                <p className = "details-info-price">Rp {new Intl.NumberFormat(['ban', 'id']).format(props.data.price - (props.data.price * (props.data.discount / 100)))}</p>
                                <div className = "details-info-discount-container">
                                    <p className = "details-discount-value">{props.data.discount}%</p>
                                    <p className = "details-info-price-before">Rp {new Intl.NumberFormat(['ban', 'id']).format(props.data.price)}</p>   

                                </div>
                            </div>
                            :  <div className = "details-info-price-container">
                                <p className = "details-info-price">Rp {new Intl.NumberFormat(['ban', 'id']).format(props.data.price)}</p>   
                            </div>
                        }
                
                    <div className = "details-product-info-container">
                        <p className = "details-info-size">{
                            props.data.size >= 1000 ?`Berat/pcs :${props.data.size / 1000} Kg` :`Berat/pcs : ${props.data.size} Gr`
                        }</p>
                        {
                            props.data.stok === 0 ? <p className = "details-info-available empty-details">Stok Habis</p>: props.data.stok > 0 && props.data.stok <=10 ? <p className = "details-info-available details-limited">Stok Terbatas</p> : <p className = "details-info-available">Stok Tersedia</p>

                        }
                    </div>
                </div>
                <div className = "details-description-container">
                    <p className = "details-description-title">Deskripsi Produk :</p>
                    <p className = "details-description">{props.data.description}</p>
                </div>
               
            </div>
         
        </>
    )
}

export default Details