console.log("hello world");
console.log("\n" + computerPlay());

let human = getHuman();
let computer = computerPlay();
console.log( "human: " + human + " computer: " + computer);
console.log(determineWinner(computer, human));

function computerPlay(){
    const r = Math.floor(Math.random() * 3) + 1;
    console.log(r);
    switch(r){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
        return "scissors";
        break;
        default:
            return "rock";
    }
}

function determineWinner(computer, human) {
    if (computer === human){
        return "draw";
    }
    else if( (computer === 'rock' && human === "scissors") || (computer === 'paper' && human === 'rock') || (computer === 'scissors' && human === 'paper')){
        return "computer wins";
    }
    else{
        return "human wins";
    }
}
function getHuman(){
    let human = window.prompt("please enter rock, paper, or scissors");
    human = human.toLowerCase();
    if(human === "rock" || human === "paper" || human === "scissors"){
        return human;
    }
    else {
        return getHuman();
    }

}