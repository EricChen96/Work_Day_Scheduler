$(function () {
    //Adds current day to currentDay Head
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMM Do YY"));

    var currentHourTime = parseInt(moment().format('k'));

    //Change color
    for (var hourCount = 9; hourCount < 18; hourCount++) {
        var hourgrabEl = $("#hour-" + hourCount);
        if (hourCount < currentHourTime) {
            hourgrabEl.attr("class", "row time-block past");
        }
        else if (hourCount === currentHourTime) {
            hourgrabEl.attr("class", "row time-block present");
        }
        else {
            hourgrabEl.attr("class", "row time-block future");                                                       
        }
    };

    //Saving description
    var descriptionArray = {};
    $(".saveBtn").on("click", function () {
        var tempString = $(this.previousElementSibling).val();
        var hourTemp = $(this).val();
        descriptionArray[hourTemp] = tempString;
        localStorage.setItem("description", JSON.stringify(descriptionArray));
        // console.log(descriptionArray[17]);
    });

    function displaySavedDescriptions() {
        for(var hourCount = 9; hourCount < 18; hourCount++) {
            if(descriptionArray[hourCount] !== undefined) {
                // $(this.previousElementSibling).text(descriptionArray[hourCount]);
                var hourgrabEl = $("#hour-" + hourCount);
                console.log(descriptionArray[hourCount]);
                hourgrabEl.$("textarea").val(descriptionArray[hourCount]);
            }
        }
    }

    function init() {
        var storedDescriptions = JSON.parse(localStorage.getItem("description"));
        if (storedDescriptions !== null) {
            descriptionArray = storedDescriptions;
        }
        displaySavedDescriptions();
    };

    init();
})

