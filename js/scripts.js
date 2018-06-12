//On your takehome-day5 branch write a program that uses functions to:

//1-function powerOftwo(number){
//if(!isNaN(number)) {
 //return number * number;
//} else }
//let answer = powerOftwo()
//}
/////////////////function eval() {
  //let num = prompt('please enter a number');
  //1...Take a number and return the square of that number (power of 2).

//}
//if(!isNaN(num)) {

  // get the square of num enter a Number

 //console.log (num * num);
//} else {
  alert(NaN);
  eval();
//alert  NaN and prompt for a Number

//}

  //2...If a non-number argument is passed into the function, alert NaN and prompt for another response

//}
// eval(); {
//
//   console.log ('two');
// }
//   alert(NaN);
//
// let two = prompt('add another response');

//3...In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period

//function mydog() {
  //let mydog = riggs('capSingleWord'('riggs'));
//}
//console.log('riggs');
//mydog riggs capSingleWord(riggs r) {

        //if(r.isEmpty() || r.length()<2) {

            //return Character.toUpperCase(r.charAt(0))+"";
        //}
        //else {

            //return Character.toUpperCase(r.charAt(0)) + r.substring(1);
      //}
    //}
////////////////////////////////////function mycapt() {
  //let answer = prompt('please answer question?');
  // console.log(answer.charAt(0).toUppercase())
  // console.log(answer.slice(1));
  //let firstLetter = answer.charAt(0).toUpperCase();
  //let restOfword = answer.splice(1);
  //let cap = (firstLetter + restOfword).toString();
  //console.log(cap);
//  if(string.charAt(string.length - 1) !=='.') string = string + '.';
  //return string;

//}
//mycapt()
//4...Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”.
 //Hint: use substring.

 function reverseHalves(string) {
   let letHalf = string.length /2
   letFirstHalf = string.substring(0, halfIndex);
   let secondHalf = string.substring(halfIndex,string.length);
   alert('${secondHalf}${firstHalf}');
 }


//BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
function isPalindrome(string) {
  let reversed = string.split('').reverse().join('')
  if(string === reversed) return true;
  return false
}

//.split('')  returns an array...
//.reverse()  only works on arrays...
//.join('')   returns a string...

if(string === reversed) return true;
return false
