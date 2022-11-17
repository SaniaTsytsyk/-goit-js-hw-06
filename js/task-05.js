const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onFormInput);

function onFormInput(event) {
   console.log(event.currentTarget.value);

   outputEl.textContent = event.currentTarget.value;

   if (event.currentTarget.value === "") {
      return "Anonymous"
   }
}