/*
HERE IS THE JS TO RUN THE GAME
*/
const holes = document.querySelectorAll(".hole"); // .hole from css
const scoreBoard = document.querySelector(".score"); // .score from css
const professors = document.querySelectorAll(".professor"); // .professor from css
const timer = document.querySelector(".time");
let lastHole; // let are variables.
let timeUp;
let score;
let timeCount;
let timeAmount = 10000;
var play = false;

//Function to give a random time to show the image
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/*
This randomHole function is to control the professor pop up from which hole.
using a random gen to get a random hole.
creating array for the holes. 1 - 9
*/
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length); 
  const hole = holes[idx]; 
  // if the hole is the same as the previews holes, this if will run.
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole; // save the hole into lastHole for if statement in next run.
  return hole; // return the hole to peep() function.
}

/*
This peep function is to control the speed and timeframes of the image
to show in each hole. The numbers are big because it counts in millisecond
*/
function peep() {
  tick();
  const time = randomTime(1000, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up"); // creating a class list on hole and added up to it. up is in the css.
  setTimeout(() => {
    hole.classList.remove("up");
    //timeCount = timeUp;
    if (!timeUp) peep(); // When time is not up, it will call the peep() method again.
    if (timeUp) play = false; // When the time is up, play will turn back to false.
  }, time); // when the time is reach, the professor will pop back in.
}

/*
This startGame function is to control and stop the game
when the time is up.
*/

function startGame() {
  // this code start first.
  if(play == true) { // This if statement is to prevent the click of play button more than once.
    console.log("You are playing the game right now!");
  }
  if(play == false) {
    play = true; // change the play to true, when the player press play.
    timeCount = timeAmount / 1000;
    //timer.textContent = timeCount; // display the time.
    scoreBoard.textContent = 0; // score will display 0.
    timeUp = false; // time will be false up until time is over.
    score = 0; // score start from 0.
    peep(); // call the peep() function.
    setTimeout(() => (timeUp = true), timeAmount); // This change the length of the game.
  }
}


/*
This bonk is to control the score counter when you hit a professor.
if isTrusted is used to prevent other use JS to fake 
the game in order to win, not too necessary.
*/
function bonk(e) {
  if (!e.isTrusted) return;  
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

function tick() {
  timeCount--;
  timer.textContent = timeCount;
}

professors.forEach((professor) => professor.addEventListener("click", bonk));
