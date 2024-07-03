//The setup function only happens once

var diam1=0;


function setup() {
  createCanvas(500,500); //create a 500px X 500px canvas
 
 }


function draw() {
  background(107,69,175);
  stroke(255,255,127); // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  triangle(175,75,250,350,125,250);
  ellipse(75,85,diam1,diam1); // center of canvas, 20px dia
  fill(35,46,53);
  stroke (107,69,175);
  rect(random(width),random(height),50,50);
  ellipse (218,111,22); 
  fill(125);
  textFont('Helvetica');
  textSize(30);
  textStyle(ITALIC);
  text('Shadow Star',250,250);
  fill(255);
  
  

}


function mousePressed(){
if (diam1>=100){
  diam1=0;
  }else{
  diam1=diam1+2;
}

}
