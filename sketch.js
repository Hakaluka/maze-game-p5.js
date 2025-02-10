let c_1;
let n = 0;
let i=0;
let selectLvl;
let slt;
let buttons = []

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  c_1 = new Chara(30,24);
  slt= createRadio();
    slt.disable(true)
  
  // if(c_1.lvl===5) {
    // slt.option("1")
    // slt.option("2")
    // slt.option("3")
    // slt.position(200,200);
    // slt.size(10)
  //   for (let i = 0; i < 3; i++) {
  //   let button = createButton(`Button ${i+1}`);
  //   button.position(50 + i * 100, 50);
  //   button.size(80, 30);
  //   buttons.push(button);
  // }
  // } else {
  // }
}

function draw() {
  background(220);
  
  
  c_1.collision(30,24)
  c_1.win(30,24)
  //enable the ability to reset when u stop to make the maze harder (change 'true' to 'false' below to disable this fearture)
  c_1.noStop(30,24,'true')
  c_1.reset(30,24)
    text(c_1.vx, 30, 30);
    text(c_1.vy, 45, 30)
    text(c_1.x, 30, 50);
    text(c_1.y, 60, 50);
    c_1.show();
    c_1.move(); 
  c_1.counter(30,24)
    // console.log(c_1.c)
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].mousePressed()) {
      console.log(`Button ${i+1} clicked`);
      // You can also add custom code here to perform actions when a button is clicked
      c_1.lvl=i;
    }
  }

  //movement in format of else ifs such that it rechecks the condition again and again
    if (keyIsDown(RIGHT_ARROW) === true && keyIsDown(DOWN_ARROW) === true) {
    c_1.vx= 4;
    c_1.vy= 4;
      
  } else if (keyIsDown(RIGHT_ARROW) === true && keyIsDown(UP_ARROW) === true) {
    c_1.vx= 4;
    c_1.vy= -4;
     
  } else if (keyIsDown(LEFT_ARROW) === true && keyIsDown(DOWN_ARROW) === true) {
    c_1.vx= -4;
    c_1.vy= 4;
     
  } else if (keyIsDown(LEFT_ARROW) === true && keyIsDown(UP_ARROW) === true) {
    c_1.vx= -4;
    c_1.vy= -4;
     
  } else if (keyIsDown(UP_ARROW) === true) {
    c_1.vy= -4;
    c_1.vx= 0;
  
  } else if (keyIsDown(DOWN_ARROW) === true) {
    c_1.vy= 4;
    c_1.vx= 0;
  
  } else if (keyIsDown(LEFT_ARROW) === true) {
    c_1.vx= -4;
    c_1.vy= 0;
    
  } else if (keyIsDown(RIGHT_ARROW) === true) {
    c_1.vx = 4;
    c_1.vy = 0;
  } else if (keyIsDown('68') === true && keyIsDown('83') === true) {
    c_1.vx= 4;
    c_1.vy= 4;
      
  } else if (keyIsDown('68') === true && keyIsDown('87') === true) {
    c_1.vx= 4;
    c_1.vy= -4;
     
  } else if (keyIsDown('65') === true && keyIsDown('83') === true) {
    c_1.vx= -4;
    c_1.vy= 4;
     
  } else if (keyIsDown('65') === true && keyIsDown('87') === true) {
    c_1.vx= -4;
    c_1.vy= -4;
     
  } else if (keyIsDown('87') === true) {
    c_1.vy= -4;
    c_1.vx= 0;
  
  } else if (keyIsDown('83') === true) {
    c_1.vy= 4;
    c_1.vx= 0;
  
  } else if (keyIsDown('65') === true) {
    c_1.vx= -4;
    c_1.vy= 0;
    
  } else if (keyIsDown('68') === true) {
    c_1.vx = 4;
    c_1.vy = 0;
  } else {
    c_1.vx = 0;
    c_1.vy = 0;
  }
}
