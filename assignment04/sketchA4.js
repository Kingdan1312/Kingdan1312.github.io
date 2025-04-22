// Rain simulation inspiration links:
// https://www.youtube.com/watch?v=KkyIDI6rQJI
// https://editor.p5js.org/codingtrain/sketches/5C07OcK6A

// Styling components using css:
// https://www.tutorialspoint.com/how-to-use-text-as-background-using-css

// Adding gradient as canvas background:
// https://www.youtube.com/watch?v=EAY7S1tWbzc

    
var drops = []; // Array for raindrop particles.
var showRain = false;
var rainSounds, lightningSounds,
    intensitySlider, volumeSlider;    
var thunderFlash = 0; // Lightning flash effect

function setup(){
    createCanvas(windowWidth, windowHeight);

    // Toggle rain button.
    document.getElementById('rainButton').addEventListener('click', function(){
        showRain = !showRain;
        if (showRain){
            rainSounds.play();
            this.textContent = 'Stop Rain';
        }else{
            rainSounds.pause();
            rainSounds.currentTime = 0;
            this.textContent = 'Start Rain';
        }
    });
    // Play thunder sound effect button.
    document.getElementById('thunderButton').addEventListener('click', function(){
        lightningSounds.currentTime = 0;
        lightningSounds.play();
        thunderFlash = 200;
    });

    // Load audio files
    rainSounds = document.getElementById('rainAudio');
    lightningSounds = document.getElementById('lightningAudio');
    
    // Slider for particle/rain intensity.
    intensitySlider = createSlider(1, 20, 10, 1);
    intensitySlider.parent('slider-container');
    intensitySlider.style('width', '175px');
    
    // Slider for volume intensity.
    volumeSlider = createSlider(0, 1, 0.5, 0.1);
    volumeSlider.parent('volume-container');
    volumeSlider.style('width', '185px');
    rainSounds.volume = volumeSlider.value();
    lightningSounds.volume = volumeSlider.value();
    volumeSlider.input(function(){
        rainSounds.volume = this.value();
        lightningSounds.volume = this.value();
    });
}

// Separate function for creating gradient.
function makeGradient(){
    let top = color(62, 57, 77); 
    let bottom = color('black');
    for (let y = 0; y < height; y++) {
        let newColour = lerpColor(top, bottom, y / height);
        stroke(newColour);
        line(0, y, width, y); 
    }
}

function draw(){
    makeGradient(); // Call gradient function for canvas bg.
    // Positioning partciles.
    if (showRain){
        for (let i = 0; i < intensitySlider.value(); i++){
            let z = random(1, 10); 
            drops.push({
                x: random(width),            
                y: random(-100, 0), // Having drops come from above the canvas.
                z: z,                         
                speed: map(z, 1, 10, 13, 3) //======== Particle Speed. ==========
                // Added paralax effect, speed is offset for particles to create depth.
            });
        }
    }

    // Creating particle loop.
    let visibleDrops = [];
    for (let i = 0; i < drops.length; i++){
        let d = drops[i];

        // Styling raindrops.
        noStroke();
        fill(52, 77, 97); //=============== Raindrop colour. ================
        rect(d.x, d.y, 3, 20, 4); // Pill shaped for raindrops.

        d.y += d.speed;
        if (d.y <= height){
            visibleDrops.push(d);
        }
    } 
    // Fixed issue where they would randomly appear and disapear when button pressed. 
    // Randomized speed for realism.

    // Lighting/thunder flash effect.
    if (thunderFlash > 0){
        fill(255, thunderFlash);
        rect(0, 0, width, height);
        thunderFlash -= 20;
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
