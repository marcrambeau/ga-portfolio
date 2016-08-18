jQuery(document).ready(function(){
  jQuery('header nav ul li:first-child').click(function(){
    jQuery(this).parent().toggleClass('slideDown');
  });
});