// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// FUNCION TO MAKE GRID
function makeGrid() {

  var heigth = parseInt($('#inputHeight').val());
  var width = parseInt($('#inputWeight').val());

  for (var col = 0; col < heigth; col++) {
    $("#pixelCanvas").append("<tr></tr>");
    for (var row = 0; row < width; row++) {
      $("tr").last().append("<td></td>");
    }
  }

};

/*$('#colorPicker').on ("hover", function(){
  $('#colorPicker').attr('title', 'Click here  to select a color')};
*/
$("#colorPicker").hover(function () {
  $(this).css('cursor', 'pointer').attr('title', 'Hey dude! ... Pick a color of your choice');
}, function () {
  $(this).css('cursor', 'auto');
});

// Function to clear the GRID
function clearGrid() {
  $("#pixelCanvas").children().remove();
};

//EVENT LISTENER TO CREATE THE GRID
$('#sizePicker').children().last().click(function (event) {
  event.preventDefault(); // to avoid page reload
  clearGrid();
  makeGrid();
});


//EVENT LISTENER AND FUNCION TO COLOR THE GRID
$("#pixelCanvas").on("click", "td", function () {
  var color = $('#colorPicker').val();
  $(this).css("backgroundColor", color);
});

//EVENT LISTENER AND FUNCION TO RESET THE COLOR TO DEFAULT
$("#pixelCanvas").on("dblclick", "td", function (e) {
  //$(this).addClass('default');
  defaultColor = $('body').css('backgroundColor');
  $(this).css('backgroundColor', defaultColor);
  e.preventDefault();
});