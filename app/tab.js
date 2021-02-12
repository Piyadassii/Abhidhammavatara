

$(".arrow").click((event) => {
  const targetText = event.target.parentElement.nextElementSibling;
  const targetArrow = event.target;

  targetText.classList.contains("hidden")
    ? targetText.classList.remove("hidden")
    : targetText.classList.add("hidden");

  targetArrow.classList.contains("rotate")
    ? targetArrow.classList.remove("rotate")
    : targetArrow.classList.add("rotate");
});
