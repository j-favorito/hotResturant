$(document).ready(function () {
    console.log("reserve.js is here");
    $("#submit").on("click", function (event) {
        event.preventDefault();
        
        let newReservation = {
            name: $("#inputName").val().trim(),
            phone: $("#inputPhone").val().trim(),
            email: $("#inputEmail").val().trim(),
            id: $("#inputId").val().trim()
        };

        $
            .post("/api/tables", newReservation)
            .then(function (data) {
                console.log(data);
                alert("Adding to reservation...");
            });
    });
});