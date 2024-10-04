
// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/

const state ={
    boredom: 0,
    hunger: 0,
    sleepiness :0
}


/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');

console.log(boredomStatEl, hungerStatEl, sleepinessStatEl);
console.log(playBtnEl, feedBtnEl, sleepBtnEl);
console.log(gameMessageEl, resetBtnEl);
  
/*-------------------------------- Functions --------------------------------*/
function init(){
  console.log("calling the function");
  gameOver = false;

  gameMessageEl.classList.add('hidden'); 
  resetBtnEl.classList.add('hidden');


  timer = setInterval(runGame,2000);
  render(); 
};

function getRandomIncrement() {
//   return Math.floor(Math.random() * max);
     return Math.floor(Math.random() * 4); 
}

function updateStates() {
      state.boredom += getRandomIncrement();
    state.hunger += getRandomIncrement();
    state.sleepiness += getRandomIncrement();
  }

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    }
}
  
function render(){
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;

  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.classList.remove('hidden');
    resetBtnEl.classList.remove('hidden');
}
}

function runGame(){
  //   console.log('the game is running!');
  updateStates();
  checkGameOver();
  render();
  };

function handleStatReset(stat) {
    state[stat] = 0; 
    render();
} 

function handleStatReset(stat) {
  state[stat] = 0; 
  render();
}


function resetGame() {
  gameMessageEl.classList.add('hidden'); 
  resetBtnEl.classList.add('hidden'); 
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  render(); 
}
 init(); 
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('#Boredom').addEventListener('click', boredom);
document.querySelector('#hunger').addEventListener('click', hunger);
document.querySelector('#sleep').addEventListener('click', sleepiness);


document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', init);
  });
