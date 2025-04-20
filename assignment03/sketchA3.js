// Aimed to create a cool typing game.
// Incuded things like an array of sentences, restart buttons and key pressed functions.
// Type the sentences extacly as displayed to move onto the next level (3 total).
// If any mistake at all is made while typing you must restart by pressing ENTER key or ENTER button in the instructions.
// Any time the game is restarted, it loads a random sentence for each level (20 total).

// Links for all typing game inspirations:
// https://editor.p5js.org/cdmorvin/sketches/e3AO9GkEs
// https://editor.p5js.org/BarneyCodes/sketches/iBAACUbYW 
// https://www.youtube.com/watch?v=xww779jG7Hk --- https://github.com/kaizhelam/Typing-Speed-Game 


// Array of all sentences, random sentence generator used for some.
// https://perchance.org/sentence 
const messages = [
    "A pound of chicken cost more than eggs.",
    "The sheep were led home by a cat.",
    "Oats are a meal eaten both by horse and man.",
    "There is a monster under my bed.",
    "The duck walked up to the lemonade stand.",
    "Don't settle like water on pavement.",
    "Nestea is my favourite drink.",
    "Luke, I am your father.",
    "Don't bring mud in the house!",
    "Look what the cat dragged in.",
    "It's raining cats and dogs.",
    "Forest was running for 3 years.",
    "I heard a noise from downstairs.",
    "Would you like the lobster or braised beef?",
    "It took four aliens to change the light bulb.",
    "I like to eat pizza.",
    "The lazy dog jumps over the quick fox.",
    "She sells sea shells by the sea shore.",
    "The battle is nearly won.",
    "There's a snake in my boot!"
];

// Defining each level.
var levels = [
    {title: "LEVEL 01", text: ""},
    {title: "LEVEL 02", text: ""},
    {title: "LEVEL 03", text: ""}
];

var currentLevel = 0;
var typeInput;
var gameProgress = false;

function setup(){
    typeInput = createInput("");
    typeInput.parent("input-holder");
    typeInput.input(typingCheck);

    const restartBtn = select('#restart-btn');
     // Run startLevel function when button is pressed.
    restartBtn.mousePressed(()=>{
        currentLevel = 0;
        startLevel();
    });
    startLevel();
}

// Any time the game is restarted it returns to level 01.
function startLevel(){
    gameProgress = true;
    typeInput.value("");
    typeInput.removeAttribute("disabled"); // Allow for tpying.

    // change level title
    select("#level-text").html(levels[currentLevel].title);
    // Display random sentences for each level.
    const sentence = random(messages);
    levels[currentLevel].text = sentence;
    select("#sentence-text").html(sentence);
    select("#message").html("");
}

// Serves as the game watcher, checks for erros when player is tpying.
function typingCheck(){
    if (!gameProgress) return;
    const input = typeInput.value();
    const target = levels[currentLevel].text;

    if (!target.startsWith(input)){
        showMessage("❌ Error! Press ENTER to restart. ❌");
        return;
    } // When error is made, prompt message to restart.
    if (input === target){
        currentLevel++;
        if (currentLevel >= levels.length){
            showMessage("✨ Winner! Press ENTER to restart. ✨");
        }else{
            startLevel();
        }
    } // Prompt WIN message when all levels are passed.
}

//  Disable typing when any WIN/ERROR message is displayed.
function showMessage(text){
    gameProgress = false;
    typeInput.attribute("disabled", "");
    select("#message").html(text);
}

// Assigning ENTER key to run startLevel function.
function keyPressed(){
    if (keyCode === ENTER){
        currentLevel = 0;
        startLevel();
    }
}
