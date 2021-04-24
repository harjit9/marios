var platform1,platform2
var countDistanceX=0
var gap=60
function preload(){
  
}

function setup() {
  createCanvas(9000, 668);
  
  for(var i=0;i<6;i++){
platform1=new Platform(countDistanceX);
countDistanceX=countDistanceX+platform1.rw+gap
    gap=random([0,0,0,0,60])
  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

