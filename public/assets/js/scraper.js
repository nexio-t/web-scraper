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


    $(document).ajaxStop(function(){
        window.location.reload();
    });





});