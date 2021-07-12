let rotValue = 0;
function setup() {
	let c = createCanvas(windowWidth, windowHeight, WEBGL);
	c.parent('p5container');
}

function draw() {
	rotValue-=.01;
	rotateX(-mouseY/200 + rotValue);
	rotateY(-mouseX/400 + rotValue);

	background(0);
	fill(0);
	stroke(0,255,0);
	strokeWeight(.5);
	sphere(windowWidth);
}