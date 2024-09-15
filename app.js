const h1_tag = document.querySelector('#num');
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');

let count = 0
h1_tag.innerText = count

btnPlus.addEventListener('click', () => {
  count++
  h1_tag.innerText = count
})
btnMinus.addEventListener('click', () => {
  count--
  h1_tag.innerText = count
})
