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
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],

  });
  $(".customers__prev").on("click", function (e) {
    e.preventDefault();
    $(".customers__slider").slick("slickPrev");
  });
  $(".customers__next").on("click", function (e) {
    e.preventDefault();
    $(".customers__slider").slick("slickNext");
  });

  // --------------------- FAQ Аккордион ----------------------
  // ------- многооконный --------------
  // $(".faq__accordeon-link").on("click", function (e) {
  //   e.preventDefault();
  //   $(this).toggleClass("faq__accordeon-link--active");
  //   $(this).children(".faq__accordeon-text").slideToggle();
  // });

  // ------- однооконный --------------
  $(".faq__accordeon-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("faq__accordeon-link--active")) {
      $(this).removeClass("faq__accordeon-link--active");
      $(this).children(".faq__accordeon-text").slideUp();
    } else {
      $(".faq__accordeon-link").removeClass("faq__accordeon-link--active");
      $(".faq__accordeon-text").slideUp();
      $(this).addClass("faq__accordeon-link--active");
      $(this).children(".faq__accordeon-text").slideDown();
    }
  });
});
