const validation = (infoClient) => {
  let errors = {};
  if (!infoClient.name) {
    errors.name = "No puede estar vacio";
  }

  return errors;
};

export default validation;
