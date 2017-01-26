$(document).ready(function(){
	var fruit = [
				"Apple",
				"Orange",
				"Banana",
				"Pear",
				"Peach",
				"Pineapple",
				"Strawberry",
				"Watermelon",
				"Grape",
				"Kiwi"];

	var text = "";
	for (i = 0; i < 10; i++) {
    	text += "" + fruit[i] + "";
    	console.log(fruit[i]);

    document.write("<p>" + fruit[i] + "</p>");


};
});
