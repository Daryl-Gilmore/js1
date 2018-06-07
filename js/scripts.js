// //MASTER
//
// let products =[['blanket' [12.99], 'The best blanket around']]
//
// // let i = 0;
// //
// // while (i < products.length) { //parameters
// //   console.log(products[i]);
// //   i++; //Incrementor
// // }
// //
// // console.log(i);
// //
// // //4 loop...
//  for(let i = products.length - 1; i >= 0; i--) {
//   console.log(products[i]);
//
// };
// // }
// //
// // //Do while loop...
//
// let i = 0;
// let newProduct = ['Squeeky Toy', 19.99, 'Really good toy'];
// do {
//   //Add newProduct to the second member of products arry...
// if(i === 1) products[i].push(newProduct);
//   i++;
// } while(i < products.length);
//
// //console.log(products);
//
//
// products.forEach((product) => {
//   console.log(product);
// });
//
//
// //FUNCTIONS...
//
// console.log("Hello World");
//
// //THERE IS NO VALUE TO THE FUCTION UNTIL YOU CALL...
//
// function capitalCase(string) { //FUNCTION DEFINITION
//   let words = string.split("");
//   words.forEach(word => {
//     let letters = word.split(" ")
//     let capped = word.split("")[0].toUpperCase();
//     letters.splice(0, 1, capped);
//   });
//   return words.join(" ");
// };
//
//
//
//
// let newString = capitalCase("peter piper"); //Function Call...
//
// console.log(newString);
//
// let CapsName = capitalCase("captain america");
//
// console.log("captain america");
//
// //console.log(capsName);
//
// //myCoolFunction("cheese");
//
// let myCoolFunction = (stuff, things, ect) => { //anonymous function...
//   console.log(stuff) //1 argument fat arrow function...
// };
//
// //TRY IT OUT #1...
// /*Accept 1 argument (age of the dog in years).
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alert the answer.*/
// function ageDog(years) {
//   if(!isNaN(years)) {
//   return years * 7;
// } else {
//     ageDog(parseInt(prompt("How old is your dog in years?", "3")));
//   }
// }
//
// alert(ageDog(parseInt(prompt("How old is your dog in years?", "3"))));
//
// //Try it out # 2...
//
// function lifetimeCalculator(age, dailyUse) {
//   if (!isNaN(age) && !isNaN(dailyUse)) {
//     const death = 80;
//     return (death - age) * (dailyUse * 365);
//   } else {
//     userAge = prompt('how old are you?', '30');
//     userUse = prompt('How much do you use every day?', '1');
//     lifetimeCalculator(parseInt(userAge), parseInt(userUse)); //18250//
//   }
// }
//
// let userAge = prompt('how old are you?', '30');
// let userUse = prompt('How much do you use every day?', '1');
//
// let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));
//
// alert(`You will need ${usage} to last until you're 80.`);
//

//day4 take home....

// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
let todos = [
  ['completeAssignments'],
  ['repairRef'],
  ['work']
];
//
// Using a for loop, change the items in the array by adding days they should be completed by to each index.
for(let i = 0; i < todos.length; i++) {
  let timeline = prompt('How many days will it take to get ${todos[i][0]} done?' , "2");
  timeline = !isNaN(parseInt(timeline)) ? parseInt(timeline) : 2;
 todos[i].unshift(timeline);
}
todos.sort();
console.log(todos, 'after sort');


// Hint: which data type is best suited for your todo items?
// Using a while loop, find the task that will take the longest and log it to the console.
let longest = todos[0];
let j = 0;
while(j < todos.length) {
  if(todos[j][0] > longest[0]) longest = todos[j];
  // longest = todos[j][0] > longest[0]  longest = todos[j];
  j++;
}
longest.push('this');

// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
let z = 0;
do {
  if(todos[z][todos[z].lenght - 1] !== 'this') {
    todos[z].push('done');
  }
  z++;
}while(z < todos.length);

// Finally, alert all the tasks that are marked done in the todo array.
let doneItems = [];
todos.forEach(todo => {
    if(todo[todo.length - 1] === 'done')
    doneItems.push(todo);
  }
)
alert(doneItems);
// let goal = 0;

// while (goal < 0) {
//   goal++;
// }

// console.log(0);

// let goal ="done";

// let done = "";

// let done = 1;

// done {
//   done = 1 + 1;
// } done (0 < 2);

// console.log(done), (1,2);

// alert done = (1, 2);


//expected output: 2

//function's...
//console.log()same as console.log('');

//console.log (arr)

//['hello', 'world'].forEach(arr =>( {
//})

//Array.forEach()

//string.toUpperCase()

//function toUpperCase(string) {
// return the uppercase of string
//}
