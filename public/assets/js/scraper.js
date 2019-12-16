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

    $(".appendNoteArea").empty();

    $(".saveNoteBtn").attr("data-id", raceId);

    $.ajax({
        type: "GET",
        url: "/results/scrape/" + raceId,
        success: function(data) {
            // console.log(data);
        }
    }).then(function(data) {

        console.log("note get working");
        // location.reload(); s

        // console.log("Data is: " + JSON.stringify(data.notes));
        console.log(data);

        for (let i = 0; i < data.notes.length; i++) {
           
            // console.log("------");
            // console.log(data.notes[i].note); 
            // console.log(data.notes[i]._id);

            let noteText = data.notes[i].note;
            let noteId = data.notes[i]._id;

            let newCard = $("<div class=wrapperDiv>");
            let noteBody = $("<p class=note-text>"); 
            let deleteBtn = $("<button class='btn btn-primary deleteNoteBtn'>");

            noteBody.text(noteText);
            deleteBtn.attr("note-Id", noteId); 
            deleteBtn.text("Delete");

            newCard.append(deleteBtn);
            newCard.append(noteBody);
            $(".appendNoteArea").append(newCard);
        }


    });

})

// DELETE A NOTE 

$(document).on("click", ".deleteNoteBtn", function(e) {
    e.preventDefault(); 

    console.log("Registers");

    let noteId = $(".deleteNoteBtn").attr("note-id"); 

    let raceId = $(".saveNoteBtn").attr("data-id"); // something ; 

    console.log(noteId);
    console.log(raceId);

    $.ajax({
        type: "DELETE",
        url: "/results/note/" + noteId,
        success: function(data) {
            console.log(data);
        },
        data: {raceId: raceId}
    }).then(function() {
       console.log("delete note working");
       location.reload(); 
    });

})



$(document).on("click", ".saveNoteBtn", function(e) {
    e.preventDefault(); 

    console.log("this worked");

    let raceId = $(this).attr("data-id");
    let noteArea = $("#noteTextArea").val().trim(); 

    console.log("Note area is: ", noteArea);
    console.log("race id is: ", raceId);

    $.ajax({
        url: "/results/note/" + raceId,
        type: "POST",
        data: {
            note: noteArea
        }
    }).then(function() {

        console.log("save note worked");
        location.reload(); 

    }); 

    
    // in your dot then, include a clear the text area 
 
});


/*************TO DOS****************/
// 1. run a get to read the notes (and append them via handlebars to the note)
    // add a quick image 
    // add some media queries to handle card sizes 
    // improve layout of cards 
    // add geocoder and ability to map cities 
    // add something to prevent duplicate submissions 
// 2. update the README 
// 3. deploy to Heroku




});