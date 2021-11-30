import React from 'react';
import './ProductCategories.css';

import Cart from '../Cart/Cart';
import { useParams } from "react-router-dom";
import {
    useQuery,
    gql
  } from "@apollo/client";

const GET_PRODUCT = gql`
query MyQuery($_eq: Int!) {
  categories_aggregate(where: {id: {_eq: $_eq}}) {
    nodes {
      id
      title
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
  }
}
`;


const ProductCategories = () => {
    let params = useParams();
   
    const {loading : loadingProduct, error: errorProduct, data:dataProduct} = useQuery(GET_PRODUCT,{
        variables :{
            _eq: params.categoryId
        }
    });
    return(
        <>
            {loadingProduct ? "" : errorProduct ? "" :
           
            <div className = "product-container">
              <div className = "product-container-centre">
                  <p className = "product-category-route">{`Kategori : ${dataProduct.categories_aggregate.nodes[0].title}`}</p>
                  {/* { console.log(dataProduct.categories_aggregate.nodes)} */}
                  {/* <p className = "product-topic">Semua Produk</p> */}
                  <Cart 
                      data = {dataProduct.categories_aggregate.nodes[0].products}
                  />
              </div>
            </div>
          }
        </>
    )
}

export default ProductCategories