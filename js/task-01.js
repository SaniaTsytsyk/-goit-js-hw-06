const Numberofcategories = document.querySelectorAll("li.item");
console.log('Number of categories :', Numberofcategories.length);

Numberofcategories.forEach(item => {
   const firstElement = item.firstElementChild
   console.log('Category : ', firstElement.textContent);
   console.log('Elements : ', firstElement.nextElementSibling.children.length);
})