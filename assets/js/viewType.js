
// view type

let radif = document.getElementById('radif');
let soton = document.getElementById('soton');

radif.addEventListener('click', function () {
  radif.classList.add('active');
  soton.classList.remove('active');
  radif.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll('.cols').forEach((item) => {
    item.classList.add('radif');
    item.classList.remove('soton');
  })
})
soton.addEventListener('click', function () {
  soton.classList.add('active');
  radif.classList.remove('active');
  soton.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll('.cols').forEach((item) => {
    item.classList.add('soton');
    item.classList.remove('radif');
  })
})