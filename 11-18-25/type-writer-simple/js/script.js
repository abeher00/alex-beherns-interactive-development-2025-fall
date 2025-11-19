let string1 = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis iaculis nisl. Praesent in condimentum justo. Mauris gravida enim vel mauris porta laoreet. Phasellus varius, est ut facilisis sollicitudin, ligula nisl vestibulum tellus, rhoncus tincidunt lectus ante sit amet lacus. Duis non ex sit amet turpis hendrerit convallis sit amet sit amet magna. Mauris volutpat aliquet sollicitudin. Maecenas ac porta elit. Etiam massa justo, vestibulum a feugiat vitae, placerat ac lorem. Ut elementum, ligula quis maximus dictum, erat orci tincidunt magna, eu elementum libero enim non justo.";

let string1TotalCharacterNumber = string1.length;
let string1IterationIndex = 0;

let string1IntervalID = setInterval(function(){
    $('#typewriting-target').append(string1.charAt(string1IterationIndex));
    string1IterationIndex = string1IterationIndex + 1;
    console.log("1 iteration completed.");
if (string1IterationIndex == string1TotalCharacterNumber){clearInterval(string1IntervalID);}

}, 10);



