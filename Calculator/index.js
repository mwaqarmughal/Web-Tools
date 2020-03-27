window.onload = function() {
  console.log("start");
  var cal = document.getElementById("calculate");
  cal.onclick = calculating;
};

function calculating() {
  var operation = document.getElementById("operations").value;
  console.log(operation);
  {
    if (operation === "Add") {
      add();
    } else if (operation === "Subtract") {
      subtract();
    } else if (operation === "Multiply") {
      Multiplication();
    } else if (operation === "Divide") {
      division();
    }
  }
}
function add() {
  var val1 = document.getElementById("value1").value;
  var val2 = document.getElementById("value2").value;
  val1 = Number(val1);
  val2 = Number(val2);
  var sol = val1 + val2;
  console.log(sol);
  alert(Number(sol));
}
function subtract() {
  var val1 = document.getElementById("value1").value;
  var val2 = document.getElementById("value2").value;
  val1 = Number(val1);
  val2 = Number(val2);
  var sol = val1 - val2;
  console.log(Number(sol));
  alert(Number(sol));
}
function Multiplication() {
  var val1 = document.getElementById("value1").value;
  var val2 = document.getElementById("value2").value;
  val1 = Number(val1);
  val2 = Number(val2);
  var sol = val1 * val2;
  console.log(Number(sol));
  alert(Number(sol));
}
function division() {
  var val1 = document.getElementById("value1").value;
  var val2 = document.getElementById("value2").value;
  val1 = Number(val1);
  val2 = Number(val2);
  var sol = val1 / val2;
  console.log(sol);
  alert(Number(sol));
}
console.log("Finish");
