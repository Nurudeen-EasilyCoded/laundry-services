import CartReducer from './CartReducer';
import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './ProductReducer';

export default configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});
