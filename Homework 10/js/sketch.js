var headX = 250;
var headY = 100;
var headDirection = 1;

var mouthX = 250;
var mouthY = 100;
var mouthDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

 function draw()
 {
     background(120,45,78);
     textSize(22)
     text("Well Hidy-Ho!", 10,80);

     // head
     fill(255, 204, 0);
     circle(headX,headY,175);
     headX+=headDirection;
     if(headX >= 418 || headX <= 82)
     {
         headDirection *= -1;
     }

     // eyes
     strokeWeight(10);
     fill(0);
     point(200,80);
     point(285,80);

     // nose
     point(245,100);

     // mouth
     circle(mouthX, 135, 30, 45)
     mouthX+=mouthDirection;
     if(mouthX >= 418 || mouthX <= 82)
     {
        mouthDirection *= -1;
     }

     // body
     fill(10, 24, 120);
     rect(200,bodyY,100,150);
     bodyY += bodyDirection;
     if(bodyY <= 0 || bodyY >= 450 )
     {
         bodyDirection *= -1;
     }

     // belly
     fill(255);
     ellipse(250,320,250,220,280,320)

     // right arm
     fill(10, 24, 120);
     rect(300,195,50,10);
     // left arm
     rect(150,195,50,10);
     // left leg
     rect(200,400,10,50);
     // right leg
     rect(290,400,10,50);

     fill(120);
     textSize(size);
     size+= sizeDirection;
     count++;
     if(count > 5)
     {
         sizeDirection *=-1;
         count = 0;
     }
     text("Garrhet Sampson",270,500 );


 } 