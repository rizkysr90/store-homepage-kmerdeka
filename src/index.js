import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://united-parrot-18.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': "MeUZ13Sn9oenBbF4X7pCTIbxP66lrhS6Xn5y8IaO9oR3xEWjhoknVAaJ8VEXV2Je"
  }
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <ApolloProvider client = {client}>
        <App />
      </ApolloProvider>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
