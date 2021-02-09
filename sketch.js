let x = 0,
  y = 0,
  rotY = 0,
  rotX = 0;
let c = false,
  t = false,
  start = false;
let slider;
let sizeFactor = 1;
let font;
let close;
let img;
let inputPicPath;
let path = 'zimmer.jpg'


function preload() {
  //example pic
  img = loadImage(path);
  //google open sans
  font = loadFont('OpenSans-Regular.ttf');

}

function setup() {
  createCanvas(1080, 845, WEBGL);
  background(30);

  buttonChair = createImg('chair.png', "");
  buttonChair.position(0, 745);
  buttonChair.mousePressed(furnitureChair);

  buttonTable = createImg('table.png', "");
  buttonTable.position(360, 745);
  buttonTable.mousePressed(furnitureTable);

  buttonReset = createImg('reset.png', "");
  buttonReset.position(720, 745);
  buttonReset.mousePressed(furnitureReset);
   
  buttonExit = createImg('close.png', "");
  buttonExit.position(width-80,20);
  buttonExit.size(50,50);
  buttonExit.mousePressed(switchScreenState);
  
  buttonStart = createImg('start.png', "");
  buttonStart.size(973/2.7,366/3);
  buttonStart.position(100,270);
  buttonStart.mousePressed(startSimulation);
  
  textSize(32);
  textFont(font);
  
  slider = createSlider(0, 2, 1,0);
  slider.position(width/2 -200, 700);
  slider.style('width', '400px');
  slider.style('color', '#ff0000');
  
  inputPicPath = createInput(path);
  inputPicPath.position(90,550);
  inputPicPath.style('font-size', '30px')
  
  
}





function draw() {
//SIMULATION SCREEN ---------------------------------------------
  path = inputPicPath.value();
  
  if (start) {
    
    if(c || t){
      slider.show();
    }
    buttonExit.show();
    buttonStart.hide();
    inputPicPath.hide();
    
    push();
    background(100); //background
    translate(0, 0, -400); //moves the picture to the background
    img.resize(1800, 1200); //scales the image to its original size
    image(img, -width / 1.2, -height / 1.2); //positions the image correct
    pop();
    sizeFactor = slider.value();
    scale(sizeFactor);
    push();
    
    if (mouseIsPressed && mouseY < 660) {
      if (mouseButton === CENTER) {
        x = mouseX - width / 2;
        y = mouseY - height / 2;

        translate(x, y);
        rotateX(rotX);
        rotateY(rotY);

        if (c) {
          chair();
        } else if (t) {
          table();
        }

      } else if (mouseButton === LEFT) {
        rotY = mouseX / 100;
        rotateX(rotX);
        rotateY(rotY);
        translate(x, y);

        if (c) {
          chair();
        } else if (t) {
          table();
        }
      } else if (mouseButton === RIGHT) {
        rotX = -mouseY / 100;
        rotateX(rotX);
        rotateY(rotY);
        translate(x, y);

        if (c) {
          chair();
        } else if (t) {
          table();
        }
      }
    } else if (c) {
      rotateX(rotX);
      rotateY(rotY);
      translate(x, y);
      chair();
    } else if (t) {
      rotateX(rotX);
      rotateY(rotY);
      translate(x, y);
      table();
    }

    pop();

  }

// START SCREEN -------------------------------------------------
  else {
   // Preview window
    slider.hide();
    buttonExit.hide();
    buttonStart.show();
    inputPicPath.show();
    
    background(30);
    strokeWeight(2);
    stroke('rgb(178,58,200)');
    fill(100);
    rect(0, -180, 400, 400, 30);
    strokeWeight(1);
    stroke('rgb(0,0,0)');

    fill(178,58,200);
    text('Specify the image path:', -440,110);
    text('Furniture preview', 73, -195);
    //Preview furniture
    translate(90, 10, 400);
    scale(0.2*sizeFactor);
    if (mouseIsPressed &&  mouseY < 660) {
//Rotation around the Y axis
      if (mouseButton === LEFT) {
        rotY = mouseX / 100;
        rotateX(rotX);
        rotateY(rotY);

        if (c) {
          chair();
        } else if (t) {
          table();
        }
      } 
//Rotation around the X axis       
        else if (mouseButton === RIGHT) {
        rotX = -mouseY / 100;
        rotateX(rotX);
        rotateY(rotY);

        if (c) {
          chair();
        } else if (t) {
          table();
        }
      }
//no rotation
    } else if (c) {
      rotateX(rotX);
      rotateY(rotY);
      chair();
    } else if (t) {
      rotateX(rotX);
      rotateY(rotY);
      table();
    }
  }
}

//3D Chair 
// by https:www.openprocessing.org/sketch/618251
function chair() {
  fill(200, 150, 255);
  //orbitControl(5);
  box(200, 175, 25); //board to sit

  push();
  translate(0, 100, 75);
  box(200, 25, 175); //backrest board

  push();
  translate(85, 75, 73);
  box(25, 150, 25); //front right leg

  push();
  translate(-170, 12);
  box(25, 150, 25); //front left leg

  push();
  translate(0, 0, -150);
  box(25, 150, 25); //back left leg

  push();
  translate(170, 0, 5);
  box(25, 150, 25); //back right leg
  fill(200, 150, 255);
}

//3D Table
function table() {
  fill(200, 150, 255);

  push();
  translate(0, 100, 75);
  box(200, 25, 175); //backrest board

  push();
  translate(85, 75, 73);
  box(25, 150, 25); //front right leg

  push();
  translate(-170, 12);
  box(25, 150, 25); //front left leg

  push();
  translate(0, 0, -150);
  box(25, 150, 25); //back left leg

  push();
  translate(170, 0, 5);
  box(25, 150, 25); //back right leg
  fill(200, 150, 255);
}

//set the furniture model to chair and reset coordinates
function furnitureChair() {
  c = true;
  t = false;

  rotX = 0;
  rotY = 0;
  x = 0;
  y = 0;
  sizeFactor = 1;

}

//set the furniture model to table and reset coordinate
function furnitureTable() {
  t = true;
  c = false;

  rotX = 0;
  rotY = 0;
  x = 0;
  y = 0;
  sizeFactor = 1;
}

//reset the chosen furniture
function furnitureReset() {
  t = false;
  c = false;

  rotX = 0;
  rotY = 0;
  x = 0;
  y = 0;
  sizeFactor = 1;
}

//screen switch
function switchScreenState() {
    if (start == true) {
        start=false;
    }
    else {
        start = true;
      
    }
}

function startSimulation(){
  
  preload();
  delay(500);
  switchScreenState();
}