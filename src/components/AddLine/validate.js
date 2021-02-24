export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Необходимо ввести имя";
  } else if (!/^([^0-9]*)$/.test(values.firstName)) {
    errors.firstName = "Не должно содержать цифры";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Необходимо ввести фамилию";
  } else if (!/^([^0-9]*)$/.test(values.lastName)) {
    errors.lastName = "Не должно содержать цифры";
  }

  if (!values.email.trim()) {
    errors.email = "Необходимо ввести email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Введен некорректный E-mail";
  }

  if (!values.phone.trim()) {
    errors.phone = "Необходимо ввести телефон";
  }

  if (!values.description.trim()) {
    errors.description = "Необходимо ввести описание";
  }

  if (!values.address.city.trim()) {
    errors.city = "Необходимо ввести город";
  }

  if (!values.address.state.trim()) {
    errors.state = "Необходимо ввести штат/провинцию";
  }

  if (!values.address.streetAddress.trim()) {
    errors.streetAddress = "Необходимо ввести улицу";
  }

  if (!values.address.zip.trim()) {
    errors.zip = "Необходимо ввести индекс";
  }

  return errors;
}
