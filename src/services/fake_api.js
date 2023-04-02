const getActivities = () => {
  return new Promise((resolve) => {
    const activities = [
      {
        metodo: "Llamada",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Email",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Visita",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Reunión",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Llamada",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Email",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Llamada",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Visita",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Reunión",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
      {
        metodo: "Email",
        estado: "Pendiente",
        fechaCreacion: "2023-04-01",
      },
    ];
    resolve(activities);
  });
};

export default getActivities;
