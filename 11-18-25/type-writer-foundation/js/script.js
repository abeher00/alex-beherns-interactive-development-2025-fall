
let String1 = "Hello, this is my first string!";
let Array1 = String1.split(" ");
console.log(Array1);


let String2 = "Apple and Pear and Banana and Oragne";
let Array2 = String2.split(" and ");
console.log(Array2);


let Fruits = ['Apple', 'Pear', 'Banana', 'Oragne'];
Fruits.forEach(function(item){
  let sentence = "I like eating " + item + "!<br>";
  $("body").append(sentence);
});


let MyString = "Hello, World!";
let YourString = "Nice to Meet You!";
console.log(MyString.startsWith("Hello"));
console.log(MyString.startsWith("Hi"));
console.log(YourString.startsWith("Nice"));
console.log(YourString.startsWith("You"));





console.log(MyString.endsWith("World!"));
console.log(MyString.endsWith("Earth!"));
console.log(MyString.endsWith("You"));
console.log(MyString.endsWith("You!"));

let MyString2 = "Hello, Earth!";
MyString2 = MyString2.replace("Earth", "Mars");
let MyString3 = MyString2.replace("Mars", "Venus"); 
console.log(MyString2);
console.log(MyString3);