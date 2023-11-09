import toolKit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolKit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  // reducer: cartReducer,
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE_CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
