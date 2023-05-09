var date = new Date();
var diaA = date.getDate();
var mesA = date.getMonth() + 1;
var anoA = date.getFullYear();

$("#inptYear").attr("max", anoA);

var auxDay, auxMonth, auxYear;
var day, month, year;

function calculate() {

    day = $("#inptDay").val();
    month = $("#inptMonth").val();
    year = $("#inptYear").val();

    consiste();

    if (auxDay && auxMonth && auxYear) {



        var resDay, resMonth, resYear;

        resYear = anoA - year;

        if (mesA < month) {
            resYear--;
            resMonth = 12 - (month - mesA)
        } else {
            resMonth = mesA - month
        }

        if (diaA < day) {
            resMonth--;
            resDay = 30 - (day - diaA)
        } else {
            resDay = diaA - day
        }


        $("#resYear").text(resYear)
        $("#resMonth").text(resMonth)
        $("#resDay").text(resDay)
    }

}

function consiste() {

    //Consiste o dia
    if (day == "") {
        $("#inptDay").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
        $("#errorDay").html("This field is required!");
        auxDay = false
    } else if (day < 1 || day > 31) {
        $("#inptDay").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
        $("#errorDay").html("Must be a valid day!");
        auxDay = false
    } else {
        auxDay = true
    }

    //Consiste o mês
    if (month == "") {
        $("#inptMonth").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
        $("#errorMonth").html("This field is required!");
        auxMonth = false
    } else if (month < 1 || month > 12) {
        $("#inptMonth").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
        $("#errorMonth").html("Must be a valid month!");
        auxMonth = false
    } else {
        auxMonth = true
    }

    //Consiste o ano
    if (year == "") {
        $("#inptYear").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblYear").css("color", "hsl(0, 100%, 67%)");
        $("#errorYear").html("This field is required!");
        auxYear = false
    } else if (year < 1 || year > anoA) {
        $("#inptYear").css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblYear").css("color", "hsl(0, 100%, 67%)");
        $("#errorYear").html("Must be a valid year!");
        auxYear = false
    } else {
        auxYear = true
    }

    if (auxDay && auxMonth && auxYear) {
        //Verifica se a data existe
        switch (month) {
            //meses com até 30 dias
            case 4, 6, 9, 11:
                if (day > 30) {
                    $("#inptDay").css("border", "1px solid hsl(0, 100%, 67%)");
                    $("#lblDay").css("color", "hsl(0, 100%, 67%)");
                    $("#errorDay").html("Must be a valid date!");
                    auxMonth = false
                }
                break;
            case 2:
                //mes com 29 dias(ano bissexto)
                if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                    if (day > 29) {
                        $("#inptDay").css("border", "1px solid hsl(0, 100%, 67%)");
                        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
                        $("#errorDay").html("Must be a valid date!");
                        auxMonth = false
                    }
                } else
                    //mes com 28 dias(não bissexto)
                    if (day > 28) {
                        $("#inptDay").css("border", "1px solid hsl(0, 100%, 67%)");
                        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
                        $("#errorDay").html("Must be a valid date!");
                        auxMonth = false
                    }
                break;

        }
    }
}