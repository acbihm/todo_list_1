
function renderToDos(list) {
    $("#to-do-list").empty();
    for (var i = 0; i < list.length; i++) {
        var toDoItem = $("<p>");
        toDoItem.text(list[i]);

        var toDoClose = $("<button>");
        toDoClose.attr("data-to-do", i);
        toDoClose.addClass("checkbox");
        toDoClose.text("x");

        toDoItem = toDoItem.prepend(toDoClose);
        $("#to-do-list").append(toDoItem);
        console.log('h')

    }
}

$("#add-to-do").on("click", function (event) {
    event.preventDefault();
    var toDoTask = $("#to-do").val().trim();
    list.push(toDoTask);
    renderToDos(list);
    localStorage.setItem("todolist", JSON.stringify(list));
    $("#to-do").val("");
});

$(document).on("click", ".checkbox", function () {
    var toDoNumber = $(this).attr("data-to-do");
    list.splice(toDoNumber, 1);
    renderToDos(list);
    localStorage.setItem("todolist", JSON.stringify(list));
});
var list = JSON.parse(localStorage.getItem("todolist"));

if (!Array.isArray(list)) {
    list = [];
}

$("#clearAll").on("click", function () {
    var ask = confirm("Are you sure you want to clear all tasks?")
    if (ask === true) {
        localStorage.clear();
        list = [];
    }
    else {
        return;
    }

})
renderToDos(list);

