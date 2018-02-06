

function setup(){

	createCanvas(600,600);
}


// function draw(){

//   var h=hour();
//   var m=minute();
//   var s=second();

//   var heightvar=map(s,0,60,0,height)
//   var widthvar=map(s,0,60,0,width)

//   fill('red');

// // making the shape here
//   beginShape();
//   vertex(0,0);
//   vertex(0,heightvar);
//   vertex(widthvar,0);
//   endShape(CLOSE);

//   if (s==59){
//   background(0) }

// }


// remap syntax 
//map(value,start1,stop1,start2,stop2,[withinBounds])




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







// by using Ctrl +/ can turn lines into comments
// function draw() {
// 	background('red');

// 	var x = 800
// 	var y = 800
// 	var p = 48
// 	var q = 40
// 	var a = 10
	
// 	var s = second();
// 	var m = minute();
// 	var h = hour();

// 	push();
// 	fill(0);
// 	textAlign(CENTER);
// 	textSize(20)
// 	text('Time & Lover', x/2,y/20);
// 	pop();



// 	push();
// 	var h = hour();
// 	strokeWeight(2);


// 	translate(x/2,y/2);
// 	fill(0)
// 	ellipse(0,0,a,a)
// 	noFill();
// 	angleMode(DEGREES);
// 	rotate(map(hour(),0,12,0,360));
// 	line(0,0,0,-y/4);
// 	translate(0,-(x/4+p))
// 	bezier(0,p,p,0,p/24,0,p/24,p/4);
// 	bezier(0,p,-p,0,-p/24,0,p/24,p/4);
// 	pop();	
	
// 	push();
// 	var m = minute();
// 	strokeWeight(2);
// 	noFill();
// 	translate(x/2,y/2);
// 	angleMode(DEGREES);
// 	rotate(map(minute(),0,60,0,360));
// 	line(0,0,0,-y/4);
// 	//rect(0,0,5,-map(minute(),0,60,0,200))
// 	translate(0,-(x/4+q))
// 	bezier(0,q,q,0,q/20,0,0,q/4);
// 	bezier(0,q,-q,0,-q/20,0,0,q/4);
// 	pop();

// 	push();
// 	var s = second();
// 	var s1 = x/2+q
// 	strokeWeight(2)
// 	noFill();
// 	translate(x/2,y/2)
// 	angleMode(DEGREES);
// 	rotate(map(second(),0,60,0,360));
// 	//line(0,0,-(s1/2),0)
// 	arc(0,0,s1,s1,180,270);
// 	translate(0,-s1/2)
// 	fill(0);
// 	line(-a,a,0,0)
// 	line(-a,-a,0,0)
// 	pop();

// }



