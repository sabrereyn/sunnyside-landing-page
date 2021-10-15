let hamburger = $(".nav__ham");
let navList = $(".nav__list");

hamburger.click(() => {
  navList.toggleClass("nav__open");
});
