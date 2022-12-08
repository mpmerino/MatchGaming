$(document).ready(function () {
  $("#likedGamesList").on("submit", ".removeBtnForm", function (event) {
    var liked = $(this).children(".removeInput").val();
    $.ajax({
      type: "POST",
      url: "actionRemove.php",
      data: { liked: liked },
    }).done(function (data) {
      console.log(data);
    });
    event.preventDefault();
    $(this).parent("li").remove();
  });
});
