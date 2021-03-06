var output_total = ""
evalBool = false;

function calculator(e) {
  var display = document.getElementById('display');
  let target = e.target.id
  // Concatenate the numbers as a string
  // Check if target is NaN
  if (!isNaN(target)) {
    if (evalBool) {
      output_total = 0;
    } else {
      console.log('It is a number!');
      output_total += target
    }
    // Display output
    display.innerText = output_total;
  } else if (target === "=") {
    evalBool = true;
    evaluateTotal(output_total);
  } else {
    evalBool = false;
    // If an operation is detected, add operation as a string
    switch(target) {
      case "-":
        output_total += " - ";
        break;
      case "+":
        output_total += " + ";
        break;
      case "*":
        output_total += " * ";
        break;
      case "/":
        output_total += " / ";
        break;
      case ".":
        output_total += ".";
      default:
        console.log('Operation not found');
    }
    // Display output
    display.innerText = output_total;
  }
  console.log(output_total);
}

function evaluateTotal(total) {
  display.innerText = eval(total);
  // Save evaluation total to output
  output_total = eval(total);
  console.log('Your total is ', eval(total));
}