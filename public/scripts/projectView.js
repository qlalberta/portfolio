'use strict';

var projectView = {};
(function () {
  $('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
    $('#skills, #about').css('border-color','black');
  });

  $('.main-nav .tab:first').click();
})(projectView);
