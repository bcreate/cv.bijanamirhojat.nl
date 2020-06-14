$(document).ready(function () {
  $(".link").click(function (e) {
    toggleElement($(".info-block.show"));
    toggleElement($(event.target));
  });

  $(".close").click(function () {
    toggleElement($(".info-block.show"));
  });

  function toggleElement(t) {
    if (t.hasClass("personalia")) {
      togglePersonalia();
    } else if (t.hasClass("werkervaring")) {
      toggleWerkervaring();
    } else if (t.hasClass("vaardigheden")) {
      toggleVaardigheden();
    } else if (t.hasClass("opleidingen")) {
      toggleOpleidingen();
    }

    moveClose(t);
  }

  function moveClose(t) {
    if ($(".info-block.show").length) {
      $(".info-block.show").append($("#close-btn"));
      $("#close-btn").show();
    } else {
      $("#close-btn").hide();
    }
  }

  function togglePersonalia() {
    $("#personalia").toggleClass("hide show");
    $("#personalia").animate({ height: "toggle" }, 1000);
  }

  function toggleWerkervaring() {
    $("#werkervaring").toggleClass("hide show");
    $("#werkervaring").animate({ width: "toggle" }, 1000);
  }

  function toggleVaardigheden() {
    $("#vaardigheden").toggleClass("hide show");
    $("#vaardigheden").animate({ width: "toggle" }, 1000);
  }

  function toggleOpleidingen() {
    $("#opleidingen").toggleClass("hide show");
    $("#opleidingen").animate({ height: "toggle" }, 1000);
  }
});
