$(document).ready(function () {
  hashHandler();

  function hashHandler() {
    if (window.location.hash.length > 2) {
      $(".close").fadeIn();
    } else {
      $(".close").fadeOut();
    }
  }

  $(".link-icon").click(function (e) {
    window.location.hash =
      window.location.hash.indexOf(this.dataset.link) != -1
        ? "#"
        : this.dataset.link;
  });

  window.addEventListener("hashchange", hashHandler, false);
});
