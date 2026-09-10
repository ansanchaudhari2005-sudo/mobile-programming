function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById("result").innerHTML = "Error: Division by zero is not allowed.";
                return;
            }
            break;
        default:
            document.getElementById("result").innerHTML = "Error: Invalid operation.";
            return;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}