$(document).ready(function() {
	$("button").click(function(){
        $("h3").slideToggle(300);
    });
    $('button').click(function() {
    $('i').toggle();
    $(this).toggleClass("hamburger x");
});

});