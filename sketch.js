const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
const Constraint = Matter.Constraint

var engine , world
var score = 0

function setup() {
 
createCanvas(1200,800)
engine = Engine.create()
world = engine.world

//object1 = new Ground(200,200,20,20)
stand1 = new Ground(390,273,160,50)

block1 = new Block(330,235,30,40)
block2 = new Block(360,235,30,40)
block3 = new Block(390,235,30,40)
block4 = new Block(420,235,30,40)
block5 = new Block(450,235,30,40)
//level 2
block6 = new Block(360,195,30,40)
block7 = new Block(390,195,30,40)
block8 = new Block(420,195,30,40)
//level 3(top)
block9 = new Block(390,155,30,40)

polygon1 = new Polygon(150,500,20)

slingShot = new SlingShot(polygon1.body,{x:200,y:200})

}

function draw() {
    background("white")
    text("Score : " + score,750,40)
    if(background)
 Engine.update(engine)
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 stand1.display()
 polygon1.display()
 //object1.display()

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();

 getBackground();
 
}

function mouseDragged() {
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})

}

function mouseReleased() {
    slingShot.fly()
    
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(polygon1.body)
    }
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var time = await response.json()
    var timedate = time.datetime
    var hour = timedate.slice(11,13)
    console.log(hour)

 
}

