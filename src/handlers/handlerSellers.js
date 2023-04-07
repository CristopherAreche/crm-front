//*************** Extra Reducers *****************

export const statePostSeller = (state, action) => {
  if (typeof action.payload !== "string") state.sellers.unshift(action.payload);
};

export const statePutSeller = (state, action) => {
  const { id, name, email, phone } = action.payload;
  const indexSeller = state.sellers.findIndex((seller) => seller.id === id);

  if (indexSeller !== -1) {
    state.sellers[indexSeller].name = name;
    state.sellers[indexSeller].email = email;
    state.sellers[indexSeller].phone = phone;
  }
};

export const stateToggleStatusSeller = (state, action, status) => {
  const sellerFounded = state.sellers.find(
    (seller) => seller.id === state.sellerSelected
  );
  if (sellerFounded) sellerFounded.enable = status;
};
