$(document).ready(function(){
runProg(10);
});

var runProg = function(num){

for (var i = 0; i < num*num; i++) {
    $('#wrapper').append('<div class="block"></div>');   
}
    var sideValue = Math.floor(500/num);
    var side = sideValue + "px";
    $(".block").css({'height':side, 'width':side});
$('.block').hover(function() {
        $(this).addClass('selected');
});
};

$('#reset').click(function() {
    $('.block').animate({opacity: 0});
    $('.block').removeClass('selected');
    $('.block').animate({opacity: 1});
       
    }); 
$('#size').click(function() {  
    var newSize = prompt('Enter a new size');
    $('.block').remove();
    runProg(newSize);
    
    
    });

