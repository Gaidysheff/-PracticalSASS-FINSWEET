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
  // --------------Сопровождение бургером скроллинга-----------------

  setInterval(() => {
    if (
      $(window).scrollTop() > 0 &&
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  }, 0);
  // ------------ Выкат/Закат Бургера и Overlay---------------------

  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
  });

  // ----------------------- Плавный скроллинг --------------------------------

  $(".header__nav-list a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 20;
    //анимируем переход на расстояние - top за 800 мс
    $("body,html").animate({ scrollTop: top }, 800);
  });
});
