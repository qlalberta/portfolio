'use strict';

$(function() {
  $('#hamburger').on ('click', function(e) {
    e.preventDefault();
    $('#hamburger').hide();
    $('nav ul').show();
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
  $('#stats a').hide();
  $('#projects h2').hover(function(e){
    e.preventDefault();
    $('#stats a').fadeIn('fast');
  });
});

$(function() {
  $('.home').on ('click', function(e){
    e.preventDefault();
    window.location.href='/index.html'
  });
});
