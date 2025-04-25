var btn, loadText, sentence = '';

function preload(){
    // Random phrase generator for JSON file:
    // https://www.thewordfinder.com/random-sentence-generator/ 
    loadText = loadJSON("dataL5.json");
}

function setup(){
    createCanvas(windowWidth, 400);
    btn = createButton('Generate Message');
    btn.position(10, 410);
    btn.style('background-color', 'Aquamarine');
    btn.style('color', 'black');
    btn.mousePressed(showMessage);

    textAlign(CENTER, CENTER);
    textSize(25);
    fill('aquamarine');
}

function draw(){
    background(4, 56, 56);
    text(sentence, width/2, height/2);
}

function showMessage(){
    let messages = loadText.messages;
    let index = int(random(messages.length));
    sentence = messages[index];
}

function windowResized(){
    resizeCanvas(windowWidth, 400);
}