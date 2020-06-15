$(document).ready(function () {
  hashHandler();

  function hashHandler() {
    if (window.location.hash.length > 2) {
      $(".close").fadeIn();
    } else {
      $(".close").fadeOut();
    }
  }

  window.addEventListener("hashchange", hashHandler, false);
});
