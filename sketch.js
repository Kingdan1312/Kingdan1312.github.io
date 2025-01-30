// https://www.w3schools.com/html/html5_video.asp how to add a video to html
// https://www.w3schools.com/html/html_emojis.asp how to add emojies to hmtl

// https://p5js.org/reference/p5/rotateX/ how to make rotating 3d object
// https://p5js.org/reference/p5/loadModel/ load 3D model function

// the 3D bolt model was part of my 1st Industrial Deisgn Bike Ring project

let bolt;
function preload(){
    bolt = loadModel('/models/bolt02.obj');
    // loading my own custom 3D model
}

function setup(){
    createCanvas(640,640,WEBGL);
    // allows 3D viewing within canvas
}

function draw(){
    background('black');
    orbitControl();

    // setting rotation speed per axis
    rotateX(frameCount * 0.008); 
    rotateY(frameCount * 0.01);

    normalMaterial();
    // sets standard 3D texture must find out how to change colour in future
    
    scale(50);
    model(bolt);
}