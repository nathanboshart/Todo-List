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
            $('#victory').remove();

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
            $("#victory_image").append("<img id='victory' src='assets/great-job.webp' alt='clapping'>")
        }
        else{
            $('#victory').remove();
        }
    });

    $(document).on("click", ".remove", function(){
        $(this).parent().remove();
        localStorage.setItem("listItems", $("#list-items").html());
        $('#victory').remove();
    });


});
