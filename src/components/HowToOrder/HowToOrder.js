import React from 'react'
import './howtoorder.css'

const HowToOrder = () => {
    return(
        <>
            <div className = "order-container">
                <p className = "order-title">Pemesanan Melalui :</p>
                <ul className = "order-option-container">
                    <li><a href = "https://shopee.co.id/rizkiplastik" alt = "shopee" className = "order-shopee">Shopee</a></li>
                    <li><a href = "https://wa.me/62XXXXXXXXXXX?text=Saya%20tertarik%20dengan%20barang%20Anda%20yang%20dijual" alt = "whatsapp" className = "order-wa">Whatsapp</a></li>
                    <li><a href = "https://www.google.com/maps/@-6.2399913,107.0657552,15z?hl=id" alt = "whatsapp" className = "order-ots">Toko Offline</a></li>


                </ul>
            </div>
        </>
    )
}

export default HowToOrder