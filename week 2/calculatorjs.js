function result(event)
{
    event.preventDefault();

    let English = Number(document.getElementById("english").value);
    let Nepali = Number(document.getElementById("nepali").value);
    let Chemistry = Number(document.getElementById("chemistry").value);
    let Computer = Number(document.getElementById("computer").value);
    let OptionalMath = Number(document.getElementById("optionalMath").value);
    let Maths = Number(document.getElementById("maths").value);
    let Physics = Number(document.getElementById("physics").value);
    let Social = Number(document.getElementById("social").value);

    if (English < 0 || English > 100 ||
        Nepali < 0 || Nepali > 100 ||
        Chemistry < 0 || Chemistry > 100 ||
        Computer < 0 || Computer > 100 ||
        OptionalMath < 0 || OptionalMath > 100 ||
        Maths < 0 || Maths > 100 ||
        Physics < 0 || Physics > 100 ||
        Social < 0 || Social > 100)
    {
        document.getElementById("result").innerHTML =
            "Marks must be between 0 and 100";

        document.getElementById("result").style.color = "red";

        return;
    }

    let total = English + Nepali + Chemistry + Computer +
                OptionalMath + Maths + Physics + Social;

    printResult(total);
}


function printResult(total)
{
    let pass = false;

    if (total >= 700)
    {
        document.getElementById("total").innerHTML =
            "Total Marks: " + total + " / 800<br>It is Distinction";

        pass = true;
    }
    else if (total >= 600)
    {
        document.getElementById("total").innerHTML =
            "Total Marks: " + total + " / 800<br>It is First Division";

        pass = true;
    }
    else if (total >= 500)
    {
        document.getElementById("total").innerHTML =
            "Total Marks: " + total + " / 800<br>It is Second Division";

        pass = true;
    }
    else if (total >= 400)
    {
        document.getElementById("total").innerHTML =
            "Total Marks: " + total + " / 800<br>It is Third Division";

        pass = true;
    }
    else
    {
        document.getElementById("total").innerHTML =
            "Total Marks: " + total + " / 800<br>It is Fail";

        pass = false;
    }

    if (pass)
    {
        document.getElementById("result").innerHTML =
            "Result: Pass";

        document.getElementById("result").style.color = "green";
    }
    else
    {
        document.getElementById("result").innerHTML =
            "Result: Fail";

        document.getElementById("result").style.color = "red";
    }
}