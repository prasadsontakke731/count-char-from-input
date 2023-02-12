const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

function charCount(input) {
  var length = input.value.length;
  var max = 100;
  if (length > max) {
    input.value = input.value.substring(0, 100);
  } else {
    text.innerHTML = length + ' ' + 'of 100 Charecters';
  }
}
