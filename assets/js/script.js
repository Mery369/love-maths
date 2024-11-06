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
            checkAnswer();
        }else{
            let gameType=this.getAttribute("data-type");
            runGame(gameType);
        }
    })
}
runGame("addition");
})

/** the main game 'loop',called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType){
    // Create 2 random numbers between 1 and 25
let num1=Math.floor(Math.random()*25)+1;
let num2=Math.floor(Math.random()*25)+1;
if(gameType==="addition"){
    dispalyAdditionQuestion(num1,num2);
}else {
    alert("Unknown game type:${gameType}");
    throw `Unknown game type: ${gameType}.aborting!`;
}
}
/** Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
*/
function checkAnswer(){
let userAnswer=parseInt(document.getElementById('answer-box').value);
let calculatedAnswer=calculateCorrectAnswer();
let isCorrect=userAnswer===calculatedAnswer[0];
if(isCorrect){
    alert("Hey! You got it right! :D");
}
else{
    alert(`Awwwww...you answered ${userAnswer} . The correct answer was ${calculatedAnswer[0]}`);
}
runGame(calculatedAnswer[1]);
}
/**Gets the operands(numbers) and the operator (+,-,*,/)
 * directly from the dom,and returns the correct answer 
 */
function calculateCorrectAnswer(){
let op1=parseInt(document.getElementById('operand1').innerText);
let op2=parseInt(document.getElementById('operand2').innerText);
let op=document.getElementById("operator").innerText;
let result;
if(op==="+"){
    return [op1+op2,"addition"];
}else {
    alert(`Unimplemented operator ${op}`);
    throw`Unimplemented operator ${op}.Aborting!`;
}
}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function dispalyAdditionQuestion(operand1,operand2){
document.getElementById('operand1').textContent=operand1;
document.getElementById('operand2').textContent=operand2;
document.getElementById('operator').textContent= "+" ;


}
function dispalySubtractQuestion(){

}
function displayMultiplyQuestion(){
    
}