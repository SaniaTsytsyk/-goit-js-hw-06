const counter = {
   value: 0,
   increment() {
      console.log('increment -> this', this);
      this.value += 1;
   },
   decrement() {
      console.log('decrement -> this', this);
      this.value -= 1;
   },
};

const decdrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decdrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decdrementBtn.addEventListener('click', function () {
   console.log('Нажали на декремент');
   counter.decrement();
   console.log(counter);
   valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
   console.log('Нажали на інкремент');
   counter.increment();
   console.log(counter);
   valueEl.textContent = counter.value;
});