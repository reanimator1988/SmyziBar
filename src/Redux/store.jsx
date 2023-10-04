import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Redux.jsx';


const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
