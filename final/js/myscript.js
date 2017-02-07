$(document).ready(function() {
	$(".library").click(function(){
        $(".sublibrary").slideToggle(600);
        $(".subgenres").hide(600);
    });


	$(".genres").click(function(){
	        $(".subgenres").slideToggle(600);
	        $(".sublibrary").hide(600);
	    });


	$('.gemlist').click(function(){
        $(".gemsbody").slideToggle(600);
    });

    $('.worldslist').click(function(){
        $(".worldsbody").slideToggle(600);
    });

    $('.inspirationlist').click(function(){
        $(".inspirationbody").slideToggle(600);
    });

});


var options = {
  valueNames: [ 'title', 'author' ]
};
var userList = new List('books', options);
