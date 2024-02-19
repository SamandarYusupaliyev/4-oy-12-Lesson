//  Example
// *   'To be or not to be', 'not'  => 'To be or to be'
// *   'I like legends', 'end' => 'I like legs',
// *   'ABABAB','BA' => 'ABAB'
// */

function removeFirstOccurrence(str, value) {
  let index = str.indexOf(value);
  if (index !== -1) {
      return str.slice(0, index) + str.slice(index + value.length);
  } else {
      return str;
  }
}
console.log(removeFirstOccurrence('To be or not to be', 'not')); 
// console.log(removeFirstOccurrence('I like legends', 'end'));
// console.log(removeFirstOccurrence('ABABAB', 'BA'));


// 2-masala

// example
/*
*   '<div>' => 'div'
*   '<span>' => 'span'
*   '<a>' => 'a'
*/
function unbracketTag(str) {
  
}

// 3-masala
// Example
/*   
*   4 => false
*   5 => true
*   6 => false
*   7 => true
*   11 => true
*   12 => false
*   16 => false
*   17 => true
*/

function isPrime(n) {
    if(n==0){
        console.log("false");
    }else{
        console.log("true");
    }
}

isPrime(5);

// 4-masala

// Example

/*
[	
	{ country: 'Belarus', city: 'Brest' },
	{ country: 'Russia', city: 'Omsk' },
	{ country: 'Russia', city: 'Samara' },
	{ country: 'Belarus', city: 'Grodno' },
	{ country: 'Belarus', city: 'Minsk' },
	{ country: 'Poland', city: 'Lodz' }
]
*/

// output
/* 
	{
	  belarus : ["Brest", "Grodno", "Minsk"],
	  russia  : ["Omsk", "Samara"], 
	  poland  : ["Lodz"]
	}
*/


// 5-masala

// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/
 
function getSumBetweenNumbers(n1, n2) {
    console.log(n1+n2);
    console.log(n1-n2);
}
getSumBetweenNumbers(1,2);
getSumBetweenNumbers(-1,1); 

let n1=5;
let n2=10;
let sum =0;
  for(let i=n1; i<=n2; i++){
    sum+=i;
    console.log(i);
}

console.log('sum:'+sum);

// 6-masala

// Input: [1, 5, 6, 1, 5, 7, 2]

// Output: [6, 7, 2]

const getElementsOneTime =[1,5,6,1,5,7,2];
const newgetElementsOneTime=[];

for( let i=1; i<getElementsOneTime.length; i++){
   if(!newgetElementsOneTime.includes(getElementsOneTime[i])){
   newgetElementsOneTime.push(getElementsOneTime[i]);
}

}

console.log(newgetElementsOneTime);
     

// 9-masala

// Input: 
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

function Read(books) {
  books.forEach((book) => {
    if (book.Read) {
      console.log(`${book.author}ning ${book.title} kitobi o'qiglan`);
    } else {
      console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
    }
  });
}

Read(books);


// 10 -masala

const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];






