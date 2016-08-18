//load all elements before executing function
jQuery(document).ready(function() {
//prevent default action when submit button is clicked
  jQuery("#submit-btn").click(function() {
    event.preventDefault();
  	//pull value of #city-type input
    var city = jQuery("#city-type").val();
    //convert input to lowercase
    city = city.toLowerCase().trim();
    //if user enters new york city, new york, or nyc, apply class nyc to the body
    if(city == "new york city" || city == "new york" || city == "nyc") {
    	jQuery("body").attr("class","nyc");
    }
    //if user enters sf or san francisco apply class sf to the body
    else if (city == "san francisco" || city == "sf") {
    	jQuery("body").attr("class","sf");
    }
    //if user enters austin apply class austin to the body
    else if (city == "austin") {
    	jQuery("body").attr("class","austin");
    }
    //if user enters los angeles or la apply class la to the body
    else if (city == "los angeles" || city == "la") {
    	jQuery("body").attr("class","la");
    }
    //if user enters sydney apply class sydney to the body
    else if (city == "sydney") {
    	jQuery("body").attr("class","sydney");
    }
  });
});