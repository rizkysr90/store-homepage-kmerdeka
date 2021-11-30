import React from "react";
import './promo.css';
import Cart from "../Cart/Cart";
import {
    useQuery,
    gql
  } from "@apollo/client";

const GET_PRODUCT = gql `
query MyQuery {
    products(where: {is_promo: {_eq: true}}) {
      id
      is_promo
      discount
      url_img
      stok
      price
      name
      size
    }
  }
`;
const Promo = () => {
    const {loading : loadingProduct, error: errorProduct, data:dataProduct} = useQuery(GET_PRODUCT);
    return(
        <>
            {loadingProduct ? "" : errorProduct ? "" :
            <div className = "product-container">
              <div className = "product-container-centre">
                  {/* <p className = "product-topic">Semua Produk</p> */}
                  <Cart 
                      data = {dataProduct.products}
                  />
              </div>
            </div>
          }
        </>
        
    )
}

export default Promo