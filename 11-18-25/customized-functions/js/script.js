
  function changeColorAndContent(){
  $("#div1").css({"background-color": "red", "width": "90%"});
  $("#div2").css({"background-color": "blue", "width": "80%"});
  $("#div3").css({"background-color": "blue", "width": "80%"});
  let divcontent = $("#div4").html();
  $("#div1").html(divcontent);
  }


$("#btn1").on("click", function(){
changeColorAndContent();
});

$("#btn2").on("click", function(){
changeColorAndContent();
});

$("#btn3").on("click", function(){
changeColorAndContent();
});


function CalculateSum(number1, number2){
  let Sum = number1 + number2;
  return Sum;
};

console.log(CalculateSum(13, 15));
let number3 = 2;
let number4 = 6;
console.log(CalculateSum(number3, number4))


$("#calculate-button").on("click", function(){
    let input1Value = Number($("#input1").val());
    let input2Value = Number($("#input2").val());
    let calculationResult = CalculateSum(input1Value , input2Value);
    $("#result").html("The result of the calculation is " + calculationResult +".")
})


let ArrayOfStrings = ["", "apple", "pear", "", "strawberry"];
let NewStringsArray = ArrayOfStrings.filter(function(element){
            return element !== "";
        });
console.log(NewStringsArray);


let ANewString = "Hello";
let ANewStringLength = ANewString.length;
console.log(ANewStringLength);


let ANewArray= ["apple", "orange", "pear"];
let ANewArrayLength = ANewArray.length;
console.log(ANewArrayLength);


console.log(typeof("hello")); // Returns "string"
console.log(typeof(123));     // Returns "number"
console.log(typeof(true));    // Returns "boolean"
console.log(typeof(["apple", "orange", "pear"])); 
