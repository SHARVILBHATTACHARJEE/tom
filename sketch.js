
function preload() {
    //load the images here
    c1=loadAnimation("images/cat1.png")
    c2=loadAnimation("images/cat2.png","images/cat3.png")
    c3=loadAnimation("images/cat4.png")
    g=loadImage("images/garden.png")
    m1=loadAnimation("images/mouse1.png")
    m2=loadAnimation("images/mouse2.png","images/mouse3.png")
    m4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
gn=createSprite(500,400)
gn.addImage(g)

m=createSprite(200,650)
m.addAnimation("start",m1)
m.scale=0.1

t=createSprite(900,650)
t.addAnimation("sleeping",c1)
t.scale=0.1
m.debug=true
t.debug=true
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)){
        t.velocityX=-3
        t.addAnimation("wlkng",c2)
        t.changeAnimation("wlkng",c2)
        m.addAnimation("wlkng",m2)
        m.changeAnimation("wlkng",m2)
        
        }
    if(t.x-m.x < (t.width+m.width)/2){
    t.velocityX=0
    t.addAnimation("colide",c3)
        t.changeAnimation("colide",c3)
        m.addAnimation("colide",m4)
        m.changeAnimation("colide",m4)
        t.setCollider("rectangle",0,0,50,50)
        m.setCollider("rectangle",0,0,50,50)
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
