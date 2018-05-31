let array = ["javascript" , 100,{} , [] , true];

// console.log(array[6]);

//Try it out #1...
let favs = ["Rogue One" , 51, true, 2004];

favs.reverse();

console.log(favs);

console.log(Array.isArray(favs));

console.log(favs);

favs.unshift("Pizza");//begging//push at the end...

favs.pop();//will keep last member...

let first = favs.shift();//remove the first item in Array and returns that removed item to you as your varibble 'first'...

console.log(favs)

//access the last member of the Array
//access the second-to-last member of the array

console.log(favs[favs.length - 2]);//second...

console.log(favs[favs.length - 1]);//last...

//Splice: Remove elements and optionally add others. Returns the removed elements in a new array...

//one arg will remove that index and everything after...
console.log(favs, "before");
let  removedItems = favs.splice(2, 1, false, "Faith", "Rocky");

console.log(favs, "this is the result of splice");

console.log(removedItems, "the items that we removed")

const products = [["blanket", 12.99, "The best blanket around."], ["rattle", 4.99, "It rattles man..."], ["diapers", 12.99, "They cath the doo doo"]];

// let copy = products.slice();

let copy = products.slice();

console.log(favs.indexOf("Rogue One"));

let favMovie = ["The GodFather" , "Al Pacino"];
let secondFav = ["Days of Thunder" , "Tom Cruse"];
let thirdfav = ["Top Gun" , "Tom Cruse"];
let fourthfav = ["Rocky" , "Sylvester Stallone"];
let fifthfav = ["Unforgiven" , "Clint Eastwood"]

let favoriteMovies = [];

favoriteMovies.push(favMovie, secondFav, thirdfav, fourthfav, fifthfav);

let titles =[];

titles.push[favoriteMovies[0] [0] , favoriteMovies[1][0]];
// console.log(favs.last Index of rouge one)
