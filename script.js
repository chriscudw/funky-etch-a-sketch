$(document).ready(function(){

var size = 20;
for (var i = 0; i < size*size; i++) {
    $('#wrapper').append('<div class="block"></div>');   
}
$('.block').hover(function() {
        $(this).addClass('selected');
});


$('#reset').click(function() {
    $('.block').animate({opacity: 0});
    $('.block').removeClass('selected');
    $('.block').animate({opacity: 1});
    $(this).animate({opacity: 0.5});
    $(this).animate({opacity: 1});
       
    }); 
$('#size').click(function() {  
    var newSize = prompt('Enter a new height');
    $('.block').remove();
    for (var i = 0; i < newSize*newSize; i++) {
    $('#wrapper').append('<div class="block"></div>');   
}
    $('.block').hover(function() {
        $(this).addClass('selected');
});
    
    
    });
    
});