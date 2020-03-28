$(function() {
  $("#addTodo").click(addHandle);
  //   $("#todoli").on("click", "li", removeLi);
  $("#todoli").on("click", "li", removeLi);
});
function addHandle() {
  var item = $("#todos").val();
  if (!item) {
    $(todos).addClass("error");
    return;
  }
  $("#todos").removeClass("error");
  $("#todoli").append("<li>" + item + "</li>");
  $("#todos").val("");
}

function removeLi() {
  $(this).fadeOut(500, function() {
    $(this).remove();
  });
}
