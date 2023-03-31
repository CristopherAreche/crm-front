import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClient: (state, action) => {
      const { name, email, phone } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
    },
  },
});

export const { addClient } = clientSlice.actions;
export default clientSlice.reducer;
