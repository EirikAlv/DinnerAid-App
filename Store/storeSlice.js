import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    groceries: [],
    UOM: [],
  },
  reducers: {
    setGroceries: (state, action) => {
      state.groceries = action.payload;
    },
    setUOM: (state, action) => {
      state.UOM = action.payload;
    },
  },
});

export const { setGroceries, setUOM } = storeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000);
// };

export default storeSlice.reducer;
