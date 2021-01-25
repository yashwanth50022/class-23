const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    
    box2 = new Box(240,100,50,100);
    box3 = new Box(190,250,50,50);
    box4 = new Box(250,190,50,70);
    bird = new Bird(100,100);
    ground = new Ground(200,height,1500,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    bird.display();
    ground.display();
}