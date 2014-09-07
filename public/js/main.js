
(function(){
	"use strict";

	$(function(){
		$('#toggle').click(function (e){
			e.stopPropagation();
		});
		$('html').click(function (e){
			if (!$('.toggle').is($(e.target))){
				$('#toggle').prop("checked", false);
			}
		});
	});


$(window).bind("scroll",function(){if($(this).scrollTop()>100){
	$(".top-bar").removeClass("tb-large").addClass("tb-small")
}else{
	$(".top-bar").removeClass("tb-small").addClass("tb-large")
}});

$(".home-c-slider").bxSlider({
	mode:"horizontal",
	pager:false,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'});

$(".home-bg-slider").bxSlider({
	mode:"fade",
	auto:true,
	speed:1e3,
	pager:false,
	controls:false,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'});

$(".home-bgc-slider").bxSlider({
	mode:"fade",
	pager:true,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'});

$(".quote-slider").bxSlider({
	mode:"horizontal",
	controls:false,
	adaptiveHeight:true});

$(".img-slider").bxSlider({
	mode:"fade",
	pager:true,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'});

$(function(){
	var e=$(".services-slider");
	e.owlCarousel({
		pagination:false,
		navigation:false,
		items:4,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]});

	$(".serv-next").click(function(){
		e.trigger("owl.next")});

	$(".serv-prev").click(function(){
		e.trigger("owl.prev")})});

$(function(){
	var e=$(".employee-slider");

	e.owlCarousel({
		pagination:false,
		navigation:false,
		items:4,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]});


	$(".emp-next").click(function(){
		e.trigger("owl.next")});

	$(".emp-prev").click(function(){
		e.trigger("owl.prev")})});

$(function(){
	var e=$(".work-slider");e.owlCarousel({
		pagination:false,
		navigation:false,
		items:3,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]});

	$(".work-next").click(function(){
		e.trigger("owl.next")});

	$(".work-prev").click(function(){
		e.trigger("owl.prev")})});

$(".promo-control").click(function(){
	$(".footer-promo").slideToggle(500);

	if($(".footer-promo").is(":visible")){
		$("html, body").animate({
			scrollTop:$(".footer-promo").offset().top},500)}});

$(function(){
	$("#submit").click(function(){

	$.post( "/test", {
			name:$("#name").val(),
			email:$("#email").val(),
			phone:$("#phone").val(),
			subject:$("#subject").val(),
			comments:$("#comments").val(),
			verify:$("#verify").val()},
				
	   	function(data , status){
	   		alert("data: " + data + "/nStatus: " + status);
	 });
	if($("#verify").val() === '4'){
		$('div.subButton').animate({width: 'toggle'}, "slow", function(){
		$('div.subButton').replaceWith("<div id='sentMessage'>" +
    		"<div class='alert alert-success'>" +
        	"<a href='#'' class='close' data-dismiss='alert'>&times;</a>" +
        	"<strong>Success!</strong> Your message has been sent successfully." +
    	"</div>" +
		"</div>");
		$('#sentMessage').animate({width:'100%'}, "slow", function(){

		});
		});
	}

	return false})});




$(function(){
	$(".scrollto").bind("click.scrollto",function(e){
		e.preventDefault();

		var t=this.hash,
		n=$(t);
		$("html, body").stop().animate({
			scrollTop:n.offset().top-0},900,
			"swing",
			function(){
				window.location.hash=t})})});



$(document).ready(function(){
	$(".equal").children(".col").equalizeHeight();
	$(window).resize(function(){
		$(".equal").children(".col").equalizeHeight()})});


})(jQuery);