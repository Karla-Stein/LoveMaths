document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                
            }
        })
    }
    runGame("addition")
})

/** 
 * The main game "loop", called when the script is first loaded
 * and after the users's answer has been processed
*/
function runGame(gameType){

    // Creates two random numbers between 1 and 25
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);

    if(gameType === "addition"){
       displayAdditionQuestion(num1, num2)
} else{
    alert(`unknown game type ${gameType}`)
    throw `unknown game type ${gameType}. Aborting!`

}

}

/**
 * Checks the answer against the first element in 
 * the returned array 
 */
function checkAnswer(){
   let userGuess =  parseInt(document.getElementById("answer-box").value);
   let correctAnswer = calculateCorrectAnswer();
   let isCorrect = userGuess === correctAnswer[0];
   if(isCorrect){
    alert("You are correct");
    
   }else{
    alert(`Awww..${userGuess} is not correct. Correct anser is ${correctAnswer[0]}`)
   }

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus,etc)
 * directly from the dom, and returns the correct answers.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operator = document.getElementById("operator").innerText;
    let operand2 = parseInt(document.getElementById("operand2").innerText);

     if (operator === "+"){
        return [operand1 + operand2, "addition"];
     }else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}.Aborting`
     }

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(num1, num2){
     document.getElementById("operand1").textContent = num1;
     document.getElementById("operand2").textContent = num2;
     document.getElementById("operator").textContent = "+";
    }



function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}