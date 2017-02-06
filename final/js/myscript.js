$(document).ready(function() {
	$(".library").click(function(){
        $(".sublibrary").slideToggle(300);
    });

    $('.library').click(function() {
	    $('down').toggle();
	    $(this).toggleClass("down up");
	});

});


var options = {
  valueNames: [ 'title', 'author' ]
};

var userList = new List('books', options);

