import React from 'react';
import "./ProductApp.css";
import { Provider } from 'react-redux';
import { Container } from "semantic-ui-react";
import createStore from "./redux/createStore";
import Routers from './Routers';


const store = createStore();

function ProductsApp() {
  return (
   <Container>
     <Provider store={store}>
       <Routers />
     </Provider>
   </Container>
  );
}

export default ProductsApp;

