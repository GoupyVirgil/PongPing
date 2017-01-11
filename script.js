$(document).ready(function() {
    // $(function() {
    //     $.scrollify({
    //         section: ".section",
    //         scrollSpeed: 900,
    //     });
    // });

    //move section
    var click1 = $('#click1');
    var click2 = $('#click2');
    var click3 = $('#click3');

    click1.on('click', function() {
        console.log('okokok');
        $('.section').addClass('move');
    });

    click2.on('click', function() {
        console.log('okokok');
        $('.section').addClass('move');
    });

    click3.on('click', function() {
        console.log('okokok');
        $('.section').addClass('move');
    });

    $('.slider').slick({
        arrows: true,
        // fade : true,
        dots: true,
        speed : 400,
        slidesToShow : 1
    });

});
