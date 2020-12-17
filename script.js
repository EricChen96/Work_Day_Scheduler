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
    }




    console.log(moment().format('k'));
    console.log(currentHourTime);
    console.log(typeof (currentHourTime));
})

