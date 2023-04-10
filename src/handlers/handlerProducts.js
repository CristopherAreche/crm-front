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

export const statePostProduct = (state, action) => {
  if (typeof action.payload !== "string")
    state.products.unshift(action.payload);
};
export const statePutProduct = (state, action) => {
  const {
    id,
    name,
    quantity,
    enable,
    cost_price,
    sale_price,
    discount,
    category,
    image,
  } = action.payload;
  const indexProduct = state.products.findIndex((product) => product.id === id);

  if (indexProduct !== -1) {
    state.products[indexProduct].name = name;
    state.products[indexProduct].quantity = quantity;
    state.products[indexProduct].enable = enable;
    state.products[indexProduct].cost_price = cost_price;
    state.products[indexProduct].sale_price = sale_price;
    state.products[indexProduct].discount = discount;
    state.products[indexProduct].category = category;
    state.products[indexProduct].image = image;
  }
};
