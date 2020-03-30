$(function() {
  ajaxcalls();
  $("#recepies").on("click", ".btn-danger", handleDelete);
  $("#recepies").on("click", ".btn-warning", handleUpdate);
  $("#addRecep").click(handleAdd);
});
function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".reac");
  //   console.log(parentDiv);
  let id = parentDiv.attr("data-ID");
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
    method: "DELETE",
    success: function() {
      ajaxcalls();
    }
  });
}
function handleUpdate() {
  var btn = $(this);
  var parentDiv = btn.closest(".reac");
  //   console.log(parentDiv);
  let id = parentDiv.attr("data-ID");
  $.get("https://usman-recipes.herokuapp.com/api/recipes/" + id, function(
    response
  ) {
    $("#updateId").val(response._id);
    $("#updateTitle").val(response.title);
    $("#updateBody").val(response.body);
  });
  $("#updateRecepie").modal("show");
  $("#saveUpdates").click(function() {
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    var body = $("#updateBody").val();
    $.ajax({
      url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
      data: { id, title, body },
      method: "put",
      success: function() {
        ajaxcalls();
        $("#updateRecepie").modal("hide");
      }
    });
  });
}
function handleAdd() {
  var title = $("#title").val();
  var body = $("#body").val();
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "POST",
    data: { title, body }, // also like data:{title:title,body:body},
    success: function(response) {
      //   console.log(response);
      ajaxcalls();
      var body = $("#addition #body");
      body.val("");
      var tii = $("#addition #title");
      tii.val("");
    }
  });
}
function ajaxcalls() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    error: function(response) {
      var spaces = $("#recepies");
      spaces.html("An Error has occured");
    },
    success: function(response) {
      var space = $("#recepies");
      space.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        $("#recepies").append(
          `<div data-Id="${rec._id}"  class="reac"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">Delete</button><button class="btn btn-warning btn-sm float-right">Edit</button>${rec.body}</p></div>`
        );
      }
    }
  });
}
