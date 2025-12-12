
var timeoutId;
var isPaused = false;
var text = "Old movies look perfect on your four by three screen, your built in VHS player whirring softly while winding through the tape. Many find rewinding tapes to be annoying, but I find it endearing. It's physical evidence of the length of the tape, and you rewind them without fault every time. ";
var i = 0;
var speed = 50;
var isBackspacing = false;

function typeWriter() {
  if (isPaused) return; 

  var $tvText = $('#tv-text');
  var currentText = $tvText.text();

  if (!isBackspacing) {
  
  if (i < text.length) {
    $('#tv-text').append(text.charAt(i));
    i++;
    timeoutId = setTimeout(typeWriter, speed);
  }
}else {

    if (i > 0) {

      $tvText.text(currentText.substring(0, currentText.length - 1));
      i--;
      timeoutId = setTimeout(typeWriter, speed); 
    } else {
      
      clearTimeout(timeoutId);
    }
  }
}


function pauseTyping() {
  isPaused = true;
  clearTimeout(timeoutId);
}


function resumeTyping() {
  if (isPaused && i < text.length) {
    isPaused = false;
    typeWriter();
  }
}

function toggleReverse() {
  isBackspacing = !isBackspacing;
  if (!isPaused) {

    clearTimeout(timeoutId);
    typeWriter();
  }}


$(document).ready(function() {
  typeWriter();
});
  

$('#pauseButton').click(function() {
pauseTyping()
    $('#playButton').show();
    $("#pauseButton").hide();
         $('#word3').hide();
    $("#word4").show();
  });


$('#playButton').click(function() {
resumeTyping()
    $('#playButton').hide();
    $("#pauseButton").show();
        $('#word3').show();
    $("#word4").hide();
  });

  $('#rewind').click(function() {
  toggleReverse();
 $('#rewind').hide();
    $("#forward").show();
     $('#word1').hide();
    $("#word2").show();
});

  $('#forward').click(function() {
  toggleReverse();
   $('#rewind').show();
    $("#forward").hide();
         $('#word1').show();
    $("#word2").hide();
});

  
