'use strict';

var projectView = {};
projectView.handleMainNav = function() {
  console.log(5);
  $('.tab').on('click', function() {
    console.log(7);
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });

  $('.main-nav .tab:first').click();
};

projectView.handleMainNav();
console.log(projectView);
