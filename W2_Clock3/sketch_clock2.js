

function setup(){

	createCanvas(600,600);
}

function draw(){

	var w = 600
	var l = 600

	var dline = Math.sqrt(w*w + h*h);
	
	var s = second()
	var m = minute()
	var h = hour()

	var heightvarS = map(s,0,60,0,height)
	var widthvarS = map(s,0,60,0,width)
	var heightvarM = map(m,0,60,0,height)
	var widthvarM = map(m,0,60,0,width)
	var heightvarH = map(h,0,24,0,2*height)
	var widthvarH = map(h,0,24,0,2*width)

	var a = map(h,0,24,120,255);
	background(255,120,a)

	push();
	fill(0,0,0,150)
	noStroke()
	beginShape();
	vertex(0,height);
	vertex(widthvarH,height);
	vertex(0,height-heightvarH);
	endShape(CLOSE)
	translate(widthvarH/2,(2*height-heightvarH)/2)
	angleMode(DEGREES)
	if(h>12){
		rotate(45);}else{rotate(-45)
		}
	rotate(90)

	textSize(45)
	fill(255)
	text(h,0,0)
	pop();





	push();
	fill(a,a,a,100)
	noStroke()
	beginShape();
	vertex(width,height);
	vertex(width,height-heightvarM);
	vertex(width-widthvarM,height);
	endShape(CLOSE)
	translate((2*width-widthvarM)/2,(2*height-heightvarM)/2)
	angleMode(DEGREES)
	rotate(-45)

	textSize(30);
	fill(255);
	text(m,widthvarM/sqrt(2)-30,0);
	pop();


	push();
	fill(a,a,a,50)
	noStroke()
	beginShape();
	vertex(0,0);
	vertex(0,heightvarS);
	vertex(widthvarS,0);
	endShape(CLOSE)
	translate(widthvarS/2,heightvarS/2)
	angleMode(DEGREES)
	rotate(45)


	textSize(15);
	fill(255);
	text(s,0,heightvarS/sqrt(2));
	pop();




	// push();
	// textSize(10);
	// fill(255);
	// text('Time is:\n' + h+':'+m+':'+s, width/2,0);
	// pop();
}



