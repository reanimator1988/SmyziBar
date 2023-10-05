import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Redux.jsx';
import menuReducer from './ReduxMenuConstr.jsx';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

export default store;
