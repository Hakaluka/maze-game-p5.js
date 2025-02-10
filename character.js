let h;
let d;
class Chara {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.a = 40;
    this.lvl = 0;
    i = 1;
    this.c=0;
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  show() {
    fill(30);
    stroke('black');
    square(this.x, this.y, this.a);

    if (this.lvl === 0) {
      line(60, 0, 60, 316);
      line(130, height, 130, 80);
      line(190, 0, 190, 316);
      line(250, height, 250, 80);
      line(310, 0, 310, 316);
      stroke('red');
      noFill();
      rect(360, 40, 100, 80);
    }
    if (this.lvl === 1) {
      line(60, 0, 60, 316);
      line(130, height, 130, 284);
      line(60, 220, 190, 220);
      line(190, 316, 190, 130);
      line(190, 316, 310, 316);
      line(280, 220, width, 220);
      line(190, 130, 310, 130);
      line(130, 60, width, 60);
      line(130, 60, 130, 130);
      stroke('red');
      noFill();
      rect(360, 30, 100, 60);
    }
    if (this.lvl === 2) {
      line(60, 0, 60, 100);
      line(0, 180, 120, 180);
      line(120, 180, 120, 70);
      line(190, 0, 190, 330);
      line(60, 240, 190, 240);
      line(60, 240, 60, 330);
      line(120, height, 120, 320);
      line(250, height, 250, 70);
      line(250, 70, 340, 70);
      line(320, 140, width, 140);
      line(320, 140, 320, 320);
      stroke('red');
      noFill();
      rect(360, 180, 80, 80);
    }
  }

  collision(x, y) {
    
    //outer walls of the canvas
    if (
      this.x + this.a / 2 >= 400 ||
      this.x - this.a / 2 <= 0 ||
      this.y - this.a / 2 <= 0 ||
      this.y + this.a / 2 >= 400
    ) {
      this.x = x;
      this.y = y;
    }
    //per level walls
    if (this.lvl === 0) {
      if (abs(this.x - 60) <= this.a / 2 && this.y - this.a / 2 <= 316) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 130) <= this.a / 2 && this.y + this.a / 2 >= 80) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 190) <= this.a / 2 && this.y - this.a / 2 <= 316) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 250) <= this.a / 2 && this.y + this.a / 2 >= 80) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 310) <= this.a / 2 && this.y - this.a / 2 <= 316) {
        this.x = x;
        this.y = y;
      }
    }
    if (this.lvl === 1) {
      if (abs(this.x - 60) <= this.a / 2 && this.y - this.a / 2 <= 316) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 130) <= this.a / 2 && this.y + this.a / 2 >= 284) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.x - 190) <= this.a / 2 &&
        this.y - this.a / 2 <= 316 &&
        this.y + this.a / 2 >= 130
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.x - 130) <= this.a / 2 &&
        this.y + this.a / 2 >= 60 &&
        this.y - this.a / 2 <= 130
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 220) <= this.a / 2 &&
        this.x + this.a / 2 >= 60 &&
        this.x - this.a / 2 <= 190
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 316) <= this.a / 2 &&
        this.x + this.a / 2 >= 190 &&
        this.x - this.a / 2 <= 310
      ) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.y - 220) <= this.a / 2 && this.x + this.a / 2 >= 280) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 130) <= this.a / 2 &&
        this.x + this.a / 2 >= 190 &&
        this.x - this.a / 2 <= 310
      ) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.y - 60) <= this.a / 2 && this.x + this.a / 2 >= 130) {
        this.x = x;
        this.y = y;
      }
    }
    if (this.lvl === 2) {
      if (abs(this.x - 60) <= this.a / 2 && this.y - this.a / 2 <= 100) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.x - 120) <= this.a / 2 &&
        this.y - this.a / 2 <= 180 &&
        this.y + this.a / 2 >= 70
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.x - 60) <= this.a / 2 &&
        this.y - this.a / 2 <= 330 &&
        this.y + this.a / 2 >= 240
      ) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 190) <= this.a / 2 && this.y - this.a / 2 <= 330) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.x - 320) <= this.a / 2 &&
        this.y - this.a / 2 <= 330 &&
        this.y + this.a / 2 >= 140
      ) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 120) <= this.a / 2 && this.y + this.a / 2 >= 320) {
        this.x = x;
        this.y = y;
      }
      if (abs(this.x - 250) <= this.a / 2 && this.y + this.a / 2 >= 70) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 180) <= this.a / 2 &&
        this.x + this.a / 2 >= 0 &&
        this.x - this.a / 2 <= 120
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 240) <= this.a / 2 &&
        this.x + this.a / 2 >= 60 &&
        this.x - this.a / 2 <= 190
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 140) <= this.a / 2 &&
        this.x + this.a / 2 >= 320 &&
        this.x - this.a / 2 <= width
      ) {
        this.x = x;
        this.y = y;
      }
      if (
        abs(this.y - 70) <= this.a / 2 &&
        this.x + this.a / 2 >= 250 &&
        this.x - this.a / 2 <= 340
      ) {
        this.x = x;
        this.y = y;
      }
    }
  }
  win(x, y) {
    if (
      this.lvl === 0 &&
      this.x - this.a / 2 >= 310 &&
      this.y + this.a / 2 <= 80
    ) {
      this.x = x;
      this.y = y;
      this.lvl++;
    }
    if (
      this.lvl === 1 &&
      this.x - this.a / 2 >= 310 &&
      this.y + this.a / 2 <= 60
    ) {
      this.x = x;
      this.y = y;
      this.lvl++;
    }
    if (
      this.lvl === 2 &&
      this.x - this.a / 2 >= 320 &&
      this.y + this.a / 2 <= 220 &&
      this.y - this.a / 2 >= 140
    ) {
      this.x = x;
      this.y = y;
      this.lvl++;
    }
  }

  noStop(x, y, a) {
    if (a==='true') {
      //finds time when velocity is not zero
    if (this.vy != 0 || this.vx != 0) {
      h = millis();
    }
    let d = (millis() - h) / 1000;
    //text(d,200,200) this command was just here for testing purposes
    if (d >= 0.155) {
      i *= 0;
    } else {
      i = 1;
    }
  }
  }
  reset(x, y) {
    if (i === 0) {
      this.x = x;
      this.y = y;
    }
  }
  counter (x,y){
    if(i===0){
      this.c++
      
    }
  }
}
