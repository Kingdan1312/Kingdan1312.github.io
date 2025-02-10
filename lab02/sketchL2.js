var dog;
var cat;
var bird;
// variables for changing speed after hit per circle

var blackCircle1 = {
    x:500, y:700, d:40, // d for diameter
    xSpeed: -6, ySpeed: -5,
    colour: 'white', stroke: 'white',
    draw: function(){
        fill(this.colour);
        stroke(this.stroke);
       circle(this.x, this.y, this.d);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.y > height - this.d || this.y < 0){
            this.ySpeed *= dog;
        }
        if(this.x < 0 || this.x > width - this.d){
            this.xSpeed *= dog; // speeds up afer every hit
        }
    }
};
var blackCircle2 = {
    x:50, y:50, d:40, 
    xSpeed: 7, ySpeed:5.5,
    colour: 'white', stroke: 'white',
    draw: function(){
        fill(this.colour);
        stroke(this.stroke);
       circle(this.x, this.y, this.d);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.y > height - this.d || this.y < 0){
            this.ySpeed *= cat;
        }
        if(this.x < 0 || this.x > width - this.d){
            this.xSpeed *= cat; 
        }
    }
};

var blackCircle3 = {
    x:500, y:500, d:40, 
    xSpeed: 6, ySpeed: 6,
    colour: 'white', stroke: 'white',
    draw: function(){
        fill(this.colour);
        stroke(this.stroke);
       circle(this.x, this.y, this.d);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.y > height - this.d || this.y < 0){
            this.ySpeed *= bird;
        }
        if(this.x < 0 || this.x > width - this.d){
            this.xSpeed *= bird; 
        }
    }
};


//////////////////////////////////////////////////////////////////////
// FUNCTION SETUP + DRAW ////////////////////////////////////////////////////

function setup(){
    createCanvas(windowWidth,windowHeight);  
}

function draw(){
    background('BLACK');
    dog= -1.2; 
    cat= -1.1;
    bird= -1.15;
    // larger values speed them up

    blackCircle1.draw();
    blackCircle1.move();
    blackCircle2.draw();
    blackCircle2.move();
    blackCircle3.draw();
    blackCircle3.move();
}