//This script should play a round of Rock, Paper, Scissors
//(or Roshambo) through the console. It will need a function
//to run the computers choice, which will be decided with a
//random number. The computer choice should be assigned to a 
//variable called "compChoice". The user will then input their
//decision, which will then be assigned to a variable called
//"userChoice". We could send the user choice thru a function
//to uniformize it, so that it can be referenced later when
//the game runs the two choices against each other.
//The other choice is to make the game part more robust. 
//I think I would rather have it uniformed.
//Finally, the script will need to output the result,
//utilizing another function that inputs the result 
//into a template literal.

// let compChoice; i dont think i actually need this.
// let userChoice;

function getComputerChoice (){
    let compNum = Math.floor(Math.random() * 3); //generate a random # from 0-2
    let choice;
    if (compNum == 0) { //gotta remember to use the === instead of =(declarative) for tests
        choice = "rock"; //note, we dont use let here. let would declare the variable,
                        //moving it outside the desired scope and creating an undefined
                        //variable.
    }
    else if (compNum == 1) {
        choice = "scissors";
    }
    else{
        choice = "paper";
    }
    return choice; //assigns the chosen item to the outside variable compChoice
}

// getComputerChoice();
// console.log(`computer chose ${compChoice}`); these were just for testing

function getUserChoice (){
    let x = true; //creates a variable to set the conditional for the while loop
    while(x = true){ //this will keep looping until the user breaks the loop
                     //by correctly entering one of the expected options

// first we collect data from the user. the prompt also has a toLowerCase method
// so that even if the user enters it with capitals, it will be uniform for the 
// program to understand.
        userChoice = prompt("enter your choice: rock, paper, or scissors").toLowerCase();

//this if block checks to see if the user has entered an acceptable option.
//if they do, then the conditional variable is switched to false to end the loop.        
        if (userChoice=="rock" || userChoice=="scissors" || userChoice=="paper"){
        x = false;
        return userChoice;
        }
    
        else { //this else just tells the user to enter a valid option
        console.log("please input only rock, paper, or scissors");    
        x = true //keeps the conditional variable true so that the loop continues
        }
    }
    
}

//this is how i originally made the winner determining function. It's so bloated though
// function winner(userChoice,compChoice){
//     console.log(`the user chose ${userChoice} and AI chose ${compChoice}`)
    
//     if (userChoice == "rock" && compChoice == "paper"){
//         console.log("you lose.");
//     }
//     else if (userChoice == 'rock' && compChoice == "scissors"){
//         console.log("you win!");
//     }
//     else if (userChoice == "rock" && compChoice == "rock"){
//         console.log("it's a draw...");
//     }
//     else if (userChoice == 'scissors' && compChoice == 'paper'){
//         console.log("you win!");
//     }
//     else if (userChoice == 'scissors' && compChoice == 'scissors'){
//         console.log("its a draw...");
//     }
//     else if(userChoice == 'scissors' && compChoice == 'rock'){
//         console.log('you lose.')
//     }
//     else if (userChoice == 'paper' && compChoice == 'scissors'){
//         console.log('you lose.');
//     }
//     else if (userChoice == 'paper' && compChoice == 'rock'){
//         console.log('you win!');
//     }
//     else if (userChoice == 'paper' && compChoice == 'paper'){
//         console.log('its a draw...');
//     }
// }

// this is the way it should be. We define the draw situation first, then all
// the user winning criteria, and last put in what happens when you lose.
// you dont need to define every little situation when you use OR
function roshambo(userChoice, compChoice) {
    console.log(`the user chose ${userChoice} and the AI chose ${compChoice}`);
    
    if (userChoice === compChoice) {
      console.log("it's a draw...");
    }
    
    else if ( //all the win qualifiers in one statement. each one in seperated by an OR
      (userChoice === "rock" && compChoice === "scissors") ||   
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
    ) {
      console.log("you win!");
    }

    else {
      console.log("you lose.");
    }
  }
//so to run a single iteration of the game, we invoke the roshambo function and have
//it use the two choice functions as parameters
roshambo (getUserChoice(),getComputerChoice());
