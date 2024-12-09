$(document).ready(function () {
    $('.rasel').click(function () {
        $('.kajol').slideToggle(3000);
    });
    $('button').click(function () {
        $('.kajol').stop(3000);
    });
});
