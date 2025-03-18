const picture = document.querySelector("#pictureDiv");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const myRocks = document.querySelector("#myRock");
const myPaper = document.querySelector("#myPaper");
const myScissors = document.querySelector("#myScissors");
const compRocks = document.querySelector("#compRock");
const compPaper = document.querySelector("#compPaper");
const compScissors = document.querySelector("#compScissors");
const win = document.querySelector("#winner");
const lose = document.querySelector("#loser");
const draw = document.querySelector("#draw");
const reset = document.querySelector("#reset");
const head = document.querySelector("#scoreHeader");
reset.onclick = ()=> window.location.reload();

let count=0;
function pictureGetter(selectedImage) {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);
  if (selectedImage != null && selectedImage == rock) {
    if (computerChoice == 1) {
      // alert("Computer chose Rock. It's a draw");
      compRocks.style.display = "flex";
      compRocks.style.flexDirection = "column";
      myRocks.style.display = "flex";
      myRocks.style.flexDirection = "column";
      draw.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    } else if (computerChoice == 2) {
      // alert("Computer chose Paper. You win!");
      compPaper.style.display = "flex";
      compPaper.style.flexDirection = "column";
      myRocks.style.display = "flex";
      myRocks.style.flexDirection = "column";
      win.style.display = "flex";
      reset.style.display="flex";
      count++;
      head.innerHTML = "Score: "+count;
    } else {
      // alert("Computer chose Scissors. You lose!");
      compScissors.style.display = "flex";
      compScissors.style.flexDirection = "column";
      myRocks.style.display = "flex";
      myRocks.style.flexDirection = "column";
      lose.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    }
  } else if (selectedImage != null && selectedImage == paper) {
    if (computerChoice == 1) {
      // alert("Computer chose Rock. You win!");
      compRocks.style.display = "flex";
      compRocks.style.flexDirection = "column";
      myPaper.style.display = "flex";
      myPaper.style.flexDirection = "column";
      win.style.display = "flex";
      reset.style.display="flex";
      count++;
      head.innerHTML = "Score: "+count;
    } else if (computerChoice == 2) {
      // alert("Computer chose Paper. It's a draw");
      compPaper.style.display = "flex";
      compPaper.style.flexDirection = "column";
      myPaper.style.display = "flex";
      myPaper.style.flexDirection = "column";
      draw.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    } else {
      // alert("Computer chose Scissors. You lose!");
      compScissors.style.display = "flex";
      compScissors.style.flexDirection = "column";
      myPaper.style.display = "flex";
      myPaper.style.flexDirection = "column";
      lose.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    }
  } else if (selectedImage != null && selectedImage == scissors) {
    if (computerChoice == 1) {
      // alert("Computer chose Rock. You lose!");
      compRocks.style.display = "flex";
      compRocks.style.flexDirection = "column";
      myScissors.style.display = "flex";
      myScissors.style.flexDirection = "column";
      lose.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    } else if (computerChoice == 2) {
      // alert("Computer chose Paper. You win!");
      compPaper.style.display = "flex";
      compPaper.style.flexDirection = "column";
      myScissors.style.display = "flex";
      myScissors.style.flexDirection = "column";
      win.style.display = "flex";
      reset.style.display="flex";
      count++;
      head.innerHTML = "Score: "+count;
    } else {
      // alert("Computer chose Scissors. It's a draw");
      compScissors.style.display = "flex";
      compScissors.style.flexDirection = "column";
      myScissors.style.display = "flex";
      myScissors.style.flexDirection = "column";
      draw.style.display = "flex";
      reset.style.display="flex";
      head.innerHTML = "Score: "+count;
    }
  }
}

document.querySelector("#Rock").addEventListener("click", function () {
  pictureGetter(this);
});
document.querySelector("#Paper").addEventListener("click", function () {
  pictureGetter(this);
});
document.querySelector("#Scissors").addEventListener("click", function () {
  pictureGetter(this);
});