// *************** Extra Reducers *****************
export const statePostClient = (state, action) => {
  if (typeof action.payload !== "string") state.clients.unshift(action.payload);
};

export const stateGetClients = (state, action) => {
  state.status = "succeeded";
  state.data = action.payload;
  state.copyClients = action.payload;
  state.clients = action.payload;
};

export const statePutClients = (state, action) => {
  const { id, name, email, phone } = action.payload;
  const indexClient = state.clients.findIndex((client) => client.id === id);

  if (indexClient !== -1) {
    state.clients[indexClient].name = name;
    state.clients[indexClient].email = email;
    state.clients[indexClient].phone = phone;
  }
};

export const stateToggleStatusClient = (state, action, status) => {
  const clientFounded = state.clients.find(
    (client) => client.id === state.clientSelected
  );
  if (clientFounded) clientFounded.enable = status;
};

export const stateToggleVipClient = (state, action, status) => {
  const clientFounded = state.clients.find(
    (client) => client.id === state.clientSelected
  );
  if (clientFounded) clientFounded.vip = status;
}

// *************** Reducers *****************

export const stateSortedByAlph = (state, action) => {
  const { order } = action.payload;
  const allClients = [...state.copyClients];
  const clientsSorted =
    order === "todos"
      ? allClients
      : state.clients.sort((a, b) =>
          order === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
  state.clients = clientsSorted;
};

export const stateFilterByVips = (state, action) => {
  const { order } = action.payload;
  const allClients = [...state.copyClients];
  const clientsSorted =
    order === "todos"
      ? allClients
      : state.clients.sort((a, b) =>
          order === "asc" ? a.vip - b.vip : b.vip - a.vip
        );
  state.clients = clientsSorted;
};

export const stateFilterByEnabled = (state, action) => {
  const { orderEn } = action.payload;
  const allClients = [...state.copyClients];
  const clientsSorted =
    orderEn === "todos"
      ? allClients
      : state.clients.sort((a, b) =>
          orderEn === "asc" ? a.enable - b.enable : b.enable - a.enable
        );
  state.clients = clientsSorted;
};

export const stateOrderByPurchases = (state, action) => {
  const { orderP } = action.payload;
  const allClients = [...state.copyClients];
  const clientsSorted =
    orderP === "todos"
      ? allClients
      : state.clients.sort((a, b) =>
          orderP === "asc"
            ? a.totalPurchased - b.totalPurchased
            : b.totalPurchased - a.totalPurchased
        );
  state.clients = clientsSorted;
};
