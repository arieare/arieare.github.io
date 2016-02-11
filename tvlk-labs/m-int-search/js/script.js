$(function() {
	var dptPrice = 0;
	var rtnPrice = 0;
	var totalPrice = 0;
	FastClick.attach(document.body);
	$('input[name="dpt"]').on('click', function() {
		dptPrice = $('input[name=dpt]:checked').val();
		totalPrice = Number(dptPrice) + Number(rtnPrice);
		$("#totalprice").html(totalPrice);
		$("#bullet-number-1").html("✓");
		if ($("#bullet-number-2").html() != "✓") {
			setTimeout(function(){
				$('ul.tabs').tabs('select_tab', 'rtn-column');
			},500);
		}
		else {
			
		}

		// $("#totalprice").autoNumeric('update');

		if (($("input[name='rtn']").is(':checked')) && ($("input[name='dpt']").is(':checked'))) {
			$("#book").prop("disabled", false);
		} 
		else {
			$("#book").prop("disabled", true);
		}

	});

	$('input[name="rtn"]').on('click', function() {
		rtnPrice = $('input[name=rtn]:checked').val();
		totalPrice = Number(dptPrice) + Number(rtnPrice);
		$("#totalprice").html(totalPrice);
		$("#bullet-number-2").html("✓");
		if ($("#bullet-number-1").html() != "✓") {
			setTimeout(function(){
				$('ul.tabs').tabs('select_tab', 'dpt-column');
			},500);
		}
		else {
			
		}

		// $("#totalprice").autoNumeric('update');

		if (($("input[name='rtn']").is(':checked')) && ($("input[name='dpt']").is(':checked'))) {
			$("#book").prop("disabled", false);
		} 
		else {
			$("#book").prop("disabled", true);
		}

	});
});
