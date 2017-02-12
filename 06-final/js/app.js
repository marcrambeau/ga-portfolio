jQuery(document).ready(function() {
	jQuery("#back-to-top").hide(); //hide icon initially
    var pastAbout = jQuery("#about-us").offset().top;
    jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() > pastAbout) { //scrolled past the anchor
            jQuery("#back-to-top").show(); //reached the desired point -- show div
        }
    });
    jQuery("#back-to-top, .menu > h1").each(function(){
    jQuery(this).click(function(){ 
        jQuery("html,body").animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});
});