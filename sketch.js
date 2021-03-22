var hrAngle, mnAngle, scAngle;
var hr,mn,sc;

function setup() {
  createCanvas(800,800);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
 
}

function draw() {
  background(0); 
  translate(400,400); 
  rotate(-90);

  push();
  rotate(hrAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,225,0);
  strokeWeight(7);
  line(0,0,160,0);
  pop();

  push();
  rotate(scAngle);
  stroke(0,0,225);
  strokeWeight(7);
  line(0,0,200,0);
  pop();
  
  strokeWeight(7);
  noFill();
  stroke(225,0,0);
  arc(0, 0, 600, 600, 0, hrAngle);

  stroke(0,225,0);
  arc(0, 0, 560, 560, 0, mnAngle);

  stroke(0,0,225);
  arc(0, 0, 520, 520, 0, scAngle);


  drawSprites();
}