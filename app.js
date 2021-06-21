$(document).ready(function () {
    $('#clock').countdown('2021/8/1',function(event){
        var $this = $(this).html(event.strftime(''
        + '<div><span> %m </span><span> Months </span></div>'
        + '<div><span> %d </span><span> Days </span></div>'
        + '<div><span> %H </span><span> Hours </span></div>'
        + '<div><span> %M </span><span> Minutes </span></div>'
        + '<div><span> %S </span><span> Seconds </span></div>'
        ))
    })
    $('.counterup').counterUp({
        delay:5,
        time:3000
    })
});