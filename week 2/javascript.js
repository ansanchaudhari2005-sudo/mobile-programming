function add() {
    let number1 = Number(document.getElementById("x").value);
    let number2 = Number(document.getElementById("y").value);
    sum = number1 + number2;
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}