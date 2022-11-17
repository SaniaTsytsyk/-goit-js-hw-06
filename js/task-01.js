const Numberofcategories = document.querySelectorAll("li.item");
console.log('Number of categories :', Numberofcategories.length);

const category1 = Numberofcategories[0].firstElementChild;
console.log('Category : ', category1.textContent);
const listAllels = category1.nextElementSibling;

const childOfList = listAllels.children.length;
console.log('Elements : ', childOfList);

const category2 = Numberofcategories[1].firstElementChild;
console.log('Category : ', category2.textContent);
const listAllels2 = category2.nextElementSibling;

const childOfList2 = listAllels2.children.length;
console.log('Elements : ', childOfList2);

const category3 = Numberofcategories[2].firstElementChild;
console.log('Category : ', category3.textContent);
const listAllels3 = category3.nextElementSibling;

const childOfList3 = listAllels3.children.length;
console.log('Elements : ', childOfList3);