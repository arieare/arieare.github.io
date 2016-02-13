$(function() {
	var dptPrice = 0;
	var rtnPrice = 0;
	var totalPrice = 0;
	//modal for summary
	$('.modal-trigger').leanModal();
	// attach fastclick
	FastClick.attach(document.body);
	//gesture recognizer
var rtn = $("#rtn-column");
var dpt = $("#dpt-column");
rtn.hammer().on("panright", function(ev) {
    console.log('right: ', ev);
		$('a[href="#go-to-dpt-column"]').trigger('click');
});
dpt.hammer().on("panleft", function(ev) {
    console.log('left: ', ev);
		$('a[href="#go-to-rtn-column"]').trigger('click');
});
// grab an element
//var myElement = document.querySelector("#tab-nav-container");
// construct an instance of Headroom, passing the element
//var headroom  = new Headroom(myElement);
// initialise
//headroom.init(); 
	//tabs set up
	//updating navbar title
	$('a[href$="#go-to-rtn-column"]').on('click', function() {
		$( this ).css( "color", "rgba(255,255,255,1)" )
		$('a[href$="#go-to-dpt-column"]').css( "color", "rgba(255,255,255,.5)" )

		$(".flight-route").html($("#rtn-route").html());
		$(".flight-date").html($("#rtn-flight-date").html());


		$(".tab-nav-wrapper").removeClass( "dpt-active" );
		$(".tab-nav-wrapper").addClass( "rtn-active" );

		$("#view-port-container").removeClass( "dpt-active" );
		$("#view-port-container").addClass( "rtn-active" );
	});
	$('a[href$="#go-to-dpt-column"]').on('click', function() {
		$( this ).css( "color", "rgba(255,255,255,1)" )
		$('a[href$="#go-to-rtn-column"]').css( "color", "rgba(255,255,255,.5)" )

		$(".flight-route").html($("#dpt-route").html());
		$(".flight-date").html($("#dpt-flight-date").html());
		
		$(".tab-nav-wrapper").removeClass( "rtn-active" );
		$(".tab-nav-wrapper").addClass( "dpt-active" );
		
		$("#view-port-container").removeClass( "rtn-active" );
		$("#view-port-container").addClass( "dpt-active" );
	});

	$('input[name="dpt"]').on('click', function() {
		dptPrice = $('input[name=dpt]:checked').val();
		totalPrice = (Number(dptPrice) + Number(rtnPrice))*2;
		$("#totalprice").html(totalPrice);
		$("#bullet-number-1").html("✓");
		$("#bullet-number-1").css("background-color", "rgba(255,255,255,.8)");
		if ($("#bullet-number-2").html() != "✓") {
			setTimeout(function(){
				$('a[href="#go-to-rtn-column"]').trigger('click');
				//$('ul.tabs').tabs('select_tab', 'rtn-column');
			},1000);
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
		totalPrice = (Number(dptPrice) + Number(rtnPrice)) * 2;
		$("#totalprice").html(totalPrice);
		$("#bullet-number-2").html("✓");
		$("#bullet-number-2").css("background-color", "rgba(255,255,255,.8)");
		if ($("#bullet-number-1").html() != "✓") {
			setTimeout(function(){
				$('a[href="#go-to-dpt-column"]').trigger('click');
				//$('ul.tabs').tabs('select_tab', 'dpt-column');
			},1000);
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
