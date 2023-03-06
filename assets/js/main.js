$(function () {
  $(".rateYo").rateYo({
    onChange: function (rating, rateYoInstance) {
      $(this).next().text(rating);
    },
  });

  // ----------------------- Фильтр блога -------------------------------

  var mixer = mixitup(".blog__list");

  $(".blog__filter-btn").on("click", function () {
    $(".blog__filter-btn").removeClass("blog__filter-btn--active");
    $(this).addClass("blog__filter-btn--active");
  });

  // --------------------- Слайдер мнения клиентов ----------------------

  $(".customers__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    appendDots: $(".customers__dots"),
    waitForAnimate: false,
  });
  $(".customers__prev").on("click", function (e) {
    e.preventDefault();
    $(".customers__slider").slick("slickPrev");
  });
  $(".customers__next").on("click", function (e) {
    e.preventDefault();
    $(".customers__slider").slick("slickNext");
  });
});
