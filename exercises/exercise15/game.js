$(document).ready(function(){
	var choice1 = "";
	var choice2 = "";
	var score = 0;

	$('.left button').click(function(){
		choice1 = $(this).attr('id');
		console.log(choice1);
	});

	$('.right button').click(function(){
		choice2 = $(this).attr('class');
		console.log(choice2);
		if(choice1===choice2){
	   		score++;
	   		$("#score").text(score);
	   		
	   		if (score===3){
	   			endGame();
	   		} else {
	   			console.log(score);
	   			console.log("correct");
	   			$("#message").text("Correct!");
	   		}			   		
		}
	   	else {
	   			console.log("wrong");
	   			$("#message").text("Wrong!");
	   	}		
	});

	$("#apple").click(function() {
		$(this).toggleClass("appleclick");
	})

	$("#banana").click(function() {
		$(this).toggleClass("bananaclick");
	})

	$("#pear").click(function() {
		$(this).toggleClass("pearclick");
	})

	$(".apple").click(function() {
		$(this).toggleClass("appleclick");
	})

	$(".banana").click(function() {
		$(this).toggleClass("bananaclick");
	})

	$(".pear").click(function() {
		$(this).toggleClass("pearclick");
	})

	function endGame(){
		console.log("end game");
		$("#score").text(score);
	   	$("#message").text("Yay! You've beat the game.");
	}

});