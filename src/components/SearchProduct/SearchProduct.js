import React from 'react';
import { useParams } from 'react-router';
import Cart from '../Cart/Cart';
import './searchproduct.css';
import {
    useQuery,
    gql
  } from "@apollo/client";


const GET_PRODUCT = gql`
query MyQuery($name: String!) {
    products(where: {name: {_ilike: $name}}) {
      id
      is_promo
      name
      price
      size
      stok
      url_img
      discount
    }
  }
  
`;
const SearchProduct = () => {
    let params = useParams();

    const {loading : loadingProduct, error: errorProduct, data:dataProduct} = useQuery(GET_PRODUCT,{
        variables : {
            name : `%${params.name}%`
        }
    });
    return (
        <>
            {loadingProduct ? "" : errorProduct ? "" :
            <div className = "product-container">
              <div className = "product-container-centre">
                  <p className = "result-search-query">Hasil pencarian : <span className = "result-search-content">{`' ${params.name} '`}</span></p>
                  <Cart 
                      data = {dataProduct.products}
                  />
              </div>
            </div>
          }
        </>
    )

}

export default SearchProduct