// Soundboard tutorial link:
// https://www.youtube.com/watch?v=i1E87ZzqDZI 

var currentCategory = '', volumeSlider;

// sorting arrays of individual sounds for each category.
const categories = {
    newyork:{
        background: 'imagesA5/nycpic.jpg',
        sounds:['city', 'music', 'rain2', 'subway', 'whiteN', 'Wind']
    },
    forest:{
        background: 'imagesA5/forestpic.jpg',
        sounds:['fire', 'hike', 'river', 'owl', 'crickets', 'birds']
    },
    hawaii:{
        background: 'imagesA5/beachpic.jpg',
        sounds:['palm', 'birds2', 'breeze', 'dolphin', 'music2', 'waves']
    }
};

// ==============================================================


/* The above is probably my favorite bunch of the code. Why, because it allowed me
to easily compartmentalize each of the multimedia files (images and audio), into a 
single section that can be referenced by the rest of the code. Instead of treating each 
element like an individual object and having to write the same conditions for each one over 
and over. This structure allowed for a modular system where I was able to simply input additional 
sound categories as I progressed through the project, so I could easily swap out different 
sound files and images as I aimed to find the best fit of audio and imagery. This is great 
for the long run if I choose to continue working on this project. It'll allow me to easily
expand my immersive soundscape, potentially adding more sections, imagery, and animations. */


// ===========================================================

function setup(){
    bg = createCanvas(windowWidth, windowHeight);
    bg.position(0, 0);
    bg.style('z-index', '-1'); // Placing background overlay behind components.
    bg.style('pointer-events', 'none');

    // Volume slider for global volume control.
    const volContainer = select('#volume-control');
    volumeSlider = createSlider(0, 1, 0.5, 0.01);
    volumeSlider.id('volume-slider');
    volumeSlider.parent(volContainer);
    volumeSlider.style('width', '200px');
    volumeSlider.input(() => {
        const vol = volumeSlider.value();
        document.querySelectorAll('audio').forEach(a => a.volume = vol);
    });

    // Have tiles play sound when pressed, and pause when pressed again.
    Object.keys(categories).forEach(cat => {
        categories[cat].sounds.forEach(sndId => {
            const btn = document.getElementById(sndId + '-btn');
            const audio = document.getElementById(sndId);
            btn.addEventListener('click', () => {
                if (audio.paused){
                    audio.play();
                    btn.classList.add('active');
                }else{
                    audio.pause();
                    btn.classList.remove('active');
                }
            });
        });
    });

    // Default page to New York when opened/refreshed.
    loadCategory('newyork');
}

// Overlay for darkening background images for visual appeal and readability. 
function draw(){
    clear();
    fill(0, 0, 0, 120);
    noStroke();
    rect(0, 0, width, height);
}

// Function for when user is swapping categories.
function loadCategory(categoryName){
    const category = categories[categoryName];
    document.body.style.backgroundImage = "url('" + category.background + "')";

    // Pause audio when category is switched.
    if (currentCategory) {
        categories[currentCategory].sounds.forEach(id => {
            const audio = document.getElementById(id);
            audio.pause();
            document.getElementById(id + '-btn').classList.remove('active');
        });
    }

    // Loading current sound category when swapped.
    ['nyc-btn', 'forest-btn', 'hawaii-btn'].forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    const tabId = (categoryName === 'newyork') ? 'nyc-btn' : categoryName + '-btn';
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.sound-group').forEach(div => div.style.display = 'none');
    document.getElementById(categoryName + '-sounds').style.display = 'grid';
    currentCategory = categoryName;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
