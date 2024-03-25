document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("Creator");

  btn.onclick = function () {
    alert("This is a calculator model made by Daniel Assis");
  };
});

function display(val) {
  document.getElementById("Count_result").value += val;
}

function solve() {
  let expression = document.getElementById("Count_result").value;
  let result;
  try {
    result = math.evaluate(expression);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("Count_result").value = result;
}

function clearDisplay() {
  document.getElementById("Count_result").value = "";
}

document.addEventListener("keyup", function (event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "x" ||
    event.key == "÷"
  ) {
    display(event.key);
  } else if (event.key === "") {
    solve();
  }
});

console.info(window.innerWidth / 2);
console.info(window.innerHeight / 2);
