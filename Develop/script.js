// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  $('#hour-9 .description').val(localStorage.getItem("hour-9"));
  $('#hour-10 .description').val(localStorage.getItem("hour-10"));
  $('#hour-11 .description').val(localStorage.getItem("hour-11"));
  $('#hour-12 .description').val(localStorage.getItem("hour-12"));
  $('#hour-13 .description').val(localStorage.getItem("hour-13"));
  $('#hour-14 .description').val(localStorage.getItem("hour-14"));
  $('#hour-15 .description').val(localStorage.getItem("hour-15"));
  $('#hour-16 .description').val(localStorage.getItem("hour-16"));
}

