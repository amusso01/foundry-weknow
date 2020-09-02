// Function ready
function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// code here
docReady(function() {
  // MENU
  var menuButton = document.getElementById("book-menu-button");
  var menu = document.getElementById("book-menu");
  var menuMobile = document.getElementById("book-menu-mobile");
  var hamburger = document.getElementById("hamburger-6");
  var htmlElement = document.querySelector("html");
  menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
  hamburger.addEventListener("click", function(e) {
    hamburger.classList.toggle("is-active");
    menuMobile.classList.toggle("active");
    // prevent content scrolling
    htmlElement.classList.toggle("noscroll");
  });

  // ACCORDION
  const myAccordion = new BadgerAccordion(".js-badger-accordion");
});
