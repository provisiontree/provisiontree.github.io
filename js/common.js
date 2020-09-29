// JavaScript Document
jQuery(document).ready(function() {
 jQuery("#myCarousel").jcarousel({
        visible: 5
    });

     $(".team_details").hide(); //Hide all content	
	$("ul.team_description li:first").addClass("current").show();
	 //Activate first tab
	$(".team_details:first").show(); //Show first tab content
	//On Click Event
	$("ul.team_description li").click(function(e) {
		$("ul.team_description li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".team_details").hide(); //Hide all tab content
		var currentTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(currentTab).show(); //Fade in the active ID content

		return false;
	});
	
	
 	$('#submit-form').click(function(){
 		
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var names 	 = $('#contact-form [name="contact-names"]').val();	 
	var company 	 = $('#contact-form [name="contact-company"]').val();
	var email_address = $('#contact-form [name="contact-email"]').val();
	var comment	 = $.trim($('#contact-form .contact-commnent').val());
	var data_html ='' ;
  
		if(names == ""){
			$('.name-required').html('Please enter your Name.');
				}else{
			$('.name-required').html('');
				}
				
		if(company == ""){
			$('.company-required').html('Please enter your Company Name.');
				}else{
			$('.company-required').html('');
				}
		if(email_address == ""){
			$('.email-required').html('Please provide a valid E-mail');
				}else if(reg.test(email_address) == false){
			$('.email-required').html('Invalid E-mail.');
				}else{
			$('.email-required').html('');
				}
		if(comment == ""){
			$('.comment-required').html('Please provide some details.');
				}else{
			$('.comment-required').html('');
				}

 		if(comment != "" && names != "" && reg.test(email_address) != false){
			data_html = "names="+ names + "&company=" + company + "&comment=" + comment + "&email_address="+ email_address;
 			
 			//alert(data_html);
		$.ajax({
			type: 'POST',
			url: 'js/contact.php',
			data: data_html,
			success: function(msg){
				if (msg == 'sent'){
					$('#success').html('Message sent!') 	;
						$('#contact-form [name="contact-names"]').val('');	 
						$('#contact-form [name="contact-company"]').val('');
						$('#contact-form [name="contact-email"]').val('');
						$('#contact-form .contact-commnent').val('');
				 			
				 			}else{
						$('#error').html('Mail Error. Please Try Again.!') 	;	
							}
					}
				});
			}
			return false;
			})
		
			
		$(window).scroll(function(){
			if($(window).scrollTop()==0){
			$('.header_hr').fadeOut();}
			else{
			$('.header_hr').fadeIn();}
		
		});
		
});


	
	