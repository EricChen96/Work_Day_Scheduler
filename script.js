$(function () {
    //Adds current day to currentDay Head
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMM Do YY"));

    var currentHourTime = parseInt(moment().format('k'));

 


    console.log(moment().format('k'));
    console.log(currentHourTime);
    console.log(typeof (currentHourTime));
})

