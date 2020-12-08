let changeValue;
const handleOnChange = (e, id, className) => {
  let check = true;
  changeValue = !check;
  if (e.checked) {
    checkBox(id, className);
  } else {
    checkBox(id, className);
  }
};

const checkBox = (id, className) => {
  $(`${id}`).is(":checked")
    ? $(`${className}`).show()
    : $(`${className}`).hide();
};
