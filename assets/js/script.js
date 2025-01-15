// window scroll

$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

//Document ready
$(document).ready(function () {
  //typing animation
  new Typed("#type-it", {
    strings: ["Web Designer", "Front-End Developer", "UI/UX Designer"],
    typeSpeed: 150,
    loop: true,
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });
});

//AOS
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
