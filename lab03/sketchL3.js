var checkbox;
var checkbox2;
var circle01;
var cirlce02;
var circleButton;
var circleSlider;

function setup() {
    createCanvas(windowWidth, 300);

    // checkbox for changing background color
    checkbox = createCheckbox('  White');
    checkbox.position(10, 310);
    checkbox.style('color', 'white');

    // checkbox for circles
    checkbox2 = createCheckbox('  Circles');
    checkbox2.position(10, 335);
    checkbox2.style('color', 'white');

    // button for moving circles
    circleButton = createButton('Press Here!');
    circleButton.position(5, 363);
    circleButton.style('background-color', 'black');
    circleButton.style('color', 'red');
    circleButton.mousePressed(move);

    // Circle size slider
    circleSlider = createSlider(20, 500, 40, 1);
    circleSlider.position(10, 383);
    
    circle01 = {
        x:width/3, y:height/2, d:circleSlider.value(),
        draw: function() {
            fill(0); 
            ellipse(this.x, this.y, this.d);
        }
    };
    cirlce02 = {
        x:width/1.5, y:height/2, d:circleSlider.value(),
        draw: function() {
            fill(0); 
            ellipse(this.x, this.y, this.d);
        }
    };
}

function draw() {
    // swap background color
    if (checkbox.checked()) {
        background('white'); 
    } else {
        background('red'); 
    }

    // creating circles if checkbox is checked
    if (checkbox2.checked()) {
        circle01.draw();
        cirlce02.draw();        
    }

    // change circle size
    circle01.d = circleSlider.value();
    cirlce02.d = circleSlider.value();
}

// move circles with button press after box is checked
function move(){
    circle01.x = random(width);
    circle01.y = random(height);
    cirlce02.x = random(width);
    cirlce02.y = random(height);
}