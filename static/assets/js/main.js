"use strict";

/************************************** Preloader /**************************************/
$(window).on("load", function () {
  $(".preloader").delay(800).fadeOut("slow");
  $(".vs-hero").addClass("animate-elements");

  // Check if preloader exists and handle close event
  $(".preloader").length &&
    $(".preloaderCls").on("click", function (e) {
      e.preventDefault();
      $(".preloader").hide();
    });
});

function setBackgroundImages() {
  var elements = document.querySelectorAll("[data-bg-src]");
  if (elements?.length > 0) {
    elements.forEach(function (element) {
      var src = element.getAttribute("data-bg-src");
      element.style.backgroundImage = "url(" + src + ")";
      element.classList.add("background-image");
      element.removeAttribute("data-bg-src");
    });
  }
}
function odometerCounter() {
  $(".counter-item").each(function () {
    var $counterItem = $(this);
    $counterItem.isInViewport(function (status) {
      if (status === "entered") {
        $counterItem.find(".odometer").each(function () {
          var el = this;
          el.innerHTML = el.getAttribute("data-odometer-final");
        });
      }
    });
  });
}

const quoteSliderOptions = {
  loop: true,
  // direction: "horizontal",
  // effect: "flip",
  // fadeEffect: { crossFade: true },
  // effect: "fade",
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".quote__pagination",
    clickable: true,
  },
  speed: 1000,
};

// const heroOneSliderOptions = {
//   loop: true,
//   speed: 3000,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
//   effect: "slide",
//   navigation: false,
//   slidesPerView: "auto",
//   spaceBetween: 20,
//   breakpoints: {
//     1200: {
//       spaceBetween: 40,
//     },
//   },
// };

const testimonialSliderOptions = {
  loop: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".testimonial__pagination",
    clickable: true,
  },
  speed: 1000,
};
const testimonial2SliderOptions = {
  loop: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".testimonial2__navigation .testimonial2-next",
    prevEl: ".testimonial2__navigation .testimonial2-prev",
  },
  speed: 1000,

  on: {
    slideChange: function () {
      const isNext = this.activeIndex > this.previousIndex;
      initTestimonialNavActiveToggle(isNext ? "right" : "left");
    },
  },
};

const HeroTwoSliderOptions = {
  loop: true,
  speed: 500,
  spaceBetween: 100,

  keyboard: {
    enabled: true,
  },
};
const pricing2SliderOptions = {
  loop: true,
  speed: 2000,
  spaceBetween: 23,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 1.5,
    },
    1200: {
      slidesPerView: 2,
    },
    1700: {
      slidesPerView: 2.5,
    },
  },
};

// Function to initialize active class toggle based on direction
function initTestimonialNavActiveToggle(direction = "right") {
  const nextBtn = document.querySelector(
    ".testimonial2__navigation .testimonial2-next"
  );
  const prevBtn = document.querySelector(
    ".testimonial2__navigation .testimonial2-prev"
  );

  if (!nextBtn || !prevBtn) return;

  const setActiveNav = (direction) => {
    nextBtn.classList.toggle("active", direction === "right");
    prevBtn.classList.toggle("active", direction === "left");
  };

  // Set active class on initial load (based on direction)
  setActiveNav(direction);

  // Add event listeners for button clicks and update the active class
  nextBtn.addEventListener("click", () => setActiveNav("right"));
  prevBtn.addEventListener("click", () => setActiveNav("left"));
}

// function initializeSwiper(containerSelector, options) {
//   // Check if the container exists
//   const container = document.querySelector(containerSelector);
//   if (!container) {
//     return;
//   }

//   if (options.pagination) {
//     options.pagination = {
//       el:
//         options.pagination === true
//           ? `${containerSelector} .swiper-pagination`
//           : options.pagination.el,
//       clickable: true,
//     };

//     const paginationEl = document.querySelector(options.pagination.el);
//     if (!paginationEl) {
//       console.error("Pagination element not found");
//       return;
//     }
//   } else {
//     delete options.pagination;
//   }

