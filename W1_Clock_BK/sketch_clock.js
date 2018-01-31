function setup() {
  createCanvas(windowWidth, windowHeight)
}


// remap syntax 
//map(value,start1,stop1,start2,stop2,[withinBounds])


function draw() {
	if (mouseIsPressed){
		stroke(0)
		rect(mouseX-40,mouseY-40,80,80,5);
		push();// Start a new drawing state
		
		textSize(12);
		stroke(0)
		fill(255);
		var h = hour();
		var m = minute();
		var s = second();
		textSize(20)
		text('Attention',mouseX-40,mouseY-40);
		fill(255,0,0)
		noStroke()
		textSize(16)

		text('Time is:\n' + h+':'+m+':'+s, mouseX-40,mouseY)
		
		pop();// Restore original state(scale, specifically)
		
	}else{
		fill(255,255,255,25);
		ellipse(mouseX,mouseY,80,80);
	}
	
	;
  // put drawing code here
}

