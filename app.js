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
  menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
});
