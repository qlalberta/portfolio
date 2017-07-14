'use strict';

$(function() {
  $('#hamburger').on ('click', function() {
    $('#hamburger').hide();
    $('nav ul').show();
    $('nav ul').css('list-style', 'none')
  });
});

$(function() {
  $('about').on ('click', function() {
    $('nav ul').hide();
    $('#hamburger').show();
  });
});
