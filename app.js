
  $(document).ready(function() {
  var color = 'white';
  var colors = 'white green red blue yellow'  
  //must add new variable with all colors to be able to controle 
  //all at once
 
 

  $('.box').on('mouseover', function() {  
    $(this).addClass(color); 
   })
  //to get mouseover to change color you must replace 'white' with the word color
//change from click to mouseover allow you to just move mouse to select instead of clicking
 

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  })

    $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })

$('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

 });