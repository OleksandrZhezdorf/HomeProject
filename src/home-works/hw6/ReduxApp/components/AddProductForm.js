  
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Input } from "semantic-ui-react";
import { addProduct } from "../redux/actions/product";
import useLocalStorage from '../redux/localStorage';

function AddProductForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useLocalStorage('');
  const [quantity, setQuantity] = useLocalStorage('');


  const createProduct = () => {
    dispatch(addProduct(title, quantity));
    setTitle('');
    setQuantity('');
  };

  return (
    <Container className = 'form-product'>
      <Input value={title} placeholder='Name' onChange={e => setTitle(e.target.value)} />
      <Input style={{ marginLeft: 10 }} value={quantity} placeholder='Quantity' onChange={e => setQuantity(e.target.value)} />
      <Button style={{ marginLeft: 10 }} primary onClick={createProduct}>ADD PRODUCT</Button>
    </Container>
  );
}

export default AddProductForm;