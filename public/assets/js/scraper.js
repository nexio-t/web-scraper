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
        location.reload(); 
    });

    // $.get("/results/scrape", function(data) {
    //     console.log(data);
    // }).then( 
    //     location.reload()
    // );



})


});