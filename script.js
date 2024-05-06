let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const rock = "rock";
    const scissors = "scissors";
    const paper = "paper";
    let random = Math.random()

    if(random <= 1/3){

        return rock;
    }
    else if(random<=2/3 && random>1/3){

        return scissors;
    }
    else if(random<=1 && random>2/3){
        return paper;
    }
}

function getHumanChoice(){
    
    let choice = prompt("Cual es tu eleccion: ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("Empate.")
    }
    
    if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            console.log("Ganaste.");
            humanScore ++;
        }
        else if(computerChoice == "paper"){
            console.log("Perdiste.");
            computerScore++;
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            console.log("Perdiste");
            computerScore++;
        }
        else if(computerChoice == "rock"){
            console.log("Ganaste.");
            humanScore ++;
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            console.log("Ganaste.");
            humanScore ++;
        }
        else if(computerChoice == "rock"){
            console.log("Perdiste.");
            computerScore++;
        }
    }

}

function playGame(){
    let humanChoice = "a";
    let computerChoice = "b";

    for (let i = 1; i<6; i++) {

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log("La eleccion de la computadora fue: ");
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);

    }
    console.log("Los resultados del humano fueron: " + humanScore.toString() +" y los de la computadora fueron: " + computerScore.toString());
}

playGame();




