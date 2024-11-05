// functions needed : 
// runGame()
// checkAnswer()
// calculateCorrectAnswer()
// incrementScore
// incrementWrongAnswer()
// dispalyAdditionQuestion()
// dispalySubtractQuestion()
// displayMultiplyQuestion()
// wait for the DOM to finish loading before  running the game
// get the button elements and events listeners to them
document.addEventListener("DOMContentLoaded",function(){
let buttons=document.getElementsByTagName("button");
for(let button of buttons){
    button.addEventListener("click",function(){
        if(this.getAttribute("data-type")==="submit"){
            alert("You clicked Submit!");
        }else{
            let gameType=this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }
    })
}
})
/** the main game 'loop',called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // Create 2 random numbers between 1 and 25
let num1=Math.floor(Math.random()*25)+1;
let num2=Math.floor(Math.random()*25)+1;
}

function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function dispalyAdditionQuestion(){

}
function dispalySubtractQuestion(){

}
function displayMultiplyQuestion(){
    
}