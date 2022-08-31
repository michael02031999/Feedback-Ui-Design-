let unhappyText = document.getElementById("unhappyText");
let neutralText = document.getElementById("neutralText");
let satisfiedText = document.getElementById("satisfiedText");

let Unhappy = document.getElementById("Unhappy");
let Neutral = document.getElementById("Neutral");
let Satisfied = document.getElementById("Satisfied");

unhappyText.addEventListener("click", changeColor1);
neutralText.addEventListener("click", changeColor2);
satisfiedText.addEventListener("click", changeColor3);

Satisfied.style.boxShadow = "0px 0px 5px lightgray";

let feedback = "Satisfied";

function changeColor1() {
  Unhappy.style.boxShadow = "";
  Satisfied.style.boxShadow = "";
  Neutral.style.boxShadow = "";

  Unhappy.style.boxShadow = "0px 0px 5px lightgray";

  Satisfied.style.boxShadow = "";
  Neutral.style.boxShadow = "";
  Satisfied.style.boxShadow = "";

  feedback = "Unhappy";
}

function changeColor2() {
  Unhappy.style.boxShadow = "";
  Satisfied.style.boxShadow = "";
  Neutral.style.boxShadow = "";
  Satisfied.style.boxShadow = "";

  Neutral.style.boxShadow = "0px 0px 5px lightgray";

  Unhappy.style.boxShadow = "";
  Satisfied.style.boxShadow = "";
  Satisfied.style.boxShadow = "";

  feedback = "Neutral";
}
function changeColor3() {
  Unhappy.style.boxShadow = "";
  Satisfied.style.boxShadow = "";
  Neutral.style.boxShadow = "";

  Satisfied.style.boxShadow = "0px 0px 5px lightgray";

  Unhappy.style.boxShadow = "";

  Neutral.style.boxShadow = "";

  feedback = "Satisfied";
}

let container = document.getElementById("container");
let secondContainer = document.getElementById("secondContainer");
let feedback2 = document.getElementById("feedback");

let sendReview = document.getElementById("sendReview");

sendReview.addEventListener("click", reviewSent);

function reviewSent() {
  container.style.display = "none";
  secondContainer.style.display = "unset";
  feedback2.innerHTML = "Feedback: " + feedback;
}
