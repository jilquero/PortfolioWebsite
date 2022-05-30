const numOfPages = $("input[type='radio'][name='page']").length - 1;
const colors = {
  0: "brief",
  1: "about-me",
  2: "projects",
  3: "contact-me",
};

let prevIndex = 0;
let currIndex = 0;
let touchStart = 0;
let scrollEnd = 0;

function changeIndicator() {
  currIndex = $("input[type='radio'][name='page']:checked").val();

  $(".navbar").removeClass(colors[prevIndex]);
  $(".navbar").addClass(colors[currIndex]);

  prevIndex = currIndex;
}

function navigateUp() {
  currIndex = $("input[type='radio'][name='page']:checked").val();
  if (currIndex == 0) return;
  $("input[type='radio'][name='page']")
    .eq(--currIndex)
    .prop("checked", true);
}

function navigateDown() {
  currIndex = $("input[type='radio'][name='page']:checked").val();
  if (currIndex == numOfPages) return;
  $("input[type='radio'][name='page']")
    .eq(++currIndex)
    .prop("checked", true);
}

function getCurrPage(e) {
  return e.target.closest(".page__content") === null
    ? e.target
    : e.target.closest(".page__content");
}

// Navbar press
$(document).ready(function () {
  $("input[type='radio'][name='page']").change(changeIndicator);
});

// Scroll
$(document).on("mousewheel DOMMouseScroll", function (e) {
  let currPage = getCurrPage(e);
  let scrollHeight = currPage.scrollHeight - currPage.clientHeight;
  let delta = e.originalEvent.wheelDelta;
  scrollEnd = currPage.scrollTop;

  if (delta > 0 || e.originalEvent.detail < 0) {
    if (scrollHeight != 0 && scrollEnd != 0) return;
    navigateUp();
  }
  if (delta < 0 || e.originalEvent.detail > 0) {
    if (scrollHeight != 0 && Math.round(scrollEnd) != scrollHeight) return;
    navigateDown();
  }
  changeIndicator();
});

// Keypress w, s, up, down, space
// $(document).on("keydown", function (e) {
//   if ([33, 37, 38, 87].includes(e.which)) {
//     navigateUp();
//   } else if ([32, 34, 39, 40, 83].includes(e.which)) {
//     navigateDown();
//   } else if (e.which === 36) {
//     // start
//     $("input[type='radio'][name='page']").eq(0).prop("checked", true);
//   } else if (e.which === 35) {
//     // end
//     $("input[type='radio'][name='page']").eq(numOfPages).prop("checked", true);
//   }
//   changeIndicator();
// });

// Touch screen
$(document).bind("touchstart", function (e) {
  touchStart = e.originalEvent.touches[0].clientY;
  scrollEnd = getCurrPage(e).scrollTop;
});

$(document).bind("touchend", function (e) {
  let touchEnd = e.originalEvent.changedTouches[0].clientY;
  let currPage = getCurrPage(e);
  let scrollHeight = currPage.scrollHeight - currPage.clientHeight;

  if (touchStart < touchEnd) {
    if (scrollHeight != 0 && scrollEnd != 0) return;
    navigateUp();
  } else if (touchStart > touchEnd) {
    if (scrollHeight != 0 && Math.round(scrollEnd) != scrollHeight) return;
    navigateDown();
  }
  changeIndicator();
});

$("#menu-button").click(function () {
  $("#nav").toggleClass("navbar--open");
});
