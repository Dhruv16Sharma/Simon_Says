let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let strtbtn = document.querySelector(".start");

strtbtn.addEventListener("click", function () {  // event listener for start button
  if (started == false) {
    started = true;
    levelUp();
  }
});

document.addEventListener("keypress", function () {    //event listener for keyboard key 
  // NUmber 1
  if (started == false) {
    // console.log("game started");
    started = true;

    levelUp();
  }
});
function gameFlash(btn) {
  //Number 3
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 200);
}
function userFlash(btn) {
  // Number 6
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 150);
}

function levelUp() {
  //Number 2
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn); // random button chooosed here
}

function checkAns(idx) {
  //Number 7
  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("Same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!! Your score was <b>${level}</b> <br> Press any key/button to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  // Number 5
  // console.log(this);
  let button = this; // choose which random button called it
  userFlash(button);

  userColor = button.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn"); // Number 4
for (btn of allBtns) {
  btn.addEventListener("click", btnPress); // here btnPress is written without paranthesis so that function is called when the event occurs,
  // on the other hand if we write paranthesis here only it will call function immediately here only and return its value if any.
}

function reset() {
  //Number 8
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
