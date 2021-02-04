import React, { useMemo }  from 'react';
import { useSelector  } from 'react-redux';
import { List } from "semantic-ui-react";
import ProductItem from "./ProductItem";

function CartList() {
  const { cart, filter } = useSelector(state => state.product);

  const filteredProductList = useMemo(() => {
    return filter ? cart.filter(cart => cart.title.toLowerCase().includes(filter.toLowerCase())) : cart;
  }, [cart, filter]) ;

  return (
    <List divided relaxed>
      { filteredProductList.length === 0 &&  <List.Item>No products to show, please create one or remove the filter</List.Item> }
      { filteredProductList.map(productItem => <ProductItem key={productItem.id} product={productItem}/>) }
    </List>
  );
}

export default CartList;

