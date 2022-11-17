
const changeColorEl = document.querySelector(".change-color");
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector(".color");
changeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.innerHTML = color.toUpperCase();
  return;
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}