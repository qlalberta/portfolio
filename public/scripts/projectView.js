'use strict';

var projectView = {};
projectView.handleMainNav = function() {
  $('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });

  $('.main-nav .tab:first').click();
};

projectView.handleMainNav();
