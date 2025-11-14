   console.log("test");
   
   $("#carousel1-next").on("click",function(){
    let currentMargin;
   currentMargin = $(".first-image").css("margin-left");
   let currentMarginInNumber =parseFloat(currentMargin);
   console.log(currentMargin);
    console.log(currentMarginInNumber);
    let numberOfImages = $("#carousel1>img").length;
    console.log(numberOfImages);
    let containerWidth = $("#carousel1").outerWidth();
    let largestPossibleNegativeMargin = (numberOfImages - 1) * containerWidth;
    if(Math.round(currentMarginInNumber) !== Math.round(-largestPossibleNegativeMargin)){
        let currentMarginPercentage;
        currentMarginPercentage = Math.ceil(currentMarginInNumber / containerWidth) * 100;
        console.log(currentMarginPercentage)
        let newMarginPercentage;
        newMarginPercentage = currentMarginPercentage - 100;
        $(this).parent().parent().children(".first-image").css({"margin-left": newMarginPercentage + "%"});
    }else{



    }

   });

   $("#carousel1-prev").on("click", function(){
    let currentMargin;
   currentMargin = $(".first-image").css("margin-left");
   let currentMarginInNumber =parseFloat(currentMargin);
   console.log(currentMargin);
    console.log(currentMarginInNumber);
    let numberOfImages = $("#carousel1>img").length;
    console.log(numberOfImages);
    let containerWidth = $("#carousel1").outerWidth();
/*     let largestPossibleNegativeMargin = (numberOfImages - 1) * containerWidth; */
    if(Math.round(currentMarginInNumber) !== 0){
        let currentMarginPercentage; 
        currentMarginPercentage = Math.floor(currentMarginInNumber / containerWidth) * 100;
        console.log(currentMarginPercentage)
        let newMarginPercentage;
        newMarginPercentage = currentMarginPercentage + 100;
        $(this).parent().parent().children(".first-image").css({"margin-left": newMarginPercentage + "%"});
    }else{



    }

   });


   let numberOne = 100.05
   let numberTwo = Math.round(numberOne);
   console.log(numberOne);
   console.log(numberTwo)

   $("#button").on("click", function(){
$("#box1").toggleClass("more-margin");

   });