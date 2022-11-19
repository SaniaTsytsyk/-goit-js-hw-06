// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// inputEl.onchange = function () {
//    const newValue = inputEl.value

//    newValue == "" || newValue == null
//       ? outputEl.textContent = "Anonymous"
//       : outputEl.textContent = newValue;
// };

const refs = {
   input: document.querySelector("#name-input"),
   nameMessage:
      document.querySelector("#name-output"),
};

refs.nameMessage.textContent =
   "Anonymous";

refs.input.addEventListener(
   "input", onInputChange);

function onInputChange(event) {
   if (!event.currentTarget.value) {
      refs.nameMessage.textContent =
         "Anonymous";
   } else {
      refs.nameMessage.textContent =
         event.currentTarget.value;
   }
}