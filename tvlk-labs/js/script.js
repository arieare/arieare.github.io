$(function() {
	var dptPrice = 0;
	var rtnPrice = 0;
	var totalPrice = 0;

	$('input[name="dpt"]').on('click', function() {
		dptPrice = $('input[name=dpt]:checked').val();
		totalPrice = Number(dptPrice) + Number(rtnPrice);
		$("#totalprice").html(totalPrice);
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

		if (($("input[name='rtn']").is(':checked')) && ($("input[name='dpt']").is(':checked'))) {
			$("#book").prop("disabled", false);
		} 
		else {
			$("#book").prop("disabled", true);
		}

	});
});
