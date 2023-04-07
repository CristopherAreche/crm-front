const validation = (info) => {
  let errors = {};
  if (!info.name) {
    errors.name = "No puede estar vacío";
  }
  if (!info.email) {
    errors.email = "No puede estar vacío";
  }
  if (!info.phone) {
    errors.phone = "No puede estar vacío";
  }

  return errors;
};

export default validation;
