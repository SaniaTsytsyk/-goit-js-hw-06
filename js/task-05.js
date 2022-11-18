const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.onchange = function () {
   const newValue = inputEl.value

   newValue == "" || newValue == null
      ? outputEl.textContent = "Anonymous"
      : outputEl.textContent = newValue;
};