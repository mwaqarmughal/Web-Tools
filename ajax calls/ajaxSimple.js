$(function() {
  $("#Load").click(dataHandle);
});
function dataHandle() {
  $.get("MyData.txt", function(response) {
    $("#data").empty();
    $("#data").append(response);
  });
}
