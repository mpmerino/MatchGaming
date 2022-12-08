$(document).ready(function () {
  $("#likeForm").submit(function (event) {
    var liked = $("#likeInput").val();
    $.ajax({
      type: "POST",
      url: "actionLike.php",
      data: { liked: liked },
    }).done(function (data) {
      console.log(data);
    });
    event.preventDefault();
  });
});
