$(document).ready(function(){




var num = 10;

for (var i = 0; i < num*num; i++) {
    $('#wrapper').append('<div class="block"></div>');   
}

    var sideValue = Math.floor(500/num);
    var side = sideValue + "px";
    $(".block").css({'height':side, 'width':side});
$(".block").hover(function() {
        $(this).addClass('selected');
});


$('#reset').click(function() {
    $(".block").animate({opacity: 0});
    $(".block").removeClass('selected');
    $(".block").animate({opacity: 1});
       
    }); 
$('#size').click(function() {  
    var newSize = prompt('Enter a new size: 10, 25, 50 or 100');
    $(".block").remove();
    for (var i = 0; i < newSize*newSize; i++) {
        $('#wrapper').append('<div class="block"></div>');   
}
    var sideValue = Math.floor(500/newSize);
    var side = sideValue + "px";
    $(".block").css({'height':side, 'width':side});
    $(".block").hover(function() {
        $(this).addClass('selected');
});
    
    
    });

});