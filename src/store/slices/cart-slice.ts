import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/features/products/models";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  selectedItems: number[];
  total: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  selectedItems: [],
  total: 0,
  totalItems: 0,
};

const calculateTotals = (items: CartItem[], selectedItems: number[]) => {
  const selectedItemsList = items.filter((item) => selectedItems.includes(item.id));
  const total = selectedItemsList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = selectedItemsList.reduce((sum, item) => sum + item.quantity, 0);
  return { total, totalItems };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      }

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    toggleItemSelection: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.selectedItems.indexOf(itemId);

      if (index > -1) {
        state.selectedItems.splice(index, 1);
      } else {
        state.selectedItems.push(itemId);
      }

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    selectAllItems: (state) => {
      state.selectedItems = state.items.map((item) => item.id);

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    deselectAllItems: (state) => {
      state.selectedItems = [];

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    removeSelectedItems: (state) => {
      state.items = state.items.filter((item) => !state.selectedItems.includes(item.id));
      state.selectedItems = [];

      const totals = calculateTotals(state.items, state.selectedItems);
      state.total = totals.total;
      state.totalItems = totals.totalItems;
    },

    clearCart: (state) => {
      state.items = [];
      state.selectedItems = [];
      state.total = 0;
      state.totalItems = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleItemSelection,
  selectAllItems,
  deselectAllItems,
  removeSelectedItems,
} = cartSlice.actions;
export default cartSlice.reducer;
