import { createSlice } from '@reduxjs/toolkit';


const loadOrdersFromLocalStorage = () => {
  try {
    const serializedOrders = localStorage.getItem('orders');
    if (serializedOrders === null) {
      return [];
    }
    const orders = JSON.parse(serializedOrders);

    const updatedOrders = orders.map(order => ({
      ...order,
      price: isNaN(order.price) ? 0 : parseFloat(order.price),
      cocktailName: order.cocktailName || '',
    }));

    return updatedOrders;
  } catch (error) {
    console.error('Error loading orders from localStorage:', error);
    return [];
  }
};

const loadTotalAmountFromLocalStorage = () => {
  try {
    const serializedTotalAmount = localStorage.getItem('totalAmount');
    if (serializedTotalAmount === null) {
      return 0;
    }
    return parseFloat(serializedTotalAmount);
  } catch (error) {
    console.error('Error loading total amount from localStorage:', error);
    return 0;
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    orders: loadOrdersFromLocalStorage(),
    totalAmount: parseFloat(loadTotalAmountFromLocalStorage()),
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.totalAmount += parseFloat(action.payload.price);
      localStorage.setItem('orders', JSON.stringify(state.orders));
      localStorage.setItem('totalAmount', state.totalAmount.toString());
    },
    removeOrder: (state, action) => {
      const indexToRemove = action.payload;
      const removedOrder = state.orders[indexToRemove];
      state.orders.splice(indexToRemove, 1);
      state.totalAmount -= parseFloat(removedOrder.price);
      localStorage.setItem('orders', JSON.stringify(state.orders));
      localStorage.setItem('totalAmount', state.totalAmount.toString());
    },
  },
});

export const { addOrder, removeOrder } = cartSlice.actions;

export default cartSlice.reducer;

