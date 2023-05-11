var date = new Date();
//data atual
var diaA = date.getDate();
var mesA = date.getMonth() + 1;
var anoA = date.getFullYear();

var inptDay = $("#inptDay")
var inptMonth = $("#inptMonth")
var inptYear = $("#inptYear")

var resDayObj = $("#resDay")
var resMonthObj = $("#resMonth")
var resYearObj = $("#resYear")

inptYear.attr("max", anoA);

//boolean
var auxDay, auxMonth, auxYear;
//datas digitadas
var day, month, year;
//respostas
var resDay = 0, resMonth = 0, resYear = 0;

function resetDay() {
    inptDay.css("border", "1px solid rgb(148, 148, 148)");
    $("#lblDay").css("color", "rgb(148, 148, 148)");
    $("#errorDay").html("");
}

function resetMonth() {
    inptMonth.css("border", "1px solid rgb(148, 148, 148)");
    $("#lblMonth").css("color", "rgb(148, 148, 148)");
    $("#errorMonth").html("");
}

function resetYear() {
    $("#inptYear").css("border", "1px solid rgb(148, 148, 148)");
    $("#lblYear").css("color", "rgb(148, 148, 148)");
    $("#errorYear").html("");
}

function resetRes() {
    $("#resYear").text("--")
    $("#resMonth").text("--")
    $("#resDay").text("--")
}

function calculate() {

    resetRes();

    day = inptDay.val();
    month = inptMonth.val();
    year = inptYear.val();

    consiste();

    if (auxDay && auxMonth && auxYear) {

        //Variáveis resposta
        resDay = 0
        resMonth = 0
        resYear = 0

        calcularIdade();

        $("#resYear").text(resYear).hide().fadeIn(1000);
        setTimeout(() => $("#resMonth").text(resMonth).hide().fadeIn(1000), 500)
        setTimeout(() => $("#resDay").text(resDay).hide().fadeIn(1000), 1000)
    }
}

function calcularIdade() {

    //Nessa função, iremos pegar a data do aniversário e ir adicionando os dias, 1 a 1, até chegar na data atual
    //Assim, teremos a diferença entre as duas datas, que nada mais é que a idade do usuário

    while (month < mesA - 1 || year < anoA) {
        month++
        resMonth++
        if (resMonth == 12) {
            resMonth = 0
            resYear++
        }

        if (month == 12) {
            year++
            month = 0
        }
    }
    // ajustes para o último mes
    if (day == diaA) {
        resMonth++
        resDay = 0
    } else if (day < diaA) {
        resMonth++
        resDay = diaA - day
    }
    else {
        resDay = diasNoMes(mesA - 1, anoA) + diaA - day
    }

    if (resMonth == 12) {
        resMonth = 0
        resYear++
    }

}

function consiste() {

    //Consiste o dia
    if (day == "") {
        inptDay.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
        $("#errorDay").html("This field is required!");
        auxDay = false
    } else if (day < 1 || day > 31) {
        inptDay.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblDay").css("color", "hsl(0, 100%, 67%)");
        $("#errorDay").fadeIn().html("Must be a valid day!");
        auxDay = false
    } else {
        auxDay = true
    }

    //Consiste o mês
    if (month == "") {
        inptMonth.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
        $("#errorMonth").html("This field is required!");
        auxMonth = false
    } else if (month < 1 || month > 12) {
        inptMonth.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
        $("#errorMonth").html("Must be a valid month!");
        auxMonth = false
    } else {
        auxMonth = true
    }

    //Consiste o ano
    if (year == "") {
        inptYear.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblYear").css("color", "hsl(0, 100%, 67%)");
        $("#errorYear").html("This field is required!");
        auxYear = false
    } else if (year < 1 || year > anoA) {
        inptYear.css("border", "1px solid hsl(0, 100%, 67%)");
        $("#lblYear").css("color", "hsl(0, 100%, 67%)");
        $("#errorYear").html("Must be a valid year!");
        auxYear = false
    } else {
        auxYear = true
    }

    if (auxDay && auxMonth && auxYear) {

        if (dataFutura(day, month, year)) {
            auxDay = false
            auxMonth = false
            auxYear = false
            inptDay.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblDay").css("color", "hsl(0, 100%, 67%)");
            inptMonth.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
            inptYear.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblYear").css("color", "hsl(0, 100%, 67%)");
            $("#errorDay").html("Must be in the past!");
        }

        //Verifica se a data existe
        if (day > diasNoMes(month, day)) {
            inptDay.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblDay").css("color", "hsl(0, 100%, 67%)");
            inptMonth.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblMonth").css("color", "hsl(0, 100%, 67%)");
            inptYear.css("border", "1px solid hsl(0, 100%, 67%)");
            $("#lblYear").css("color", "hsl(0, 100%, 67%)");
            $("#errorDay").html("Must be a valid date!");
            auxMonth = false
        }
    }
}

function ehBissexto(year) {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        return true
    } else {
        return false
    }
}

function diasNoMes(mes, ano) {
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        return 31
    } else {
        if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            return 30
        } else if (ehBissexto(ano)) {
            return 29
        } else {
            return 28
        }
    }
}

function dataFutura(dia, mes, ano) {
    if (ano > anoA) {
        return true
    } else if (ano === anoA) {
        if (mes > mesA) {
            return true
        } else if (mes === mesA) {
            if (dia >= diaA) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}