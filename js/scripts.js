
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })


    $('#repayment_value').text($('#repayment_slider').val());
    $('#credit_value').text($('#credit_slider').val());

    $('#repayment_slider').change(function(event) {
        $('#repayment_value').text($('#repayment_slider').val());
        calc_loan();
    });

    $('#credit_slider').change(function(event) {
        $('#credit_value').text($('#credit_slider').val());
        calc_loan();
    });

    $('.range').bind('change mousemove', function() {
        var val = $(this).val();
        var buf = ((100 - val) / 4) + parseInt(val);
        $(this).css(
            'background',
            'linear-gradient(to right, #cc181e 0%, #cc181e ' + val + '%, #777 ' + val + '%, #777 ' + buf + '%, #444 ' + buf + '%, #444 100%)'
        );
    });


});
