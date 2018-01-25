function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
	if (mouseIsPressed){
		var a = random(200,255);
		var b = random(200,255);
		var c = random(0,100);
		var d = random(193,255);
		fill(a,b,c,d);
		rect(mouseX-40,mouseY-40,80,80,5);
		push();// Start a new drawing state
		
		textSize(12);
		fill(0);
		text('Jianwei is here',mouseX-40,mouseY);
		pop();// Restore original state(scale, specifically)
		
	}else{
		fill(255,255,255,25);
		ellipse(mouseX,mouseY,80,80);
	}
	
	;
  // put drawing code here
}

