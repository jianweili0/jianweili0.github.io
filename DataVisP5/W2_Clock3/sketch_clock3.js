

function setup(){

	createCanvas(600,600);

}

function draw(){

	var s = second();
	var m = minute();
	var h = hour();

	// colorMode//
	push();
	translate(300,0)
	angleMode(DEGREES)
	rotate(45)

	noStroke();
	colorMode(RGB, 400);
	for (var i = 0; i < 400; i++){
	  for (var j = 0; j < 400; j++){
	    stroke(i, j, j);
	    point(i, j);
	  }
	}

	pop()

	var p = 20
	var q = 10
	var hl= 100
	var ml = 120

	push();

	translate(300,sqrt(2)*400/2);
	noStroke()
	fill('white')
	ellipse(0,0,q,q)
	pop()

	push()
	translate(300,sqrt(2)*400/2);
	strokeWeight(2);
	stroke("white")


	noFill();
	angleMode(DEGREES);
	rotate(map(minute(),0,60,-180,180));
	line(0,0,0,ml);
	pop()

	push()
	translate(300,sqrt(2)*400/2);
	strokeWeight(3);
	stroke("white")


	noFill();
	angleMode(DEGREES);
	rotate(map(hour(),0,12,-180,180));
	line(0,0,0,hl);
	pop()




}



