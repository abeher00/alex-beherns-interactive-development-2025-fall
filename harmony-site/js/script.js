/* 
const div2 = document.getElementById('spinningParagraph2');
const words2 = div2.textContent.split(' ');
div2.innerHTML = ''; // Clear the original content

words2.forEach(word => {
  const span = document.createElement('span');
  span.textContent = word + ' ';
  span.classList.add('spinningword2');
  div2.appendChild(span);
});

 */


/*     $(document).ready(function() {
        var myString = "They call you outdated, but I think you're magnificent, and intelligent in your design. I adore how you spin CD's, your laser reading the microscopic grooves that make me want to move. You read those disks to me as I work, as I play, and as I sleep, the bright blue of your LED's softly lighting up the room. Those disks contain a language withinin themselves that I cannot read, so I admire how you can play them with ease, keeping the quality of the songs safe in the heart of your chasis. May you play evermore.";
        $("#spinningParagraph2").text(myString);
        let Array1 = myString.split(" ");
        console.log(Array1);



        Array1
    }); */



$(document).ready(function() {
  var text = $('#spinningParagraph2').text();
  var words = text.split(' ');
  var newHtml = '';

  $.each(words, function(index, word) {
    newHtml += '<span>' + word + '</span> ';
  });

  $('#spinningParagraph2').html(newHtml);

  $('#spinningParagraph2 span').hover(
    function() {
      $(this).addClass('spinningword2');
    },
    function() {
      $(this).addClass('spinningword2');
    }
  );
});
