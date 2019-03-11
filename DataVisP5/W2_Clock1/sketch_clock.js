function setup() {
  createCanvas(600,600);
}


// remap syntax 
//map(value,start1,stop1,start2,stop2,[withinBounds])


function draw() {
	background('pink');

	var x = 600
	var y = 600
	var p = 60
	var q = 48
	var a = 10
	
	var s = second();
	var m = minute();
	var h = hour();

	push();
	fill(0);
	textAlign(CENTER);
	textSize(20)
	text('Time & Lover', x/2,y/20);
	pop();



	push();
	var h = hour();
	strokeWeight(2);


	translate(x/2,y/2);
	fill(0)
	ellipse(0,0,a,a)
	noFill();
	angleMode(DEGREES);
	rotate(map(hour(),0,12,0,360));
	line(0,0,0,-y/4);
	translate(0,-(x/4+p))
	bezier(0,p,p,0,p/24,0,p/24,p/4);
	bezier(0,p,-p,0,-p/24,0,p/24,p/4);
	pop();	
	
	push();
	var m = minute();
	strokeWeight(2);
	noFill();
	translate(x/2,y/2);
	angleMode(DEGREES);
	rotate(map(minute(),0,60,0,360));
	line(0,0,0,-y/4);
	//rect(0,0,5,-map(minute(),0,60,0,200))
	translate(0,-(x/4+q))
	bezier(0,q,q,0,q/20,0,0,q/4);
	bezier(0,q,-q,0,-q/20,0,0,q/4);
	pop();

	push();
	var s = second();
	var s1 = x/2+q
	strokeWeight(2)
	noFill();
	translate(x/2,y/2)
	angleMode(DEGREES);
	rotate(map(second(),0,60,0,360));
	//line(0,0,-(s1/2),0)
	arc(0,0,s1,s1,180,270);
	translate(0,-s1/2)
	fill(0);
	line(-a,a,0,0)
	line(-a,-a,0,0)
	pop();

}



