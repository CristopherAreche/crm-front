export const stateToggleStatusProduct = (state, action, status) => {
  const productFounded = state.products.find(
    (product) => product.id === state.productSelected
  );
  if (productFounded) productFounded.enable = status;
};

export const stateDeleteProduct = (state, action) => {
  let filterList = state.products.filter(
    (product) => product.id !== action.payload
  );
  state.products = filterList;
};
