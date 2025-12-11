

$(document).ready(function() {
  const console = $('html');
  const screenText = $('.screen-text');
  const walk = 30; 

  console.on('mousemove', function(event) {
    const { offsetWidth: width, offsetHeight: height } = console[0]; 
    
    let { pageX: x, pageY: y } = event; 

    const consoleRect = console[0].getBoundingClientRect();
    x = x - consoleRect.left;
    y = y - consoleRect.top;


    const xWalk = Math.round((x / width) * walk - (walk / 2));
    const yWalk = Math.round((y / height) * walk - (walk / 2));


    screenText.css('text-shadow', `${xWalk}px ${yWalk}px 7px rgba(255, 0, 0, 1)`);
  });


  });




