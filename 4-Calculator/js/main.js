var output_total = ""

function calculator(e) {
  let target = e.target.id
  // Concatenate the numbers as a string
  // Check if target is NaN
  if (!isNaN(e.target.id)) {
    console.log('It is a number!');
    output_total += e.target.id
  } else {
    // If an operation is detected, add operation as a string
    
    switch(e.target.id) {
      case "-":
        output_total += "-"
        break;
      case "+":
        output_total += "+"
        break;
      case "*":
        output_total += "*"
        break;
      case "/":
        output_total += "/"
        break;
      case "=":
        evaluateTotal(output_total);
        break;
      default:
        console.log('Operation not found');
    }
  }
  console.log(output_total);
}

function evaluateTotal(total) {
  console.log('Your total is ', eval(total));
}