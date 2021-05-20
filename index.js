$(document).ready(function () {
    // YOUR CODE HERE!

    let today = new Date();
    let fixedDate = today.getMonth()+1 + "/" + today.getDate() + "/" + today.getFullYear();
    $(".container").prepend("<h3 id='date' style='text-align: center'>" + fixedDate + "</h3>")


    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function (event) {
        event.preventDefault();

        let item = $("#todo-list-item").val();

        if (item) {
            $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "<a class='remove'>x</a><hr></li>")
            localStorage.setItem("listItems", $("#list-items").html());
            $("#todo-list-item").val("");
            takeAwayVictoryImage();

        }
    });

    $(document).on("change", ".checkbox", function(){
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked")
        } else{
            $(this).attr("checked", "checked")
        }

        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());

        if ($(this).parent().hasClass("completed")){
            $('#victory').remove();
            $("#victory_image").append("<img style='display: none' id='victory' src='assets/great-job.webp' alt='clapping'>")
            $("#victory").slideDown("slow");
        }
        else{
            takeAwayVictoryImage();
        }
    });


    $(document).on("click", ".remove", function(){
        $(this).parent().fadeOut("slow", function(){
            $(this).remove();
            console.log($("#list-items").html());
            localStorage.setItem("listItems", $("#list-items").html());
            takeAwayVictoryImage();
        });


    });

});


function takeAwayVictoryImage(){
    $('#victory').slideUp("slow", function(){
        $(this).remove();
    });
}
