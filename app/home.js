$(document).ready(function () {
    $.getJSON('/userInfo', function (result) {

        $("h2").append(result.username + " is " + result.status);
        $.each(result.permissions, function (key, value) {
            $("p").append(value + ", ");
        });
        console.log(result);
    });
});