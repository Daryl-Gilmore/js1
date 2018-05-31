let birthday="12-17-1966"
confirm("Is"+ birthday + "your birthday");
let name= ""; //truthy or true
let age = 51; //falsey or false

if(!name && age) { //true.
  alert("one exist");
}
if(name || age) {//true.
}

const numAge = 51; //Number
const stringAge = "51"; // String
if(numAge != stringAge) {
  alert("they\'re the same!'")
} //this should always be false...why isnt it?

let objectOne ={
  name: "Daryl"
};

let objectTwo = {
  name: "Daryl"
};
// alert(objectOne === objectTwo); // Always false

alert(objectOne == objectTwo);

if(numAge <= stringAge.length) {
  alert("whaaaaat");
}

var mystring = "birthday";
var objString = new String(mystring);
if (mystring == objString) {alert("whaaat");}
//alert(myString === objString);

let limit = 12;
limit++;
limit = limit + 1;

console.log(limit);
limit += 7;
limit = limit / 7;
console.log(limit);
//

let myNumber = "77";

myNumber = parseInt("muNumber");

console.log(isNaN(myNumber));

console.log(myNumber++);
//

 let numOne = prompt("Give me a number", "10");
 let numTwo = prompt("Give me a number", "10");
 numTwo = parseInt(numTwo);
 // alert(numOne + numTwo);

if(numOne > numTwo) {
  alert("Your first number is bigger than your second numTwo");
} else if(numOne === numTwo ){
  alert("They are the same...");
} else {
  alert("Something went wrong...");
}

let firstName = prompt("What is your first name" , "Daryl");

switch(firstName) {
  case "Daryl":
  alert("Hello Daryl");
  break;
  case "john":
  alert("Your name is very common.");
  break;
  default:
  alert("I have never heard that name before.");
  break;
}
