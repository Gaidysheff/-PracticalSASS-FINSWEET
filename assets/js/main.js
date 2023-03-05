$(function () {
  $(".rateYo").rateYo({
    onChange: function (rating, rateYoInstance) {
      $(this).next().text(rating);
    },
  });

  // ----------------------- Фильтр блога --------------------------------

  var mixer = mixitup(".blog__list");

  $(".blog__filter-btn").on("click", function () {
    $(".blog__filter-btn").removeClass("blog__filter-btn--active");
    $(this).addClass("blog__filter-btn--active");
  });
});
