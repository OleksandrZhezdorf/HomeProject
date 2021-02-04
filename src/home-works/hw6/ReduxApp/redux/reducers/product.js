
import { ADD_PRODUCT, COMPLETE_PRODUCT, REMOVE_PRODUCT, DECREMENT, INCREMENT } from "../actions/product";

const initialState = [
  {
    id: 1,
    title: 'table',
    completed: false,
    quantity: 10
  },
  {
    id: 2,
    title: 'lamp',
    completed: false,
    quantity: 34
  },
  {
    id: 3,
    title: 'chair',
    completed: false,
    quantity: 9
  },
  {
    id: 4,
    title: 'sofa',
    completed: false,
    quantity: 3
  },

];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: return [...state, {
      id: Math.random() + '',
      title: action.payload.title,
      completed: false,
      quantity: action.payload.quantity,
    }];
    case COMPLETE_PRODUCT: return state.map(productItem =>
      productItem.id === action.payload ? { ...productItem, completed: true } : productItem);
    case DECREMENT:
      return state.map((productItem, index = action.payload.quantity) =>
        productItem.id === action.payload ? { ...productItem, quantity: index - 1 } : productItem);
    case INCREMENT:
      return state.map((productItem, index = action.payload.quantity) =>
        productItem.id === action.payload ? { ...productItem, quantity: index + 1 } : productItem);
    default: return state;
  }
};

export default productReducer;

