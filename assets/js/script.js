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
}
else if(gameType==="multiply"){
    displayMultiplyQuestion(num1,num2);
}
else if(gameType==="subtract"){
    dispalySubtractQuestion(num1,num2);
}
else if(gameType==="division"){
    dispalyDivisionQuestion(num1,num2);
}
else {
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
    incrementScore();
}
else{
    alert(`Awwwww...you answered ${userAnswer} . The correct answer was ${calculatedAnswer[0]}`);
    incrementWrongAnswer();
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
}
else if(op==="x"){
    return [op1*op2,"multiply"];
}
else if(op==="-"){
    return[op1-op2,"subtract"];
}
else if(op==="/"){
    return [op1/op2,"division"];
}
else {
    alert(`Unimplemented operator ${op}`);
    throw`Unimplemented operator ${op}.Aborting!`;
}
}
/**Gets the current score from the DOM and increments it by 1 */
function incrementScore(){
   
let oldScore=parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText=++oldScore;
  
}
/**Gets the current tally of incorrect answers from the DOM and increments it by 1 */
function incrementWrongAnswer(){
    let oldScore=parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText=++oldScore;
      
}
function dispalyAdditionQuestion(operand1,operand2){
document.getElementById('operand1').textContent=operand1;
document.getElementById('operand2').textContent=operand2;
document.getElementById('operator').textContent= "+" ;


}
function dispalySubtractQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent= "-" ;
}
function displayMultiplyQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent= "x" ;
}
function dispalyDivisionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent= "/" ;
}