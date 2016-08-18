jQuery(document).ready(function(){

    jQuery(".breedContainer .toggler").on("click",function(){
        jQuery(this).parent().toggleClass("breedContainerLG");
        if(jQuery(this).attr("src") == "img/240px-Gnome-window-close.svg.png"){
            jQuery(this).attr("src","img/48px-Gnome-list-add.svg.png");
        }else{
            jQuery(this).attr("src","img/240px-Gnome-window-close.svg.png")
        }
    });

    jQuery("#breedType").on("change",function(){
        var showType = jQuery(this).val();

        // For each article tag in the class breedsOuterContainer
        jQuery(".breedsOuterContainer").children("article").each(function(index,value){

            // Check to see if we are showing all and/or the article has the desired class
            if(jQuery(this).hasClass(showType) || showType == "all"){
                // Article has the class
                jQuery(this).show();
            }else{
                // Article does NOT have the class
                jQuery(this).hide();
            }
        });
    });   
});