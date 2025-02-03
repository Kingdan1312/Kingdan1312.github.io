function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background('black');
    fill('white');
    stroke('white');
    for(var i = 0; i < 1000; i++){
       circle((i*9)%width,(i*100)%height,2);
       // starry night!** :)
    }
    fill(0);
    stroke(255);
    if(mouseX < 350){
    if(mouseY < 350){
            circle(mouseX,mouseY,100);
        }else{
            circle(mouseX,mouseY,50);
        }
        }else{
        circle(mouseX,mouseY,50);
        // addition 'else' and 'if' statments for Y corditnates
    }
    
    
    
    
    
//     if(mouseX < 400){
//     if(mouseY < 400){
//        circle(mouseX,mouseY,100);
//     }else{
//         circle(mouseX,mouseY,50);
//     }
// }else{
//     circle(mouseX,mouseY,50);
// }
}