//   if (options.navigation) {
//     options.navigation = {
//       nextEl:
//         options.navigation === true
//           ? `${containerSelector} .swiper-button-next`
//           : options.navigation.nextEl,
//       prevEl:
//         options.navigation === true
//           ? `${containerSelector} .swiper-button-prev`
//           : options.navigation.prevEl,
//     };
//   } else {
//     delete options.navigation;
//   }
//   // return new Swiper(containerSelector, options);

//   const swiper = new Swiper(containerSelector, options);

//   // Access the wrapper directly from swiper instance
//   const wrapper = swiper.wrapperEl;

//   let duration;
//   let distanceRatio;
//   let startTimer;

//   // stop autoplay
//   const stopAutoplay = () => {
//     if (startTimer) clearTimeout(startTimer);

//     // Stop the slide at the current translate.
//     swiper.setTranslate(swiper.getTranslate());

//     // Calculate the distance between current slide and next slide
//     const currentSlideWidth = swiper.slides[swiper.activeIndex].offsetWidth;
//     distanceRatio = Math.abs(
//       (currentSlideWidth * swiper.activeIndex + swiper.getTranslate()) /
//         currentSlideWidth
//     );

//     duration = swiper.params.speed * distanceRatio;
//     swiper.autoplay.stop();
//   };

//   const startAutoplay = () => {
//     swiper.autoplay.start();

//     if (wrapper && !wrapper.classList.contains("linear")) {
//       wrapper.classList.add("linear");
//     }
//   };

//   if (options.autoplay) {
//     container.addEventListener("mouseenter", () => {
//       stopAutoplay();

//       swiper.slideTo(swiper.activeIndex, 0);

//       if (wrapper && wrapper.classList.contains("linear")) {
//         wrapper.classList.remove("linear");
//       }
//     });

//     container.addEventListener("mouseleave", () => {
//       startAutoplay();
//     });
//   }

//   return swiper;
// }

function initializeSwiper(containerSelector, options) {
  // Check if the container exists
  const container = document.querySelector(containerSelector);
  if (!container) {
    return;
  }

  if (options.pagination) {
    options.pagination = {
      el:
        options.pagination === true
          ? `${containerSelector} .swiper-pagination`
          : options.pagination.el,
      clickable: true,
    };

    const paginationEl = document.querySelector(options.pagination.el);
    if (!paginationEl) {
      console.error("Pagination element not found");
      return;
    }
  } else {
    delete options.pagination;
  }

  if (options.navigation) {
    options.navigation = {
      nextEl:
        options.navigation === true
          ? `${containerSelector} .swiper-button-next`
          : options.navigation.nextEl,
      prevEl:
        options.navigation === true
          ? `${containerSelector} .swiper-button-prev`
          : options.navigation.prevEl,
    };
  } else {
    delete options.navigation;
  }

  const swiper = new Swiper(containerSelector, options);

  // Access the wrapper directly from swiper instance
  const wrapper = swiper.wrapperEl;
  if (wrapper) {
    wrapper.classList.add("linear");
  }

  // Force immediate stop
  const forceStop = () => {
    const currentTranslate = swiper.getTranslate();
    swiper.setTranslate(currentTranslate);
    swiper.autoplay.stop();
    wrapper.classList.remove("linear");
  };

  // Force immediate resume with proper transition
  const forceResume = () => {
    wrapper.classList.add("linear");
    swiper.slideTo(swiper.activeIndex, options?.speed || 3000, false);
    swiper.autoplay.start();
    console.log(options.speed);
  };

  if (options.autoplay) {
    container.addEventListener("mouseenter", () => {
      forceStop();
    });

    container.addEventListener("mouseleave", () => {
      forceResume();
    });
    container.addEventListener("touchStart", () => {
      forceStop();
    });

    container.addEventListener("touchEnd", () => {
      forceResume();
    });
    container.addEventListener("dragStart", () => {
      forceStop();
    });

    container.addEventListener("dragEnd", () => {
      forceResume();
    });
  }

  return swiper;
}

