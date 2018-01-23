function setup() {
  createCanvas(640,480);
  fill(0,0,255)
  rect(0,0,50,100)

  // 255 means 100% opacity.

  fill(255,0,0,255)
  rect(0,0,100,20)


  // 75% opacity.
  fill(255,0,0,191);
  rect(0,25,100,20);

  // 55% opacity.
  fill(255,0,0,127);
  rect(0,50,100,20);

  // 25% opacity.
  fill(255,0,0,63);
  rect(0,75,100,20);

  //colorMode() 
  //colorMode(RGB,100,500,10,255) = colorMode(RGB,R,G,B,Alpha)
}

