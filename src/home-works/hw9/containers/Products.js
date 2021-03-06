import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Card } from "semantic-ui-react";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import ProductItem from "../components/ProductItem";
import { getCurrentAuthState } from '../redux/selectors/auth';
import { getProducts, getProductsLoading } from "../redux/selectors/products";


function Products() {
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsLoading);
  const { user } = useSelector(getCurrentAuthState);
  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      <Card.Group>
        {user && products.map(product => <ProductItem key={product.id} product={product}/>)}
        <h1>
        {!user && <span>Hello, please <Link to='/signin'>login</Link> to see products</span>}
      </h1>
      </Card.Group>
    </Container>
  );
}

export default Products;
