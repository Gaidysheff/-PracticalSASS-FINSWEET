$(function () {
  $(".rateYo").rateYo({
    onChange: function (rating, rateYoInstance) {
      $(this).next().text(rating);
    },
  });
});