function setHoverActiveClass(
  listenerSelector,
  targetSelector,
  activeClass = "active"
) {
  if (
    typeof listenerSelector !== "string" ||
    typeof targetSelector !== "string"
  ) {
    return;
  }

  const listeners = document.querySelectorAll(listenerSelector);

  if (listeners.length === 0) {
    return;
  }

  let currentActiveItem = listeners[0].querySelector(targetSelector); // Initially set the first target as active
  if (!currentActiveItem) {
    currentActiveItem = listeners[0]; // If targetSelector doesn't exist, apply active class on the listener itself
  }
  currentActiveItem.classList.add(activeClass); // Add active class to the first target initially

  listeners.forEach((listener) => {
    const targetElement = listener.querySelector(targetSelector) || listener; // If target doesn't exist, use listener itself

    listener.addEventListener("mouseenter", function () {
      // If there's a previously active item and it's not the current one, remove its 'active' class
      if (currentActiveItem && currentActiveItem !== targetElement) {
        currentActiveItem.classList.remove(activeClass);
      }

      // Add the 'active' class to the current hovered target element
      targetElement.classList.add(activeClass);

      // Update the currentActiveItem to the newly hovered target element
      currentActiveItem = targetElement;
    });

    // Optionally: Do nothing on mouseleave (or you can choose to remove the active class)
    listener.addEventListener("mouseleave", function () {
      // Keep the active class on the last hovered item
      // (no need to remove it on mouseleave if you want it to stay active until another hover happens)
    });
  });
}

function initMagnificPopup() {
  // Verify jQuery and Magnific Popup are loaded
  if (typeof jQuery === "undefined") {
    return;
  }

  if (typeof $.fn.magnificPopup === "undefined") {
    return;
  }

  // Initialize Magnific Popup
  $(".thumb-info").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    });
  });
  $(".portfolio-box").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [1, 2],
      },
    });
  });

  $(".service2-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
}

function updateSkills() {
  const skillCounts = document.querySelectorAll(".skill-box .skill-count");

  skillCounts.forEach((countEl) => {
    const count = countEl.getAttribute("data-skill-count");

    if (count) {
      // Set text content
      countEl.textContent = `${count}%`;

      // Set width of skill-progress
      const progressEl = countEl.closest(".skill-progress");
      if (progressEl) {
        progressEl.style.width = `${count}%`;
      }
    }
  });
}

const initMasonryFilter = () => {
  if (typeof imagesLoaded !== "function") {
    return;
  }
  if (typeof Isotope === "undefined") {
    return;
  }

  const gridElem = document.querySelector(".work-masonry__items");
  if (!gridElem) {
    return;
  }

  imagesLoaded(gridElem, function () {
    const iso = new Isotope(gridElem, {
      itemSelector: ".masonry-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".masonry-item",
      },
    });

    const filterContainer = document.querySelector(".masonry-active");
    if (filterContainer) {
      filterContainer.addEventListener("click", function (e) {
        if (e.target && e.target.tagName === "BUTTON") {
          const filterValue = e.target.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        }
      });
    }

    const filterButtons = document.querySelectorAll(
      ".work-masonry__filter button"
    );
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        if (!this.classList.contains("active")) {
          const activeButton = this.parentElement.querySelector(".active");
          if (activeButton) activeButton.classList.remove("active");
          this.classList.add("active");
        }
      });
    });
  });
};

function popupSearchBox(
  searchBoxSelector,
  searchOpenSelector,
  searchCloseSelector,
  toggleClass
) {
  const searchBox = document.querySelector(searchBoxSelector);
  const searchOpen = document.querySelector(searchOpenSelector);
  const searchClose = document.querySelector(searchCloseSelector);

  if (!searchBox || !searchOpen || !searchClose) {
    console.warn("popupSearchBox: One or more elements not found.");
    return;
  }

  searchOpen.addEventListener("click", function (e) {
    e.preventDefault();
    searchBox.classList.add(toggleClass);
  });

  searchBox.addEventListener("click", function (e) {
    e.stopPropagation();
    searchBox.classList.remove(toggleClass);
  });

  const form = searchBox.querySelector("form");
  if (form) {
    form.addEventListener("click", function (e) {
      e.stopPropagation();
      searchBox.classList.add(toggleClass);
    });
  }

  searchClose.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    searchBox.classList.remove(toggleClass);
  });
}

/**************************************
 ***** Data Navbar Stick *****
 **************************************/
