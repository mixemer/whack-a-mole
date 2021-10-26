  const holes = document.querySelectorAll('.hole'); // .hole from css
  const scoreBoard = document.querySelector('.score'); // .score from css
  const professors = document.querySelectorAll('.professor'); // .professor from css
  const timer = document.querySelector('.time');
  let lastHole; // let are variables.
  let timeUp;
  let score; 
  let timeCount;
  let timeAmount = 10000;

  function randomTime(min, max) { // random time for pop up
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) { // Control the professor pop up from which hole.
    const idx = Math.floor(Math.random() * holes.length); // using a random gen to get a random hole.
    const hole = holes[idx]; // creating array for the holes. 1 - 9
    if (hole === lastHole) {
      // if the hole is the same as the previews holes, this if will run.
      return randomHole(holes); // mini recursion.
    }
    lastHole = hole; // save the hole into lastHole for if statement in next run.
    return hole; // return the hole to peep() function.
  }

  function peep() { // here is probably where the code begin 
    tick();
    const time = randomTime(1000, 1000); // I think this change the pop up speed.
    const hole = randomHole(holes);
    hole.classList.add('up'); // creating a class list on hole and added up to it. up is in the css.
    setTimeout(() => {
      hole.classList.remove('up');
      //timeCount = timeUp;
      if (!timeUp) peep();
    }, time); // when the time is reach, the professor will pop back in.
  }

  function startGame() { // this code start first.
    timeCount = (timeAmount / 1000);
    //timer.textContent = timeCount; // display the time.
    scoreBoard.textContent = 0; // score will display 0.
    timeUp = false; // time will be false up time is over.
    score = 0; // score start from 0.
    peep(); // call the peep() function.   
    setTimeout(() => timeUp = true, timeAmount) // This change the length of the game.
  }

  function bonk(e) { // The score counter when you hit a professor.
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function tick() {
    timeCount--;
    timer.textContent = timeCount;  
  }
  
  professors.forEach(professor => professor.addEventListener('click', bonk));