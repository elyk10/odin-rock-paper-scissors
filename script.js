console.log("Hello world");


function getComputerChoice()
{
    var randomNum = random(3);
    var selection;

    if (randomNum < 1)
        selection = "rock";
    else if (randomNum < 2)
        selection = "paper";
    else
        selection = "scissors";

    return selection;
}

function random(range)
{
    return Math.random() * range;
}

function getHumanChoice()
{
    return prompt("Please select an option:", "rock, paper, or scissors");
}



function playGame()
{
    var humanScore = 0;
    var computerScore = 0;
    
    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock" && computerChoice == "rock")
            console.log("Its a tie! Rock can't beat Rock");
        else if (humanChoice == "rock" && computerChoice == "paper")
        {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors")
        {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock")
        {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "paper")
        {
            console.log("Its a tie! Paper can't beat Paper");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors")
        {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors")
        {
            console.log("Its a tie! Scissors cant beat Scissors");
        }
        else
            console.log("Input error");
    }

    for (var i = 0; i < 100; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Your score was: " + humanScore);
    console.log("The computers score was: " + computerScore);
}


document.addEventListener("DOMContentLoaded", () => {

    let options = document.querySelector("#options");

    options.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                console.log("Rock");
                break;
            case "paper":
                console.log("Paper");
                break;
            case "scissors":
                console.log("Scissors");
                break;
        }
    });
});
