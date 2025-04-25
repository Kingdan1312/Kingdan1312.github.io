var kat, katX, katY;
var katW = 200, katH = 200;
var meow;

function preload(){
    kat = loadImage('katpicL4.jpg');
    meow = createAudio('meowyL4.mp3');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    moveKat();
}

function draw(){
    background('black');
    image(kat, katX, katY, katW, katH);
    text('Press the kitty!', 200, 200);
    fill('aquamarine');
    textSize(18);
}

function mousePressed(){
    moveKat();
    meow.stop();
    meow.play(); 
}

function moveKat(){
    katX = random(windowWidth/2 + 100);
    katY = random(windowHeight/2 + 100);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
