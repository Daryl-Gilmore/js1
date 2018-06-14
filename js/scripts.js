let button =
document.querySelector('button');
let div =
document.querySelector('div');
const body =
document.querySelector('body');
button.add
div.innerHTML = '<p>Lorem ipsum</p>';

let newH1 = document.createElement('h1');
newH1.textContent = 'Login here!!';
// console.log(newH1);
// body.appendChild(newH1);

newH1.classList.add('text-center');

body.insertBefore(newH1, div);

div.id = 'red_text';

div.classList.add('text-center');

div.addEventListener('click', e => {
  div.classList.toggle('text-center');
  div.classList.replace('blue-background',
  'green-background');
});


newH1.className = 'text-center';



myImg = document.createElement('img');
myImg.setAttribute('src', 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg')
div.appendChild(myImg);
console.log(myImg);


for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  } else if (i % 5 === 0) {
  }else if(i % 3 === 0) {
      p.textContent = 'Fizz';
    } else {
      p.textContent = i;
    }
    body.appendChild(p);
  }
