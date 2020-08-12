
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
    })

    var creditValue = 10000000;
    var repaymentValue = 15;

    $("#credit_slider").slider({
        min: 50000,
        max: 30000000,
        step: 50000,
        value: 10000000,
        range: "min",
        stop: function( event, ui ) {
            $('#credit_value').text(ui.value);
            $('#credit_sum').val(ui.value)
        },
        slide: function( event, ui ) {

        }
    });



    $("#repayment_slider").slider({
        min: 1,
        max: 30,
        step: 1,
        value: 15,
        range: "min",
        stop: function( event, ui ) {
            $('#repayment_value').text(ui.value);
            $('#credit_term').val(ui.value)
        },
        slide: function( event, ui ) {

        }
    });

    $('#credit_value').text(creditValue);
    $('#repayment_value').text(repaymentValue);
    $('#credit_sum').val(creditValue);
    $('#credit_term').val(repaymentValue);

	$('form').submit(function() {
        var th = $(this);
		$.ajax({
			type: 'POST',
			url: '../php/mail.php',
			data: th.serialize()
		}).done(function() {
			alert('Спасибо!');
			setTimeout(function() {
				th.trigger('reset');
			}, 1000);
        });
		return false;
	});
});
