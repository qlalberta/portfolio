'use strict';

var projectView = {};
projectView.handleMainNav = function() {
  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });

  $('.main-nav .tab:first').click();
};

projectView.handleMainNav();