function pinned_header() {
  const scrollThreshold = 100;
  const navbar = document.querySelector("#navbars");

  if (navbar) {
    $(window).on("scroll", function () {
      const currentScrollTop = $(this).scrollTop();

      if (currentScrollTop > scrollThreshold) {
        $(navbar).addClass("sticky-active");
      } else {
        $(navbar).removeClass("sticky-active");
      }
    });
  }
}

$.fn.vsmobilemenu = function (options) {
  var opt = $.extend(
    {
      menuToggleBtn: ".vs-menu-toggle",
      bodyToggleClass: "vs-body-visible",
      subMenuClass: "vs-submenu",
      subMenuParent: "vs-item-has-children",
      subMenuParentToggle: "vs-active",
      meanExpandClass: "vs-mean-expand",
      appendElement: '<span class="vs-mean-expand"></span>',
      subMenuToggleClass: "vs-open",
      toggleSpeed: 400,
    },
    options
  );

  return this.each(function () {
    var menu = $(this); // Select menu

    // Menu Show & Hide
    function menuToggle() {
      menu.toggleClass(opt.bodyToggleClass);

      // collapse submenu on menu hide or show
      var subMenu = "." + opt.subMenuClass;
      $(subMenu).each(function () {
        if ($(this).hasClass(opt.subMenuToggleClass)) {
          $(this).removeClass(opt.subMenuToggleClass);
          $(this).css("display", "none");
          $(this).parent().removeClass(opt.subMenuParentToggle);
        }
      });
    }

    // Class Set Up for every submenu
    menu.find("li").each(function () {
      var submenu = $(this).find("ul");
      submenu.addClass(opt.subMenuClass);
      submenu.css("display", "none");
      submenu.parent().addClass(opt.subMenuParent);
      submenu.prev("a").append(opt.appendElement);
      submenu.next("a").append(opt.appendElement);
    });

    // Toggle Submenu
    function toggleDropDown($element) {
      if ($($element).next("ul").length > 0) {
        $($element).parent().toggleClass(opt.subMenuParentToggle);
        $($element).next("ul").slideToggle(opt.toggleSpeed);
        $($element).next("ul").toggleClass(opt.subMenuToggleClass);
      } else if ($($element).prev("ul").length > 0) {
        $($element).parent().toggleClass(opt.subMenuParentToggle);
        $($element).prev("ul").slideToggle(opt.toggleSpeed);
        $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
      }
    }

    // Submenu toggle Button
    var expandToggler = "." + opt.meanExpandClass;
    $(expandToggler).each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        toggleDropDown($(this).parent());
      });
    });

    // Menu Show & Hide On Toggle Btn click
    $(opt.menuToggleBtn).each(function () {
      $(this).on("click", function () {
        menuToggle();
      });
    });

    // Hide Menu On out side click
    menu.on("click", function (e) {
      e.stopPropagation();
      menuToggle();
    });

    // Stop Hide full menu on menu click
    menu.find("div").on("click", function (e) {
      e.stopPropagation();
    });
  });
};

function initMagnificPopups(
  selector = ".popup-youtube, .popup-vimeo, .popup-gmaps, .video__player-play-btn"
) {
  $(selector).magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
}

