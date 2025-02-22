// https://p5js.org/
// this code come from this tutorial
// command(osx)console(win) / is the comment command in any language

var schmoDiv = document.getElementById("schmo marie");
// schmoDiv.hidden = false;
if(schmoDiv ===  null){
    // do something
}
console.log(schmoDiv);

// Have Tutorial link with commented header
function ourDivwasClicked(){
    if(schmoDiv.innerHTML === "Hello"){
        schmoDiv.innerHTML = "howdy!";
        schmoDiv.innerHTML = "howdy!";
    }else{
        schmoDiv.innerHTML = "Hello";
    }  
}

schmoDiv.onclick = ourDivwasClicked;


/* "end tutorial code" title at the bottom of code from 
tutorial include remix below */