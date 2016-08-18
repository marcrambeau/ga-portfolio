// Assign the city variable as an array of the city names
var cities = ["ATX", "LA", "NYC", "SF", "SYD"];
// Set function to fire when the document is ready 
jQuery(document).ready(function() {
	// Create a loop that, for the #city-type dropdown, appends the current city name as a value to <option>
	for(var i = 0; i < cities.length; i++) {
		jQuery("#city-type").append("<option value='" + cities[i] + "'>" + cities[i] + "</option>");
	}
	// When user changes the input, update the background image based on the city selected
	jQuery("form").on("change", "#city-type", function() {
		var city = jQuery("#city-type").val();
		if(city == "ATX") {
			jQuery("body").attr("class", "atx");
		} else if(city == "LA") {
			jQuery("body").attr("class", "la");
		} else if(city == "NYC") {
			jQuery("body").attr("class", "nyc");
		} else if(city == "SF") {
			jQuery("body").attr("class", "sf");
		} else if(city == "SYD") {
			jQuery("body").attr("class", "syd");
		}
	});
});