function initObryPlayers() {
  const players = document.querySelectorAll(".obry-player");

  players.forEach((player) => {
    const audio = player.querySelector("audio");
    if (!audio) return;

    const playBtn = player.querySelector(".play, .play-btn");
    const currentTimeEl = player.querySelector(".music-length span");
    const totalTimeEl = player.querySelector(".music-duration span");
    const progressBar = player.querySelector(".music-progress");
    const volumeBtn = player.querySelector(".music-velum");
    const volumeTrack = player.querySelector(".voluom-track");
    const volumeProgress = player.querySelector(".voluom-progress");
    const musicTrack = player.querySelector(".music-track");

    const formatTime = (time) => {
      const min = String(Math.floor(time / 60)).padStart(2, "0");
      const sec = String(Math.floor(time % 60)).padStart(2, "0");
      return `${min}:${sec}`;
    };

    // ⏱ Total time display
    audio.addEventListener("loadedmetadata", () => {
      if (totalTimeEl) {
        totalTimeEl.textContent = formatTime(audio.duration);
      }
    });

    // ⏱ Update progress and current time
    audio.addEventListener("timeupdate", () => {
      if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
      }
      if (progressBar && audio.duration) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    });

    // ▶️ Play/Pause button
    playBtn?.addEventListener("click", () => {
      players.forEach((p) => {
        const a = p.querySelector("audio");
        const btn = p.querySelector(".play, .play-btn");

        if (a && a !== audio) {
          a.pause();
          btn?.classList.remove("now-play");
          btn?.classList.add("now-pause");
        }
      });

      if (audio.paused) {
        audio.play();
        playBtn.classList.add("now-play");
        playBtn.classList.remove("now-pause");
      } else {
        audio.pause();
        playBtn.classList.add("now-pause");
        playBtn.classList.remove("now-play");
      }
    });

    // 🔇 Mute/Unmute button
    volumeBtn?.addEventListener("click", () => {
      audio.muted = !audio.muted;
      volumeBtn.classList.toggle("muted", audio.muted);
    });

    // 🔊 Volume adjustment with drag
    let isDragging = false;

    const updateVolume = (e) => {
      const rect = volumeTrack.getBoundingClientRect();
      let volume = (e.clientX - rect.left) / rect.width;
      volume = Math.max(0, Math.min(1, volume)); // clamp between 0 and 1
      audio.volume = volume;
      if (volumeProgress) {
        volumeProgress.style.width = `${volume * 100}%`;
      }
    };

    volumeTrack?.addEventListener("mousedown", (e) => {
      isDragging = true;
      updateVolume(e);
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        updateVolume(e);
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // ⏩ Seek on music track click
    musicTrack?.addEventListener("click", (e) => {
      const rect = musicTrack.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      audio.currentTime = position * audio.duration;

      if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
      }

      if (progressBar && audio.duration) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    });
  });
}

