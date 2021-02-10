import React from 'react';
import { useDispatch} from 'react-redux'
import { Button, Icon, List } from "semantic-ui-react";
import { completeProduct, decrement, increment, removeProduct } from "../redux/actions/product";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <List.Item>
      { product.completed && <List.Icon name='checkmark' verticalAlign='middle'/> }
      <List.Content>
        <List.Header>
          <span style={{ marginRight: 25 }} onClick={() => dispatch(completeProduct(product.id))}>{product.title} --- {product.quantity}</span>
          <Button onClick={() => dispatch(decrement(product.id))}> - </Button>
          <Button onClick={() => dispatch(increment(product.id))}> + </Button>
          <Icon onClick={() => dispatch(removeProduct(product.id))} name='trash alternate' verticalAlign='middle' color='black' /></List.Header>
      </List.Content>
    </List.Item>
  );
}

export default ProductItem;

