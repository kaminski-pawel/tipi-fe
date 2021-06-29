function component() {
  const element = document.createElement("div");
  element.innerHTML = "webpack";
  return element;
}
document.body.appendChild(component());
