$(document).ready(function() {
project.currentStyle.fillColor = 'grey';

tool.fixedDistance = 30;

function onMouseDrag(event) {
	var circle = new Path.Circle({
		center: event.middlePoint,
		radius: event.delta.length / 3
	});
	circle.fillColor = 'grey';
}
})