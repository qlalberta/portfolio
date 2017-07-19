'use strict';

$(function() {
  $('#hamburger').on ('click', function(e) {
    e.preventDefault();
    $('#hamburger').hide();
    $('nav ul').show();
    $('nav button').show();
    $('nav ul').css('list-style', 'none')
  });
});


$(function() {
  $('nav button').on ('click', function(e) {
    e.preventDefault();
    $('#hamburger').show();
    $('nav ul').hide();
    $('nav button').hide();
  });
});

$(function() {
  $('address').css('text-align', 'center')
});
