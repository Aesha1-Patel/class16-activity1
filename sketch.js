
var box1, box2, box3;

function setup() {
  createCanvas(600, 400);
 box1=new Box();
 box2=new Box();
 box3=new Box();
}

function draw() {
  background(220);
fill("green";)
box1.show();
box1.move(1);
fill("red");
box2.show();
box2.move(2);
fill("blue");
box3.show();
box3.move(3);
}