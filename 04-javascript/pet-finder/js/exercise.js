jQuery(document).ready(function(){
    // Initial run
    selectPet(jQuery("#petType").val());
    //Update whenever a new value is picked
    jQuery("#petType").on("change",function(){
        currentPet = jQuery(this).val();
        selectPet(currentPet);
    });
});

function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    console.log(thisPetData);

    // Set the title
    jQuery(".petDisplayName").text(thisPetData["displayName"]);

    // Empty the specification data
    // jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight
    jQuery(".petsDataSize").text(thisPetData["size"]);

    jQuery(".petsDataWeight").text(thisPetData["weight"]);

    jQuery(".petsDataSpace").text(thisPetData["spaceRequired"]);

    // Add logic to add the trainability and lap size images
    if(thisPetData["trainability"] == true){
        jQuery(".petsDataTrainable").html("<img src='img/200px-Gnome-emblem-default.svg.png' class='petsDataSpecs checkmark'>");
    } else{
        jQuery(".petsDataTrainable").html("<img src='img/200px-Gnome-emblem-unreadable.svg.png' class='petsDataSpecs checkmark'>");
    }

    if(thisPetData["fitsOnLap"] == true){
        jQuery(".petsDataLap").html("<img src='img/200px-Gnome-emblem-default.svg.png' class='petsDataSpecs checkmark'>");
    } else{
        jQuery(".petsDataLap").html("<img src='img/200px-Gnome-emblem-unreadable.svg.png' class='petsDataSpecs checkmark'>");
    }

    // Add the foods (may require loop)
    var food = "";
    for(f=0;f<thisPetData["foods"].length;f++){
        food = food+"<li>"+thisPetData["foods"][f]+"</li>";
    }
    jQuery(".petsDataFoods").html("<ul>"+food+"</ul>");

    // Update the images

        // Set the main image
        jQuery(".photoHaus .photoLarge").attr("src",thisPetData.images[0].img);
        jQuery(".photoHaus .photoLarge").attr("alt",thisPetData.images[0].alt);

        // Empty the thumbnails

        // Add the thumbnails

        var adoptionGroupsList = "";
        for(f=0;f<thisPetData["images"].length;f++){
            adoptionGroupsList = adoptionGroupsList+"<li><a target='_blank' href='"+thisPetData["images"][f]["url"]+"'>"+thisPetData["adoption"][f]["name"]+"</a></li>";
        }
        jQuery(".adoptionGroups").html("<ul>"+adoptionGroupsList+"</ul>");


        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for
    jQuery(".idealFor").empty();

    // Insert the ideal for
    var idealForList = "";
    for(f=0;f<thisPetData["idealOwner"].length;f++){
        idealForList = idealForList+"<li>"+thisPetData["idealOwner"][f]+"</li>";
    }
    jQuery(".idealFor").html("<ul>"+idealForList+"</ul>");

    // Empty the Adoption Groups
    jQuery(".adoptionGroups").empty();

    // Add the adoption groups
    var adoptionGroupsList = "";
    for(f=0;f<thisPetData["adoption"].length;f++){
        adoptionGroupsList = adoptionGroupsList+"<li><a target='_blank' href='"+thisPetData["adoption"][f]["url"]+"'>"+thisPetData["adoption"][f]["name"]+"</a></li>";
    }
    jQuery(".adoptionGroups").html("<ul>"+adoptionGroupsList+"</ul>");

}// end selectPet


