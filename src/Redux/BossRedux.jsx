import { combineReducers } from 'redux';
import cartSlice from './Redux.jsx';
import menuSlice from './ReduxMenuConstr.jsx';


const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  menu: menuSlice.reducer,
});

export default rootReducer;