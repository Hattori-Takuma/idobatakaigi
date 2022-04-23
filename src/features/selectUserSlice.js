import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: "",
  }
}

export const selectUserSlice = createSlice({
  name: 'selectUser',
  initialState,
  reducers: {
    activeUser : (state, action) => {
      state.value.name = action.payload.name
    }
  },
});

export const { activeUser } = selectUserSlice.actions;

export const selectUser = (state) => state.selectUser.value;

export default selectUserSlice.reducer;