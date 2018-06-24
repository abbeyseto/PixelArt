// FUNCION TO MAKE GRID
function makeGrid() { // Begining of the function that executes to draw the grid on the document.

  var heigth = $('#inputHeight').val(); //capture the height inputed by the user.
  var width = $('#inputWeight').val(); // capture the width inputed by the user.

  for (var col = 0; col < heigth; col++) { // for loop that forms the grid
    $("#pixelCanvas").append("<tr></tr>"); // appends multiple <tr> to pixelCanvas depending on the value of heigth
    for (var row = 0; row < width; row++) {
      $("tr").last().append("<td></td>"); // appends multiple <td> to <tr> element depending on the value of width
    }
  }

}; // End of the function that executes to draw the grid on the document.

// COLOR PICKER EVENTS
$("#colorPicker").hover(function () { //on hover function on the color picker element
  $(this).css('cursor', 'pointer').attr('title', 'Hey dude! ... Pick a color of your choice'); // when mouse hovers on the color picker element, it shows the value of "attr"
}, function () {
  $(this).css('cursor', 'auto'); // specified the type of cursor displayed when hovering on the colorpicker element
});

// Function to clear the GRID
function clearGrid() {  // this function resets the grid and all the colors that have been applied when called
  $("#pixelCanvas").children().remove();
};

//EVENT LISTENER TO CREATE THE GRID
$('#sizePicker').children().last().click(function (event) {   // click event when the submit button is pressed. children().last() refers to the last element in the #sizePicker(submit button)
  event.preventDefault(); // to avoid page reload
  clearGrid();    // each time submit is clicked, this called function clears the grid first
  makeGrid();     // after grid is cleared, this called function makes a new grid
});


//EVENT LISTENER AND FUNCION TO COLOR THE GRID
$("#pixelCanvas").on('click', "td", function () {  // when <td> element is clicked
  var color = $('#colorPicker').val();              //color is already set to the current color at the color picker element
  if ($(this).attr('style')) {                      // if this <td> element already has a color applied to it,
    $(this).removeAttr('style');                     // remove the color and apply no other color
  }
  else {                                             // but if no color has been applied.
    $(this).css('background', color);               // the current color at the color picker element is applied as a background color of the <td> element
  }
});
