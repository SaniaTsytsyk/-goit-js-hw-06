const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// // const fontSizeEl = textEl.style.fontSize
// let inputValue = inputEl.value
inputEl.addEventListener("input", (event) => {
   textEl.style.fontSize = event.currentTarget.value + "px";
})