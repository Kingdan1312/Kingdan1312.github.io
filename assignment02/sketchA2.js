// lightbox slideshow tutorial
// https://www.w3schools.com/howto/howto_js_lightbox.asp

// link for various audio controls within js
// https://www.w3schools.com/JSREF/dom_obj_audio.asp

// link for audio control using slider
// https://editor.p5js.org/jfforero/sketches/FYr5O5bAx

var slideIndex = 1;
var volumeSlider;
var music;

// creating slider for adjusting volume
function setup(){
	volumeSlider = createSlider(0, 1, 0.5, 0.01);
	volumeSlider.style('width', '280px');
	volumeSlider.parent('slider-container');
}

function openModal(){
	document.getElementById("myModal").style.display = "block";
	showSlides(slideIndex);
	playMusic(slideIndex); // play song function
}

function closeModal(){
	document.getElementById("myModal").style.display = "none";
	stopMusic(); // pause audio function
}

function plusSlides(n){
	showSlides(slideIndex += n);
	playMusic(slideIndex); // swapping audio when changing slides
}

function currentSlide(n){
	showSlides(slideIndex = n);
	playMusic(slideIndex); // setting unique song per image
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("demo");
	let captionText = document.getElementById("caption");

	if (n > slides.length){slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}

/////// adding adjustable music controls -- play song when entering slideshow, pause when exiting

// using "slideNumber" to assign a unique song for each image slide
function playMusic(slideNumber){
	stopMusic();
	if (slideNumber === 1){
		music = "song01";
	}else if (slideNumber === 2){
		music = "song02";
	}else if (slideNumber === 3){
		music = "song03";
	}else if (slideNumber === 4){
		music = "song04";
	}

	// initializing volume change from slider when song is played
	let audio = document.getElementById(music);
	if (audio){
		audio.volume = volumeSlider.value();
		audio.play();
	}
}

// pause music when exiting slideshow
function stopMusic(){
	let songs = ["song01", "song02", "song03", "song04"];
	songs.forEach(function(id){
		let audio = document.getElementById(id);
		audio.pause();
	});
}
