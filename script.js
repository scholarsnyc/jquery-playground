$(document).ready(function () {
  
  Mousetrap.bind('x', function() {
    
    var w = parseInt($('#herbert').attr('width'));
    
    $('#herbert').animate({
      width: w * 1.10 +'px',
    });
  });
  
});