$( document ).ready(function() {
    console.log( "ready!" );

$(document).on("click", ".newRacesBtn", function(e) {

    e.preventDefault(); 

    console.log("scrape new races works");

    $.ajax({
        type: "GET",
        url: "/results/scrape",
        success: function(data) {
            console.log(data);
        }
    }).then(function() {
        console.log("delete callback promise working");
        location.reload(); 
    });

    // $.get("/results/scrape", function(data) {
    //     console.log(data);
    // }).then( 
    //     location.reload()
    // );

});

$(document).on("click", ".removeRacesBtn", function(e) {

    e.preventDefault(); 

    console.log("remove races works");

    $.ajax({
        type: "DELETE",
        url: "/results/scrape",
        success: function(data) {
            console.log(data);
        }
    }).then(function() {
       console.log("delete callback promise working");
       location.reload(); 
    });

});

// Create on click event to update the data attribute 

$(document).on("click", ".saveBtn", function(e) {
    e.preventDefault(); 

    let raceId = $(this).attr("data-id"); 

    console.log(raceId);

    $.ajax({
        type: "PUT", 
        url: "/results/scrape/" + raceId, 
        data: {saved: true}
    }).then(function() {
        console.log("udpated  to saved");
        location.reload(); 
    });

})

// Unsave event  

$(document).on("click", ".unSaveBtn", function(e) {
    e.preventDefault(); 

    let raceId = $(this).attr("data-id"); 

    console.log(raceId);

    $.ajax({
        type: "PUT", 
        url: "/results/scrape/" + raceId, 
        data: {saved: false}
    }).then(function() {
        console.log("udpated to saved false");
        location.reload(); 
    });

})



});