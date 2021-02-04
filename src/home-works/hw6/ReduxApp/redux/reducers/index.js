  
import productList from './product';
import cartList from './cart';
import { combineReducers } from "redux";


export default combineReducers({
  product: combineReducers({
    list: productList,
    cart: cartList
  }),

})