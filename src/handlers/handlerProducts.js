export const stateToggleStatusProduct = (state, action, status) => {};

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

// *************** Reducers *****************
export const stateSortedByAlph = (state, action) => {
  const { order } = action.payload;
  const allProducts = [...state.copyProducts];
  const productsSorted =
    order === "todos"
      ? allProducts
      : state.products.sort((a, b) =>
          order === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
  state.products = productsSorted;
};

export const stateFilterByEnabled = (state, action) => {
  const { orderEn } = action.payload;
  const allProducts = [...state.copyProducts];
  const productsSorted =
    orderEn === "todos"
      ? allProducts
      : state.products.sort((a, b) =>
          orderEn === "asc" ? a.enable - b.enable : b.enable - a.enable
        );
  state.products = productsSorted;
};

export const stateOrderByPrice = (state, action) => {
  const { orderP } = action.payload;
  const allProducts = [...state.copyProducts];
  const productsSorted =
    orderP === "todos"
      ? allProducts
      : state.products.sort((a, b) =>
          orderP === "asc"
            ? a.sale_price - b.sale_price
            : b.sale_price - a.sale_price
        );
  state.products = productsSorted;
};

export const stateCategory = (state, action) => {
  const products = state.products;
  const allProducts = [...state.copyProducts];

  const filteredProducts =
    action.payload === "todos"
      ? allProducts
      : allProducts.filter((p) => p.category.includes(action.payload));

  state.products = filteredProducts;
};
