'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.setNavMenu = function() {
    $('.tab-content').hide();
    $('#about').show();
    $('#about').css('border-color','black');
  }
  module.aboutController = aboutController;
})(app);
