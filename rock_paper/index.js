function computerPlay() {
  const pick = ["rock", "paper", "scissors"];
  return pick[Math.floor(Math.random() * pick.length)];
}

var choice = "";
var computerSelection = "";

function playRound(choice, computerSelection) {
  computerSelection = computerPlay();
  var option = playerSelection(choice);
  switch (option) {
    case "rock":
      if (computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
      } else if (computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
      } else {
        return "Its a draw!";
      }
    case "paper":
      if (computerSelection == "rock") {
        return "You Win! Paper beats Rock";
      } else if (computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
      } else {
        return "Its a draw!";
      }
    case "scissors":
      if (computerSelection == "paper") {
        return "You Win! Scissors beats paper";
      } else if (computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
      } else {
        return "Its a draw!";
      }
  }
}

function playerSelection(choice) {
  return choice.toLowerCase();
}

function game() {
  var win = 0;
  var lost = 0;
  var draw = 0;
  var res = "";
  for (var i = 0; i < 5; i++) {
    choice = window.prompt("Select a choice: rock, paper or scissors?", "");
    var str = playRound(choice, computerSelection);
    if (str.match(/Win/g) == "Win") {
      console.log(str);
      win++;
    } else if (str.match(/Lose/g) == "Lose") {
      console.log(str);
      lost++;
    } else {
      console.log(str);
      draw++;
    }
  }
  console.log(
    "You have win " +
      win +
      " times.\nYou have lose " +
      lost +
      " times.\nYou have draw " +
      draw +
      " times.\nThank you for playing"
  );
}

game();
