let rotValue = 0;
let rotValArray = [];
var inc=0;
let drippy = [];
let bounds = true;
let numDrips=5;
let bg, drip;

function setup() {
	let c = createCanvas(windowWidth, windowHeight, WEBGL);
	c.parent('p5container');
	// ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 5000);
}

function draw() {
	push();
	rotValue-=.0001;
	rotateX(-mouseY/200 + rotValue);
	rotateY(-mouseX/400 + rotValue);
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    rotateX(radians(rotationX/10 + rotValue))
    rotateY(radians(rotationY/10+rotValue))
// }
	fill(0);
	stroke(`rgba(0,255,0,.5)`);
	strokeWeight(.5);
	sphere(windowWidth);
	pop();
}