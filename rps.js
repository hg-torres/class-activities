let arrayCPU = ['r', 'p', 's']


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function playGame() {

  let wins = 0;
  let loses = 0;
  let ties = 0;

  for(i = 0; i < 10; i++){
    let randomNumber = getRandomInt(0, 3);
    console.log(randomNumber) //used to double check the num
    let choiceCPU = arrayCPU[randomNumber];
    console.log(choiceCPU) // used to double check num is made into character


    let userChoice = prompt(` r p or s?`);
    console.log(userChoice) //used to double check user input

    if (userChoice === choiceCPU) {
      ties++
      alert(`It was a tie`)
    }
    else if ((userChoice === 'r' && choiceCPU === 'p') ||
      (userChoice === 'p' && choiceCPU === 's') ||
      (userChoice === 's' && choiceCPU === 'r')) {
      loses++
      alert(`You lose!`)
    }
    else if ((userChoice === 'p' && choiceCPU === 'r') ||
      (userChoice === 's' && choiceCPU === 'p') ||
      (userChoice === 'r' && choiceCPU === 's')) {
      wins++
      alert(`You win!`)
    } else {
      alert(`That was not the right input`)
      i--
    }
  }

  alert(`
  win: ${wins}
  loses: ${loses}
  ties: ${ties}`)

}

document.getElementById("myBtn").addEventListener("click", playGame);
