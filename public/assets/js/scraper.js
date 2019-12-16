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

// Delete event  

$(document).on("click", ".removeRaceBtn", function(e) {
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

});


// add ID to modal 

$(document).on("click", ".addComment", function(e) {

    e.preventDefault();
    // grab ID 
    let raceId = $(this).attr("data-id");
    console.log(raceId);

    $(".saveNoteBtn").attr("data-id", raceId);

})



$(document).on("click", ".saveNoteBtn", function(e) {
    e.preventDefault(); 

    console.log("this worked");

    let raceId = $(this).attr("data-id");
    let noteArea = $("#noteTextArea").val().trim(); 

    console.log(noteArea);
    console.log(raceId);

    // $.ajax({
    //     url: "/note/" + raceId,
    //     type: "POST",
    //     data: {
    //         noteText: noteArea
    //     }
    // }).then(function() {

    //     console.log("save note worked");

    // }); 

    
    // in your dot then, include a clear the text area 
 
})




});