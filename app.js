/**
 * Pure Modal v1.0.3
 * (c) 2019 Roman Slonov
 * Released under the MIT License.
 */
// prettier-ignore
var PureModal=function(){"use strict";var t="modal-backdrop",i="is-open",s="in",e="out",o="modal-dialog",n=27,a=9,r={transition:!0},l=function(t){return window.console.error("PureModal: "+t)},c=function t(i,s){this.id=i,this.config=Object.assign({},r,s),this.modal=t.findModal(this.id),this.dialog=this.modal.querySelector("."+o),this.backdrop=null,this.isOpen=!1,this.isInit=!1,this.isTransitioning=!1,this.triggers=t.findTriggers(this.id),this.closeEls=null,this.focusableEls=null,this.focusedElBeforeOpen=null,this.firstFocusableEl=null,this.lastFocusableEl=null,this.open=this.open.bind(this),this.close=this.close.bind(this),this.onDismiss=this.onDismiss.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)};return c.prototype.init=function(){var t=this;this.isInit?l("Event listeners already added."):(this.triggers.forEach(function(i){return i.addEventListener("click",t.open)}),this.isInit=!0)},c.prototype.destroy=function(){var t=this;this.isInit?(this.triggers.forEach(function(i){return i.removeEventListener("click",t.open)}),this.isInit=!1):l("Event listeners already removed.")},c.prototype.open=function(t){var e=this;this.isTransitioning||(t.preventDefault(),"function"==typeof this.config.beforeOpen&&this.config.beforeOpen(),this.focusedElBeforeOpen=document.activeElement,this.focusableEls=Array.from(this.dialog.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),this.firstFocusableEl=this.focusableEls[0],this.lastFocusableEl=this.focusableEls[this.focusableEls.length-1],this.showBackdrop(),this.modal.style.display="block",this.config.transition?(this.isTransitioning=!0,this.modal.classList.add(i),this.modal.classList.add(s),this.openWithTransition()):this.firstFocusableEl.focus(),document.addEventListener("mousedown",this.onDismiss),document.addEventListener("keydown",this.handleKeyDown),this.closeEls=Array.from(this.modal.querySelectorAll('[data-dismiss="modal"]')),this.closeEls.forEach(function(t){return t.addEventListener("click",e.close)}),this.isOpen=!0,"function"==typeof this.config.onOpen&&this.config.onOpen())},c.prototype.openWithTransition=function(){var t=this,i=function(){t.dialog.removeEventListener("animationend",i),t.firstFocusableEl.focus(),"function"==typeof t.config.onOpen&&t.config.onOpen(),t.isTransitioning=!1};this.dialog.addEventListener("animationend",i)},c.prototype.close=function(){var t=this;this.isTransitioning||("function"==typeof this.config.beforeClose&&this.config.beforeClose(),this.config.transition?(this.isTransitioning=!0,this.modal.classList.remove(s),this.modal.classList.remove(i),this.modal.classList.add(e),this.closeWithTransition(),this.closeBackdrop()):(this.modal.style.display="none",this.modal.classList.remove(i),this.closeBackdrop(),"function"==typeof this.config.onClose&&this.config.onClose()),document.removeEventListener("mousedown",this.onDismiss),document.removeEventListener("keydown",this.handleKeyDown),this.closeEls.forEach(function(i){return i.removeEventListener("click",t.close)}),this.isOpen=!1,this.focusedElBeforeOpen.focus())},c.prototype.closeWithTransition=function(){var t=this,i=function(){t.dialog.removeEventListener("animationend",i),t.modal.style.display="none",t.modal.classList.remove(e),"function"==typeof t.config.onClose&&t.config.onClose(),t.isTransitioning=!1};this.dialog.addEventListener("animationend",i)},c.prototype.onDismiss=function(t){!this.dialog.contains(t.target)&&this.isOpen&&this.close()},c.prototype.showBackdrop=function(){this.backdrop=document.createElement("div"),this.backdrop.tabIndex=-1,this.backdrop.classList.add(t),this.config.transition&&this.backdrop.classList.add(s),document.body.appendChild(this.backdrop),this.backdrop.offsetHeight,this.backdrop.classList.add(i)},c.prototype.closeBackdrop=function(){this.config.transition?(this.backdrop.classList.remove(s),this.backdrop.classList.remove(i),this.backdrop.classList.add(e),this.closeBackdropWithTransition()):this.backdrop.remove()},c.prototype.closeBackdropWithTransition=function(){var t=this,i=function(){t.backdrop.removeEventListener("transitionend",i),t.backdrop.remove()};this.backdrop.addEventListener("transitionend",i)},c.prototype.handleKeyDown=function(t){var i=this;switch(t.keyCode){case a:if(1===this.focusableEls.length){t.preventDefault();break}t.shiftKey?document.activeElement===i.firstFocusableEl&&(t.preventDefault(),i.lastFocusableEl.focus()):document.activeElement===i.lastFocusableEl&&(t.preventDefault(),i.firstFocusableEl.focus());break;case n:this.close()}},c.findTriggers=function(t){return Array.from(document.querySelectorAll('[data-toggle="modal"][data-target="'+t+'"]'))},c.findModal=function(t){return document.getElementById(t)},c}();

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
  const body = document.querySelector("body");

  menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
  hamburger.addEventListener("click", function(e) {
    hamburger.classList.toggle("is-active");
    menuMobile.classList.toggle("active");
    // prevent content scrolling
    htmlElement.classList.toggle("noscroll");
  });

  body.addEventListener("mouseup", function(e) {
    if (!e.target.classList.contains("main-nav__control")) {
      menu.classList.remove("active");
    }
  });

  // ACCORDION
  var accordionPage = document.querySelector(".js-badger-accordion");
  var accordionProduct = document.querySelector(".js-accordion");
  if (typeof accordionPage != "undefined" && accordionPage != null) {
    const myAccordion = new BadgerAccordion(".js-badger-accordion");
    const myAccordionSecond = new BadgerAccordion(
      ".js-badger-accordion-second"
    );
    const myAccordionThird = new BadgerAccordion(".js-badger-accordion-third");
  }
  if (typeof accordionProduct != "undefined" && accordionProduct != null) {
    const productAccordion = new BadgerAccordion(".js-accordion");
  }

  // MODAL
  var modalUpsell = document.getElementById("upsellModal");
  var terminal2 = document.getElementById("terminal2");
  var terminal3 = document.getElementById("terminal3");
  var terminal4 = document.getElementById("terminal4");
  var terminal5 = document.getElementById("terminal5");
  if (typeof modalUpsell != "undefined" && modalUpsell != null) {
    const modal1 = new PureModal("upsellModal");
    modal1.init();
  }
  if (typeof terminal2 != "undefined" && terminal2 != null) {
    const modal2 = new PureModal("terminal2");
    modal2.init();
  }
  if (typeof terminal3 != "undefined" && terminal3 != null) {
    const modal3 = new PureModal("terminal3");
    modal3.init();
  }
  if (typeof terminal4 != "undefined" && terminal4 != null) {
    const modal4 = new PureModal("terminal4");
    modal4.init();
  }
  if (typeof terminal5 != "undefined" && terminal5 != null) {
    const modal5 = new PureModal("terminal5");
    modal5.init();
  }

  // SIGN IN
  var signInCard = document.querySelectorAll(".checkout-card");
  var guestCheck = document.querySelector(".guest-checkout");
  var signinCheck = document.querySelector(".signin-checkout");
  var creditCheck = document.querySelector(".creditCard-checkout");
  if (typeof signInCard != "undefined" && signInCard != null) {
    signInCard.forEach(function(e) {
      e.addEventListener("click", function(el) {
        signInCard.forEach(function(card) {
          card.classList.remove("checkout-card-active");
        });

        e.classList.toggle("checkout-card-active");

        if (typeof signinCheck != "undefined" && signinCheck != null) {
          if (e.classList.contains("checkout-signin")) {
            if (guestCheck.classList.contains("checkout-hide-open")) {
              guestCheck.classList.remove("checkout-hide-open");
            }
            signinCheck.classList.toggle("checkout-hide-open");
          } else {
            if (signinCheck.classList.contains("checkout-hide-open")) {
              signinCheck.classList.remove("checkout-hide-open");
            }
            guestCheck.classList.toggle("checkout-hide-open");
          }
        }
      });
    });
  }
  if (typeof creditCheck != "undefined" && creditCheck != null) {
    signInCard.forEach(function(e) {
      e.addEventListener("click", function(el) {
        signInCard.forEach(function(card) {
          card.classList.remove("checkout-card-active");
        });

        e.classList.toggle("checkout-card-active");

        if (e.classList.contains("checkout-creditCard")) {
          creditCheck.classList.toggle("checkout-hide-open");
        } else {
          if (creditCheck.classList.contains("checkout-hide-open")) {
            creditCheck.classList.remove("checkout-hide-open");
          }
        }
      });
    });
  }

  // CAR TRANSFER
  let addStop = document.getElementById("addStop");
  let roundTrip = document.getElementById("roundTrip");
  const stopInput = document.querySelector(".more-stop");
  const retunrInput = document.querySelector(".form-group-return");
  if (typeof addStop != "undefined" && addStop != null) {
    addStop.addEventListener("click", function() {
      stopInput.classList.add("more-stop-active");
    });
  }
  if (typeof roundTrip != "undefined" && roundTrip != null) {
    roundTrip.addEventListener("change", function() {
      retunrInput.classList.toggle("form-group-return-active");
    });
  }

  // QUANTITY SELECTOR
  const increase = document.querySelectorAll(".qty-increase");
  const decrease = document.querySelectorAll(".qty-decrease");

  if (typeof increase != "undefined" && increase != null) {
    increase.forEach(function(element) {
      element.addEventListener("click", function(e) {
        e.preventDefault();
        let prev = e.target.previousElementSibling;
        prev.value++;
      });
    });
  }

  if (typeof decrease != "undefined" && decrease != null) {
    decrease.forEach(function(element) {
      element.addEventListener("click", function(e) {
        e.preventDefault();
        let next = e.target.nextElementSibling;
        if (next.value > 0) {
          next.value--;
        }
      });
    });
  }

  // CHOOSE VEHICLE
  const vehicleCards = document.querySelectorAll(".chooseVehicle-main__card");

  if (typeof vehicleCards != "undefined" && vehicleCards != null) {
    vehicleCards.forEach(function(e) {
      e.addEventListener("click", function(el) {
        vehicleCards.forEach(function(card) {
          card.classList.remove("chooseVehicle-main__card-selected");
        });

        e.classList.toggle("chooseVehicle-main__card-selected");
      });
    });
  }

  // UPLOAD FILE
  let cv = document.querySelector("#cv");
  let labelCV = document.querySelector(".cv-label");
  if (typeof cv != "undefined" && cv != null) {
    cv.addEventListener("change", function() {
      let filename = this.files.item(0).name;
      labelCV.innerHTML = filename;
      labelCV.style.color = "#04141C";
    });
  }
});
