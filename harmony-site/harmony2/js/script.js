

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
