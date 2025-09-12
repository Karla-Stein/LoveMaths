document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked 'Submit'")
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

function checkAnswer(){

}

function calculateCorrectAnswer(){

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

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}