$(document).ready(function () {
    console.log("table.js is here");
    $.get(`/api/tables/`, function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const reserveElement = $("<ul>");
            const buttonElement=$("<button>")
            const nameElement = $("<h2>");
            const phoneElement = $("<p>");
            const emailElement = $("<p>");
            buttonElement.text(i+1);
            nameElement.text(data[i].name);
            phoneElement.text(data[i].phone);
            emailElement.text(data[i].email);
            reserveElement.append(buttonElement,nameElement, phoneElement, emailElement);
            if(i<5){
            $(".reserve-list").append(reserveElement);
            }
            else{
            $(".wait-list").append(reserveElement);
            }
        }
    })

    // Handler for .ready() called.
});