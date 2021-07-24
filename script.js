let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9) + 1;
const targetNum = generateTarget()
console.log(targetNum);

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    const difference = (a,b) => Math.abs(a - b);
    const differenceHumanGeuss = difference(target, currentHumanGuess);
    const differenceComputerGuess = difference(target, computerGuess);
    console.log(`Разница игрока ${differenceHumanGeuss}, разница компьютера ${differenceComputerGuess}`);
     const winner = differenceHumanGeuss < differenceComputerGuess ? true : false;
     return winner;
};
console.log(compareGuesses(5,6,targetNum));

const updateScore = winners => {
    if (winners === 'human') {
        humanScore++;
    } else if (winners === 'computer') {
        computerScore++;
    } else {
        `Неверное значение`;
    };
};

const advanceRound = () => {
    currentRoundNumber++;
};
updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore);