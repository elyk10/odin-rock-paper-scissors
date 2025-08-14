console.log("Hello world");

function getComputerChoice(choice)
{
    var randomNum = random(3);
    randomNum = choice
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
    return Math.random * range;
}

console.log(getComputerChoice(0));
console.log(getComputerChoice(1));
console.log(getComputerChoice(2));