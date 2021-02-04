export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const COMPLETE_PRODUCT = 'COMPLETE_PRODUCT';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addProduct = (title, quantity )=> ({
  type: ADD_PRODUCT,
  payload: {
    title,
    quantity
  }
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  payload: productId
});

export const completeProduct = productId => ({
  type: COMPLETE_PRODUCT,
  payload: productId
});


export const increment = (productId, quantity) => ({
    type: INCREMENT,
    payload: {
      productId,
      quantity
    }
});

export const decrement = (productId, quantity) => ({
    type: DECREMENT,
    payload: {
      productId,
      quantity
    }
});