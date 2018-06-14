let body =
document.getElementsByTagName('body');
//array
console.log(body);

let classes = document.getElementsByClassName('my-header');

console.log(classes[0]);

let id = document.getElementById('my-paragraph');
console.log(id);

//Newer methods:
let tag = document.querySelector('body');
console.log(tag);

let myClass =
document.querySelector('.my-header');
let myid =
document.querySelector('#my-paragraph');
console.log(myid);

let tags =
document.querySelectorAll('body');

//try it out...


function queryDom(methodName,element) {
  switch(methodName.toLowerCase()) {
    case 'getelementsbytagname':
    document.getelementsbytagname(element);
    break;
    case 'querySelector':
    document.querySelector('.${element}');
    break;
    default:
    break;
  }
}

myClass.addEventListener(
  'click', //first arg...
  e => { //second arg CALLBACK function...
  alert ('you clicked on me!!!');
}
)
console.log('hello world');



//1..On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
let button = document.querySelector('button');
let div = document.querySelector('div')
//2..Create event listeners for each:
button.addEventListener(
  'click', //first arg...
  e => { //second arg CALLBACK function...
  alert('you clicked on me!!!');
})

//3..For the button, alert the user with a message when they click it.


//4..For the div, change the color of the background when their mouse goes into the div.

div.addEventListener('mouseenter', e => {
  e.target.stylebackgroundColor = "#e40007";
  console.log(e);
});
const myPageTitle = document.querySelector('h1');
myPageTitle.addEventListener('mouseleave', e => {
console.log(e);
e.target.style.color = "#CCCCCC"
});
