let changeValue;
const handleOnChange = (e, name) => {
  let check = true;
  changeValue = !check;
  if (e.checked) {
    checkBox(name);
  } else {
    checkBox(name);
  }
  adjustWidth();
};

const checkBox = (a) => {
  $(`#${a}`).is(":checked") ? $(`.${a}`).show() : $(`.${a}`).hide();
};
