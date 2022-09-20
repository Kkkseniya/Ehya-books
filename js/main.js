$(document).ready(function () {
  //Like button animation
  var iconClick = document.querySelectorAll(".heart-icon");
  iconClick.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.toggle("animate");
    });
  });

  //Bookmark animation
  var markClick = document.querySelectorAll(".bookmark-icon");
  markClick.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.toggle("addcolor");
    });
  });

  //Slider for Slide section
  const offerSwiper = new Swiper(".swiper-slider", {
    autoHeight: false,
    loop: false,
    spaceBetween: 10,

    navigation: {
      nextEl: ".slider__button--next",
      prevEl: ".slider__button--prev",
      disabledClass: "slider__button-disable",
    },
  });

  const unreleasedSwiper = new Swiper(".unreleased-swiper", {
    autoHeight: false,
    loop: false,

    breakpoints: {
      1201: {
        spaceBetween: 30,
        slidesPerView: 5,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      577: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      310: {
        slidesPerView: 1,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".unreleased__button--next",
      prevEl: ".unreleased__button--prev",
      disabledClass: "unreleased__button-disable",
    },
  });

  //Проигрывание видео
  var player;
  var playerSmall_1;
  var playerSmall_2;
  var playerSmall_3;
  $(".video-icon").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "UJr5i7M43LU",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }

  $(".video-icon-1").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("playerSmall_1", {
      height: "100%",
      width: "100%",
      videoId: "GZ_JTsvAnP4",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".video-icon-2").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("playerSmall_2", {
      height: "100%",
      width: "100%",
      videoId: "sTtY7Wier18",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $(".video-icon-3").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("playerSmall_3", {
      height: "100%",
      width: "100%",
      videoId: "iMznVObWpyc",
      events: {
        onReady: videoPlay,
      },
    });
  });

  //Открытие меню
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-right-mobile")
      .classList.toggle("navbar-right--visible");
  });

  //Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  //Закрытие модального окна по клику за его пределами
  $(document).mouseup(function (e) {
    var modal = $(".modal__dialog");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  //Закрытие по нажатию Esc
  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  //Обработка формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите свое имя",
          minlength: "Имя должно состоять как минимум из двух букв",
        },
        email: {
          required: "*Пожалуйста, укажите свой email",
          email: "*Ваш email должен быть в формате name@domain.com",
        },
        emailModal: {
          required: "Пожалуйста, укажите свой email",
          email: "Ваш email должен быть в формате name@domain.com",
        },
        phone: {
          required: "Пожалуйста, укажите номер телефона",
          minlength: "Номер должен состоять из 11 цифр",
        },
      },
    });
  });

  //Валидация
  $("#phoneModal").mask("+7 (000) 000-00-00");

  //Ховеры
  var hoverButton = $(".hover-button");
  var hoverLink = $(".hover-link");
  var hoverImage = $(".hover-image");
  var hoverButtonWhite = $(".hover-buttonwhite");
  var hoverButtonBlue = $(".hover-buttonblue");
  var hoverBlueLink = $(".hover-bluelink");
  var hoverReg = $(".subscribe__button");
  $(window)
    .resize(function () {
      if ($(window).width() > 992) {
        hoverLink.addClass("hover-link--hover");
        hoverButton.addClass("hover-button--hover");
        hoverImage.addClass("hover-image--hover");
        hoverButtonWhite.addClass("hover-buttonwhite--hover");
        hoverButtonBlue.addClass("hover-buttonblue--hover");
        hoverBlueLink.addClass("hover-bluelink--hover");
        hoverReg.addClass("subscribe__button--hover");
      } else {
        hoverLink.removeClass("hover-link--hover");
        hoverButton.removeClass("hover-button--hover");
        hoverImage.removeClass("hover-image--hover");
        hoverButtonWhite.removeClass("hover-buttonwhite--hover");
        hoverButtonBlue.removeClass("hover-buttonblue--hover");
        hoverBlueLink.removeClass("hover-bluelink--hover");
        hoverReg.removeClass("subscribe__button--hover");
      }
    })
    .resize();
});
