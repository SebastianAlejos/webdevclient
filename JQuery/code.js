$('document').ready(function () {
    $("#jump").click(function () {
        $('h3').show();
    });
    $("#jump").click(function () {
        $("#obiwan").animate({
            height: 'toggle'
        });
    });
    $("#reply").click(function () {
        $('h4').show();
    });
    $("#attack").click(function () {
        $("#grevious").animate({
            left: '350px'
        });
    });
});