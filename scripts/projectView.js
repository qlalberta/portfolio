'use strict';

articleView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });

  $('.main-nav .tab:first').click();
};