function initHeroTwoSlider() {
  const slider = document.querySelector(".hero-two__slider");

  if (!slider) return;

  const slides = slider.querySelectorAll(".swiper-slide");
  if (!slides.length) return;

  slides.forEach((slide) => {
    const images = slide.querySelectorAll(".slide-image");
    if (images.length >= 2) {
      images.forEach((img) => img.classList.remove("active"));
      images[1].classList.add("active");
    }
  });

  const slideImages = slider.querySelectorAll(".slide-image");
  if (!slideImages.length) return;

  slideImages.forEach((image) => {
    image.addEventListener("click", function () {
      const slideContainer = this.closest(".slide-container");
      if (!slideContainer) return;

      const imagesInSlide = slideContainer.querySelectorAll(".slide-image");
      if (!imagesInSlide.length) return;

      imagesInSlide.forEach((img) => img.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function initDragButton() {
  const dragButton = document.querySelector(".hero-two__drag-button");
  const swiperElement = document.querySelector(".hero-two__slider");
  if (!swiperElement && !dragButton) {
    return;
  }
  let isHovering = false;

  gsap.set(dragButton, { opacity: 0 });

  function handleMouseEnter(e) {
    isHovering = true;
    gsap.to(dragButton, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    updateButtonPosition(e);
  }

  function handleMouseLeave() {
    isHovering = false;
    gsap.to(dragButton, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }

  function updateButtonPosition(e) {
    if (!isHovering) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(dragButton, {
      left: mouseX,
      top: mouseY,
      duration: 0.1,
      ease: "none",
    });
  }

  function handleClick() {
    gsap.to(dragButton, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  }

  swiperElement.addEventListener("mouseenter", handleMouseEnter);
  swiperElement.addEventListener("mouseleave", handleMouseLeave);
  swiperElement.addEventListener("mousemove", updateButtonPosition);
  swiperElement.addEventListener("click", handleClick);
}

// const horizontalScroll = () => {
//   ScrollTrigger.matchMedia({
//     // Only run when screen is 992px and above
//     "(min-width: 992px)": function () {
//       const races = document.querySelector(".pricing-box2-wrapper");

//       function getScrollAmount() {
//         if (!races) return;
//         let racesWidth = races.scrollWidth;
//         let containerWidth = window.innerWidth;
//         let offsetLeft = races.getBoundingClientRect().left;
//         const extraPadding = 15;
//         return -(racesWidth - containerWidth + offsetLeft + extraPadding);
//       }

//       const tween = gsap.to(races, {
//         x: getScrollAmount,
//         duration: 3,
//         ease: "none",
//       });

//       ScrollTrigger.create({
//         trigger: ".pricing2",
//         start: "top 20%",
//         end: () => (races ? `+=${getScrollAmount() * -1}` : "bottom 60%"),
//         pin: ".pricing2",
//         animation: tween,
//         scrub: true,
//         invalidateOnRefresh: false,
//         markers: false,

//         onEnter: () => {
//           disableFadeUpAnimations();
//         },
//         onLeave: () => {
//           enableFadeUpAnimations();
//         },
//         onLeaveBack: () => {
//           enableFadeUpAnimations();
//         },
//       });
//     },
//   });
// };

// GSAP Fade Animation
// let fadeArray_items = document.querySelectorAll(".fade-anim");
// if (fadeArray_items.length > 0) {
//   const fadeArray = gsap.utils.toArray(".fade-anim");
//   // gsap.set(fadeArray, {opacity:0})
//   fadeArray.forEach((item, i) => {
//     var fade_direction = "bottom";
//     var onscroll_value = 1;
//     var duration_value = 1.15;
//     var fade_offset = 50;
//     var delay_value = 0.15;
//     var ease_value = "power2.out";

//     if (item.getAttribute("data-offset")) {
//       fade_offset = item.getAttribute("data-offset");
//     }
//     if (item.getAttribute("data-duration")) {
//       duration_value = item.getAttribute("data-duration");
//     }

//     if (item.getAttribute("data-direction")) {
//       fade_direction = item.getAttribute("data-direction");
//     }
//     if (item.getAttribute("data-on-scroll")) {
//       onscroll_value = item.getAttribute("data-on-scroll");
//     }
//     if (item.getAttribute("data-delay")) {
//       delay_value = item.getAttribute("data-delay");
//     }
//     if (item.getAttribute("data-ease")) {
//       ease_value = item.getAttribute("data-ease");
//     }

//     let animation_settings = {
//       opacity: 0,
//       ease: ease_value,
//       duration: duration_value,
//       delay: delay_value,
//     };

//     if (fade_direction == "top") {
//       animation_settings["y"] = -fade_offset;
//     }
//     if (fade_direction == "left") {
//       animation_settings["x"] = -fade_offset;
//     }

//     if (fade_direction == "bottom") {
//       animation_settings["y"] = fade_offset;
//     }

//     if (fade_direction == "right") {
//       animation_settings["x"] = fade_offset;
//     }

//     if (onscroll_value == 1) {
//       animation_settings["scrollTrigger"] = {
//         trigger: item,
//         start: "top 85%",
//       };
//     }
//     gsap.from(item, animation_settings);
//   });
// }
let fadeUpTriggers = [];

function setupFadeAnimations() {
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(fadeArray_items);

    fadeArray.forEach((item) => {
      let fade_offset = item.getAttribute("data-offset") || 50;
      let duration_value = item.getAttribute("data-duration") || 1.15;
      let fade_direction = item.getAttribute("data-direction") || "bottom";
      let onscroll_value = item.getAttribute("data-on-scroll") || 1;
      let delay_value = item.getAttribute("data-delay") || 0.15;
      let ease_value = item.getAttribute("data-ease") || "power2.out";

      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      };

      if (fade_direction == "top") animation_settings["y"] = -fade_offset;
      if (fade_direction == "left") animation_settings["x"] = -fade_offset;
      if (fade_direction == "bottom") animation_settings["y"] = fade_offset;
      if (fade_direction == "right") animation_settings["x"] = fade_offset;

      if (onscroll_value == 1) {
        animation_settings["scrollTrigger"] = {
          trigger: item,
          start: "top 85%",
        };
      }

      let tween = gsap.from(item, animation_settings);

      // Save triggers for later
      if (tween.scrollTrigger) {
        fadeUpTriggers.push(tween.scrollTrigger);
      }
    });
  }
}
function disableFadeUpAnimations() {
  fadeUpTriggers.forEach((trigger) => trigger.disable());
}

// Enable all fade triggers
function enableFadeUpAnimations() {
  fadeUpTriggers.forEach((trigger) => trigger.enable());
}
// horizontalScroll();
// setupFadeAnimations();

// parallax effect
var mouse = { x: 0, y: 0 };
var pos = { x: 0, y: 0 };
var ratio = 0.65;
var active = false;

var allParalax = document.querySelectorAll(".parallax-wrap");

allParalax.forEach(function (e) {
  e.addEventListener("mousemove", mouseMoveBtn);
});

function mouseMoveBtn(e) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  mouse.x = e.pageX;
  mouse.y = e.pageY - scrollTop;
}
gsap.ticker.add(updatePosition);

$(".parallax-wrap").mouseenter(function (e) {
  gsap.to(this, { duration: 0.3 });
  gsap.to($(this).children(), { duration: 0.3 });
  active = true;
});

$(".parallax-wrap").mouseleave(function (e) {
  gsap.to(this, { duration: 0.3 });
  gsap.to($(this).children(), { duration: 0.3, x: 0, y: 0 });
  active = false;
});

function updatePosition() {
  pos.x += (mouse.x - pos.x) * ratio;
  pos.y += (mouse.y - pos.y) * ratio;
}

$(".parallax-wrap").mousemove(function (e) {
  parallaxCursorBtn(e, this, 2);
  callParallaxBtn(e, this);
});

function callParallaxBtn(e, parent) {
  parallaxItBtn(e, parent, parent.querySelector(".parallax-element"), 20);
}

function parallaxItBtn(e, parent, target, movement) {
  var boundingRect = parent.getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  gsap.to(target, {
    duration: 0.3,
    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
    y:
      ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.height) *
      movement,
    ease: Power2.easeOut,
  });
}

function parallaxCursorBtn(e, parent, movement) {
  var rect = parent.getBoundingClientRect();
  var relX = e.pageX - rect.left;
  var relY = e.pageY - rect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
  pos.y =
    rect.top +
    rect.height / 2 +
    (relY - rect.height / 2 - scrollTop) / movement;
}
function initBackToTopButton() {
  const btt = document.querySelector(".scrollToTop");
  if (!btt) return; // Exit if the button doesn't exist

  // Add click functionality to scroll to the top
  btt.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    gsap.to(window, { duration: 1, scrollTo: 0 });
  });

  // Set initial styles
  gsap.set(btt, { autoAlpha: 0, y: 50 });

  // Animate the button visibility on scroll
  gsap.to(btt, {
    autoAlpha: 1,
    y: 0,
    scrollTrigger: {
      trigger: "body",
      start: "top -20%",
      end: "top -20%",
      toggleActions: "play none reverse none",
    },
  });
}

function cloneSlides(sliderSelector, slideSelector, marqueeSelector) {
  var slideCount = $(sliderSelector + " " + slideSelector).length;

  for (var i = 0; i < slideCount; i++) {
    $(sliderSelector).clone().prependTo(marqueeSelector);
  }

  return $(sliderSelector + " " + slideSelector);
}

document.addEventListener("DOMContentLoaded", () => {
  pinned_header();
  initializeSwiper(".quote__slider", quoteSliderOptions);
  initializeSwiper(".testimonial__slider", testimonialSliderOptions);
  initializeSwiper(".testimonial2__slider", testimonial2SliderOptions);
  initializeSwiper(".hero-two__slider", HeroTwoSliderOptions);
  initializeSwiper(".pricing2__slider", pricing2SliderOptions);
  initHeroTwoSlider();
  initDragButton();
  initTestimonialNavActiveToggle();
  setBackgroundImages();
  odometerCounter();
  initMagnificPopup();
  updateSkills();
  setHoverActiveClass(".statistic-box2", ".statistic-box2", "active");
  initMasonryFilter();
  popupSearchBox(".popup-search-box", ".search-btn", ".searchClose", "show");
  $(".vs-menu-wrapper").vsmobilemenu();
  initMagnificPopups();
  initObryPlayers();
  // horizontalScroll();
  setupFadeAnimations();
  initBackToTopButton();
  cloneSlides(".hero-one__slider", ".hero-one__slide", ".hero-one__marquee");
  cloneSlides(
    ".instagram2__slider",
    ".instagram2__slide",
    ".instagram2__marquee"
  );
});

// Update the scroll amount on resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
ScrollTrigger.sort();
