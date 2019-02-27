function setup() {
  createCanvas(windowWidth, windowHeight);
}


// remap syntax 
//map(value,start1,stop1,start2,stop2,[withinBounds])


function draw() {
	background('red');
	
	var s = second();
	var m = minute();
	var h = hour();
	textSize(16)
	fill(0)
	text('Time is:\n' + h+':'+m+':'+s, 40,40)
	fill(255, 204, 0);



	

	// First change the mode to degrees (default is radians)
	
	  // Map the function minute() to values from 0~360
	push()
	angleMode(DEGREES);// capital DEGREES
	var s = second();
	var s1 = 180
	var s2 = 180
	push(); 
	strokeWeight(2);
	translate(s1,s2);
	rotate(map(second(),0,60,0,360));
	line(0,0,0,-150);
	rect(0,0,5,map(second(),0,60,0,150));
	textSize(20);
	fill(0);
	text(s,0,0)
	ellipse(0,0,3,3)
	pop();

	push();
	angleMode(DEGREES);// capital DEGREES
	var m = minute();
	var m1 = 400;
	var m2 = 400;
	strokeWeight(2);
	translate(m1,m2);

	rotate(map(minute(),0,60,0,360));
	line(0,0,0,-200);
	rect(0,0,5,map(minute(),0,60,0,200));
	textSize(25);
	fill(0);
	text(m,0,0);
	ellipse(0,0,5,5)

	pop();

	push();
	angleMode(DEGREES);// capital DEGREES
	var h = hour();
	var h1 = 320;
	var h2 = 320;

	strokeWeight(2);
	translate(h1,h2);

	rotate(map(hour(),0,12,0,360));
	line(0,0,0,-300);
	rect(0,0,5,map(hour(),0,12,0,300));
	textSize(40);
	fill(0);
	text(h,0,0);
	ellipse(0,0,10,10)
	pop();

	// put drawing code here
}

