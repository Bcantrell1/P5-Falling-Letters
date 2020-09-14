let fallRow = [];
let charSize = 32;
let charRow;

function setup() 
{
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.style('display', 'block');
  let rowNum = 0;
  for(let j = 0; j<= width / charSize; j++){
    let charRow = new charLine();
    charRow.generateChars(rowNum, random(-2000,0));
    fallRow.push(charRow);
    rowNum += charSize
  }
  
  
  textSize(charSize);
}


function draw() 
{
  background(0, 150);
  fallRow.forEach((charRow)=>{
    charRow.render();
  })
  
}

function differentChar(x,y,pps) {
  this.x = x;
  this.y = y;
  this.pps = pps;
  this.value;
  this.charSwitch = random(2, 20);

  //Change to different symbols
  this.setToRandomChar = () => {
        this.value = String.fromCharCode(
          0x30A0 + round(random(0, 96))
        );
    }

  this.render = () => {
    fill(16, 255, 69);
    text(this.value, this.x, this.y);
    this.setToRandomChar();
  }

  this.fall = () => {
    if(this.y >= height){
      this.y = 0;
    }else {
      this.y += this.pps;
    }
  }

}

function charLine() {
  this.charArray = [];
  this.charTotal = random(5,30);
  this.pps = random(2,10);

  this.generateChars = (x, y) => {

    for (let index = 0; index <= this.charTotal; index++) {
      newChar = new differentChar(x, y, this.pps);
      newChar.setToRandomChar();
      this.charArray.push(newChar);
      y -= charSize;
      
    }
  }

  this.render = () => {
    this.charArray.forEach((newChar) =>{
      fill(16,255,69);
      text(newChar.value, newChar.x, newChar.y);
      newChar.fall();
      newChar.setToRandomChar();
    });
  }

}