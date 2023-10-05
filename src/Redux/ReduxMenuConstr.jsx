import { createSlice } from '@reduxjs/toolkit';

const saveDataToLocalStorage = (dataKey, data) => {
  try {
    localStorage.setItem(dataKey, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${dataKey} to localStorage:`, error);
  }
};

const loadOrdersFromLocalStorage = () => {
  try {
    const serializedOrders = localStorage.getItem('menuOrders');
    if (serializedOrders === null) {
      return [];
    }
    const orders = JSON.parse(serializedOrders);

    const updatedOrders = orders.map(order => ({
      ...order,
      price: isNaN(order.price) ? 0 : parseFloat(order.price),
      cocktailName: order.cocktailName || ''
    }));

    return updatedOrders;
  } catch (error) {
    console.error('Error loading orders from localStorage:', error);
    return [];
  }
};

const loadTotalAmountFromLocalStorage = () => {
  try {
    const serializedTotalAmount = localStorage.getItem('menuTotalAmount');
    if (serializedTotalAmount === null) {
      return 0;
    }
    return parseFloat(serializedTotalAmount);
  } catch (error) {
    console.error('Error loading total amount from localStorage:', error);
    return 0;
  }
};

const initialState = {
  selectedItems: loadOrdersFromLocalStorage(),
  totalVolume: loadTotalAmountFromLocalStorage(),
  totalCost: 0,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.selectedItems.push(action.payload);
      saveDataToLocalStorage('menuOrders', state.selectedItems);
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.cocktailName !== action.payload.cocktailName
      );
      saveDataToLocalStorage('menuOrders', state.selectedItems);
    },
    setVolume: (state, action) => {
      state.totalVolume = action.payload;
      saveDataToLocalStorage('menuTotalAmount', state.totalVolume);
    },
    reset: (state) => {
      state.selectedItems = [];
      state.totalVolume = 200;
      state.totalCost = 0;
      localStorage.removeItem('menuOrders');
      localStorage.removeItem('menuTotalAmount');
    },
  },
});

export const { addItem, removeItem, setVolume, reset } = menuSlice.actions;

export default menuSlice.reducer;

