import React from "react";
import './product.css';
import Cart from "../Cart/Cart";
import {
    useQuery,
    gql
  } from "@apollo/client";

const GET_PRODUCT = gql `
query MyQuery {
    products {
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
const Product = () => {

    const {loading : loadingProduct, error: errorProduct, data:dataProduct} = useQuery(GET_PRODUCT);
    return(
        <>
          {loadingProduct ? <p className = "loading-effect">Memuat data</p> : errorProduct ? <p>Oops...Something went wrong</p>:
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

export default Product