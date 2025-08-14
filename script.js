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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getHumanChoice());
console.log(getHumanChoice());