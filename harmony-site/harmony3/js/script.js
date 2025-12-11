
/* $(document).ready(function() {
  $('.screen-text').each(function() {
    var originalText = $(this).text();
    var characters = originalText.split(''); // 
    var newHtml = '';


    $.each(characters, function(index, char) {
      newHtml += '<span>' + char + '</span>';
    });

    $(this).html(newHtml);
  });
}); */

$(document).ready(function() {
  const console = $('html');
  const screenText = $('.screen-text');
  const walk = 30; // Max shadow offset in pixels

  console.on('mousemove', function(event) {
    // Get the width and height of the container
    const { offsetWidth: width, offsetHeight: height } = console[0]; 
    
    // Get mouse position relative to the container
    // jQuery normalizes event.pageX and event.pageY
    let { pageX: x, pageY: y } = event; 

    // Adjust coordinates to be relative to the top-left of the hero div
    const consoleRect = console[0].getBoundingClientRect();
    x = x - consoleRect.left;
    y = y - consoleRect.top;

    // Calculate how far the shadow should move
    // Center the effect (from -walk/2 to +walk/2)
    const xWalk = Math.round((x / width) * walk - (walk / 2));
    const yWalk = Math.round((y / height) * walk - (walk / 2));

    // Update the text-shadow property
    screenText.css('text-shadow', `${xWalk}px ${yWalk}px 7px rgba(255, 0, 0, 1)`);
  });


  });




