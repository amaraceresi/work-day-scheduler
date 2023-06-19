var saveBtn = $(".saveBtn");
var dateHeader = $("#currentDay");
var timeBlock = $(".time-block");

$(function () {
  dateHeader.text(dayjs().format("ddd, MMMM D YYYY"));
  timeBlock.each(function () {
    var current = dayjs().hour();
    var blockId = $(this).attr("id");
    if (blockId < current) {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description past");
    }
    if (blockId > current) {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description future");
    }
    if (blockId == current) {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description present");
    }
  });

  saveBtn.on("click", function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val().replace(key);
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, JSON.stringify(value));
  });

  $("#9 .description").val(JSON.parse(localStorage.getItem("9")));
  $("#10 .description").val(JSON.parse(localStorage.getItem("10")));
  $("#11 .description").val(JSON.parse(localStorage.getItem("11")));
  $("#12 .description").val(JSON.parse(localStorage.getItem("12")));
  $("#13 .description").val(JSON.parse(localStorage.getItem("13")));
  $("#14 .description").val(JSON.parse(localStorage.getItem("14")));
  $("#15 .description").val(JSON.parse(localStorage.getItem("15")));
  $("#16 .description").val(JSON.parse(localStorage.getItem("16")));
  $("#17 .description").val(JSON.parse(localStorage.getItem("17")));
});
