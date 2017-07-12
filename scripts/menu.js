'use strict';

$(function() {
  $('#hamburger').on ('click', function() {
    $('#hamburger').hide();
    $('nav ul').show();
    $('nav ul').css('list-style', 'none')
  });
});

$(function() {
  $('project').on ('click', function() {
    $('project').hide();
    $('nav ul').show();
    $('nav ul').css('list-style', 'none')
  });
});
