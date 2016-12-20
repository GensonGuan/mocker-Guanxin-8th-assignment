
var mic
var analyzer
var startingColor
var endingColor

function setup() {
  
  createCanvas(800,600)
  mic = new p5.AudioIn()
  mic.start()
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
  startingColor = color(146,100,0)
  endingColor = color(220,0,0)
  
}

function draw() {
  
  
  var volume = mic.getLevel()
  
  //face
  var myVolume = analyzer.getLevel()
  
  var rectColor =
            lerpColor(startingColor,endingColor,myVolume*3)
        
        fill(rectColor)
        noStroke()
    rect(0,0,width,height);
  
  //mouse
  noStroke()
  fill(255,0,0)
  ellipse(width/2,height/2+100,600,volume*900)
  fill(255)
  ellipse(width/2,height/2+100,560,volume*600)
  //fill(0)
  //ellipse(width/2,height/2+100,200,volume*300)
  
  
  //eye1
  noStroke()
  //fill(255,0,0)
  //ellipse(width/4,height/4,600,volume*800)
  fill(255)
  ellipse(width/4,height/4,100,30+volume*300)
  fill(0)
  ellipse(width/4,height/4,30,26+volume*200)
  fill(255)
  ellipse(width/4,height/4,16,3+volume*60)
  
  //eye2
  noStroke()
  //fill(255,0,0)
  //ellipse(width/4,height/4,600,volume*800)
  fill(255)
  ellipse(width/4*3,height/4,100,30+volume*300)
  fill(0)
  ellipse(width/4*3,height/4,30,26+volume*200)
  fill(255)
  ellipse(width/4*3,height/4,16,3+volume*60)
  
  //nose
  fill(255)
  ellipse(width/20*9,height/10*3,16,3+volume*20)
  fill(255)
  ellipse(width/20*11,height/10*3,16,3+volume*20)
  
  //text
  textSize(20)
  textAlign(CENTER)
  text('Come on!',width/2,height/30*26)
  text('Talk to me, I can imitate you to speak!',width/2,height/30*27)
  
  
  console.log(volume)
}