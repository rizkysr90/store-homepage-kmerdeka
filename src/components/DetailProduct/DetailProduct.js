import React from 'react';
import "./detailproduct.css";
import { useParams } from 'react-router';
import {
    useQuery,
    gql
  } from "@apollo/client";
import Details from '../Details/Details';
import HowToOrder from '../HowToOrder/HowToOrder';


const GET_PRODUCT = gql`
query MyQuery($_eq: Int!) {
    products(where: {id: {_eq: $_eq}}) {
      id
      discount
      description
      category_id
      is_promo
      name
      price
      size
      stok
      url_img
    }
  }
`;
const DetailProduct = () => {
    let params = useParams();

    const {loading : loadingProduct, error: errorProduct, data:dataProduct} = useQuery(GET_PRODUCT,{
        variables : {
            _eq : params.productId
        }
    });

    return(
        <>
        {
            loadingProduct ? <p className = "loading-effect">Memuat data</p> : errorProduct ? <p>Oops,Something went wrong</p> : dataProduct.products.length === 0 ?  <p className = "loading-effect">Data tidak ditemukan</p>:
            <div className = "details-product-container">
                <div className = "details-product-centre">
                    <Details 
                        data = {dataProduct.products[0]}
                    />
                    <HowToOrder/>
                </div>
                
            </div>
        }
        </>
    )


}

export default DetailProduct