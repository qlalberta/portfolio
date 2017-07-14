'use strict';

$(function() {
  $('#hamburger').on ('click', function() {
    $('#hamburger').hide();
    $('nav ul').show();
    $('nav button').show();
    $('nav ul').css('list-style', 'none')
  });
});


$(function() {
  $('nav button').on ('click', function() {
    $('#hamburger').show();
    $('nav ul').hide();
    $('nav button').hide();
  });
});
