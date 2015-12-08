$(document).ready(function(){
	$("#aboutme").toggle(
	    function(){$("#profile").css({"display": "block"});},
	    function(){$("#profile").css({"display": "none"});}
	    );
});
$(document).ready(function(){
	$("#htmltile").toggle(
		function(){$("#htmltile").css({"background-color": "#9E9E9E"});
		$("#htmlarticle").css({"display": "block"});},
		function(){$("#htmltile").css({"background-color": "#00BCD4"});
		$("#htmlarticle").css({"display": "none"})}
	    );
});
$(document).ready(function(){
	$("#csstile").toggle(
		function(){$("#csstile").css({"background-color": "#9E9E9E"});
		$("#cssarticle").css({"display": "block"});},
		function(){$("#csstile").css({"background-color": "#00BCD4"});
		$("#cssarticle").css({"display": "none"})}
	    );
});
$(document).ready(function(){
	$("#webtile").toggle(
		function(){$("#webtile").css({"background-color": "#9E9E9E"});
		$("#webarticle").css({"display": "block"});},
		function(){$("#webtile").css({"background-color": "#00BCD4"});
		$("#webarticle").css({"display": "none"})}
	    );
});