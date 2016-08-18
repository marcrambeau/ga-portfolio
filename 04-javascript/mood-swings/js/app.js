// Create a function that runs whenever the submit button is clicked
function iHaveBeenClicked(event) {
    
    //prevent the submit button from refreshing the page
    event.preventDefault();

    //Create a variable called moodvalue and get the value of the #mood input
    var moodValue = jQuery("#mood").val();
    jQuery("#mood").val("");

    //Correct for capitalization
    moodValue = moodValue.toLowerCase().trim();

    // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
    if (moodValue == "ecstatic" || moodValue == "excited" || moodValue == "fantastic") {
    jQuery(".moodring div").attr("class", "excited");
    }

    // if the user inputs happy/good/great change the CSS class to 'happy'
    if (moodValue == "happy" || moodValue == "good" || moodValue == "great") {
    jQuery(".moodring div").attr("class", "happy");
    }

    // if the user inputs bad/angry change the CSS class to 'bad'
    if (moodValue == "bad" || moodValue == "angry") {
    jQuery(".moodring div").attr("class", "bad");
    }
}

//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

// Listen for user interaction on the submit button.
jQuery("#submit-btn").click(iHaveBeenClicked);

});

