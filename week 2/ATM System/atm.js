let balance = 1000;

let correctPin = "1234";


function checkBalance()
{
    let pin = document.getElementById("pin").value;

    if (pin == correctPin)
    {
        document.getElementById("result").innerHTML =
            "Your Balance is: Rs. " + balance;

        document.getElementById("result").style.color = "green";
    }
    else
    {
        document.getElementById("result").innerHTML =
            "Invalid PIN";

        document.getElementById("result").style.color = "red";
    }
}


function deposit()
{
    let pin = document.getElementById("pin").value;
    let amount = Number(document.getElementById("amount").value);

    if (pin != correctPin)
    {
        document.getElementById("result").innerHTML =
            "Invalid PIN";

        document.getElementById("result").style.color = "red";
        return;
    }

    if (amount <= 0 || amount % 100 != 0)
    {
        document.getElementById("result").innerHTML =
            "Deposit amount must be a multiple of 100";

        document.getElementById("result").style.color = "red";
        return;
    }

    balance = balance + amount;

    document.getElementById("result").innerHTML =
        "Deposit Successful!<br>" +
        "Deposited: Rs. " + amount + "<br>" +
        "New Balance: Rs. " + balance;

    document.getElementById("result").style.color = "green";

    document.getElementById("amount").value = "";
}


function withdraw()
{
    let pin = document.getElementById("pin").value;
    let amount = Number(document.getElementById("amount").value);

    if (pin != correctPin)
    {
        document.getElementById("result").innerHTML =
            "Invalid PIN";

        document.getElementById("result").style.color = "red";
        return;
    }

    if (amount <= 0 || amount % 100 != 0)
    {
        document.getElementById("result").innerHTML =
            "Withdrawal amount must be a multiple of 100";

        document.getElementById("result").style.color = "red";
        return;
    }

    if (amount > balance)
    {
        document.getElementById("result").innerHTML =
            "Insufficient Balance";

        document.getElementById("result").style.color = "red";
        return;
    }

    balance = balance - amount;

    document.getElementById("result").innerHTML =
        "Withdrawal Successful!<br>" +
        "Withdrawn: Rs. " + amount + "<br>" +
        "New Balance: Rs. " + balance;

    document.getElementById("result").style.color = "green";

    document.getElementById("amount").value = "";
}