var burgerclicked = false;
jQuery(document).ready(function() {
	jQuery("#hamburger").on("click", function(e){
		e.preventDefault();
		jQuery(".navigation").slideToggle();
		 if(burgerclicked == false) {
				burgerclicked = true;
			} else{
				burgerclicked = false;
			}
	});
	jQuery(window).on("resize", function(){
	var screen = jQuery(window).width();
	if(screen > 880) {
		jQuery(".navigation").show();
	} else{
		if(burgerclicked == true){
			jQuery(".navigation").show();
		} else{
			jQuery(".navigation").hide();
		}
	}
	});
});