
import { ADD_PRODUCT, COMPLETE_PRODUCT, REMOVE_PRODUCT, DECREMENT, INCREMENT } from "../actions/product";

const initialState = [
  {
    id: 1,
    title: 'table',
    completed: false,
    quantity: 1
  },
  {
    id: 2,
    title: 'lamp',
    completed: false,
    quantity: 1
  },
  {
    id: 3,
    title: 'chair',
    completed: false,
    quantity: 1
  },
  {
    id: 4,
    title: 'sofa',
    completed: false,
    quantity: 1
  },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: return [...state, {
      id: Math.random() + '',
      title: action.payload.title,
      completed: false,
      quantity: 1
    }];
    case REMOVE_PRODUCT: return state.filter(productItem => productItem.id !== action.payload);
    case COMPLETE_PRODUCT: return state.map(productItem =>
      productItem.id === action.payload ? { ...productItem, completed: true } : productItem);
      case DECREMENT:
        return state.map(productItem =>
          (productItem.id === action.payload && productItem.quantity > 0)? { ...productItem, quantity: productItem.quantity - 1 } : productItem);
      case INCREMENT:
        return state.map(productItem =>
          (productItem.id === action.payload) ? { ...productItem, quantity: productItem.quantity + 1  } : productItem);
    default: return state;
  }
};

export default cartReducer;

