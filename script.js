$(document).ready(function(){
	$(".projects").click(function(){
    	$(".projectsexpanded").fadeToggle(600);
    	$(".exercisesexpanded").hide(600);
    	$(".responsesexpanded").hide(600);
    	$(".codeexpanded").hide(600);
	});

	$(".exercises").click(function(){
    	$(".exercisesexpanded").fadeToggle(600);
    	$(".projectsexpanded").hide(600);
    	$(".responsesexpanded").hide(600);
    	$(".codeexpanded").hide(600);
	});

	$(".responses").click(function(){
    	$(".responsesexpanded").fadeToggle(600);
    	$(".exercisesexpanded").hide(600);
    	$(".projectsexpanded").hide(600);
    	$(".codeexpanded").hide(600);
	});

	$(".codeacademy").click(function(){
    	$(".codeexpanded").fadeToggle(600);
    	$(".projectsexpanded").hide(600);
    	$(".exercisesexpanded").hide(600);
    	$(".responsesexpanded").hide(600);
	});
});