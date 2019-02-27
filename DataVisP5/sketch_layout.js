var myCanvas;
var str = 'P5.js'
var result = str.link("https://p5js.org/")

function setup(){
	// use a variable to store a pointer to the canvas as below

	myCanvas = createCanvas(100,100);
}

function draw(){
	var str = 'P5.js'
	var result = str.link("https://p5js.org/")

	
	background(237,34,93)

	// RGB(237,34,93) = P5 color!!!
	

	// move canvas to the horizontal mouse and vertical mouse
	//relative to the window

	myCanvas.position(windowWidth/2,winMouseY)
	translate(0,50)
	fill("white")
	textSize(20)
	text('Running by\n' +'P5.js',map(winMouseX,0,windowWidth,0,50),0)


}