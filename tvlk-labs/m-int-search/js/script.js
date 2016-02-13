$(function() {
	var dptPrice = 0;
	var rtnPrice = 0;
	var totalPrice = 0;
	//modal for summary
	$('.modal-trigger').leanModal();
	// attach fastclick
	FastClick.attach(document.body);
//gesture recognizer
var rtn = $("#tab-content-container");
rtn.hammer({"threshold":100}).on("panright", function(ev) {
    console.log('right: ', ev);
		$('a[href="#go-to-dpt-column"]').trigger('click');
		$( this ).removeClass( "rtn-active" );
		$( this ).addClass( "dpt-active" );
});

var dpt = $("#tab-content-container");
dpt.hammer({"threshold":100}).on("panleft", function(ev){
    console.log('left: ', ev);
		$('a[href="#go-to-rtn-column"]').trigger('click');
		$(this ).removeClass( "dpt-active" );
		$( this ).addClass( "rtn-active" );
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

		$("#tab-content-container").removeClass( "dpt-active" );
		$("#tab-content-container").addClass( "rtn-active" );
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

		$("#tab-content-container").removeClass( "rtn-active" );
		$("#tab-content-container").addClass( "dpt-active" );
	});

	$('input[name="dpt"]').on('click', function() {
		if($('input[name="dpt"]').is(':checked')) {
			//add selected class
			$('.dpt-column .search-item').removeClass("dpt-selected");
			$( this ).parent().addClass("dpt-selected");
			//style
			$('.dpt-column .search-item').css({"border":"1px solid #dadada", "box-shadow":"none", "background-color":"#ffffff"});
			$( this ).parent().css({"border":"1px solid #1BA0E2", "box-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.10), 0 1px 4px 0 rgba(0, 0, 0, 0.02)", "background-color":"#fbfbfb"});			
		}
		dptPrice = $('input[name=dpt]:checked').val();
		totalPrice = (Number(dptPrice) + Number(rtnPrice))*2; //sesuai jumlah passengers
		$("#totalprice").html(totalPrice);
		$("#bullet-number-1").html("✓");
		$("#bullet-number-1").css("background-color", "rgba(255,255,255,.8)");
		if ($("#bullet-number-2").html() != "✓") {
			setTimeout(function(){
				$('a[href="#go-to-rtn-column"]').trigger('click');
			},500);
		}
		if (($("input[name='rtn']").is(':checked')) && ($("input[name='dpt']").is(':checked'))) {
			$("#book").prop("disabled", false);
		} 
		else {
			$("#book").prop("disabled", true);
		}

	});

	$('input[name="rtn"]').on('click', function() {
	  if($('input[name="rtn"]').is(':checked')) {
	  	//add selected class
			$('.rtn-column .search-item').removeClass("rtn-selected");
			$( this ).parent().addClass("rtn-selected");
			//style
			$('.rtn-column .search-item').css({"border":"1px solid #dadada", "box-shadow":"none", "background-color":"#ffffff"});
			$( this ).parent().css({"border":"1px solid #1BA0E2", "box-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.10), 0 1px 4px 0 rgba(0, 0, 0, 0.02)", "background-color":"#fbfbfb"});
	   }
		rtnPrice = $('input[name=rtn]:checked').val();
		totalPrice = (Number(dptPrice) + Number(rtnPrice)) * 2;
		$("#totalprice").html(totalPrice);
		$("#bullet-number-2").html("✓");
		$("#bullet-number-2").css("background-color", "rgba(255,255,255,.8)");
		if ($("#bullet-number-1").html() != "✓") {
			setTimeout(function(){
				$('a[href="#go-to-dpt-column"]').trigger('click');
			},500);
		}
		else {
			
		}

		if (($("input[name='rtn']").is(':checked')) && ($("input[name='dpt']").is(':checked'))) {
			$("#book").prop("disabled", false);
		} 
		else {
			$("#book").prop("disabled", true);
		}

	});

	$('a[href$="#detail"]').on('click', function() {
			$(".detail").css("display","block");
	});
});
