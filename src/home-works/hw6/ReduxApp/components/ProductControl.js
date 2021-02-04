import React from 'react';
import { Container } from "semantic-ui-react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

function ProductControl() {
  return (
    <Container>
      <AddProductForm />
      <ProductList />
    </Container>
  );
}

export default ProductControl;

