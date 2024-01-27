let randomNumber = Math.round(Math.random() * 100 + 1);

let form = document.querySelector(".form");
const submit = document.querySelector("#guessSubmit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".previousGuesses");
const remaining = document.querySelector(".guessRemaining");
const msg = document.querySelector(".message");
const startOver = document.querySelector(".resultParas");

let prevGuess = [];
let numGuess = 1;

let p = document.createElement("p");

let playGame = true;

console.log(randomNumber);

if (playGame) {
  submit.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(typeof guess);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) alert("Enter a valid Number");
  else if (guess < 1) {
    alert("Enter a number greater than 0");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      gameEnd();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    gameEnd();
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  }
}

function displayGuess(guess) {
  userInput.innerHTML = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  msg.innerHTML = `${message}`;
}

function gameEnd() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    msg.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
