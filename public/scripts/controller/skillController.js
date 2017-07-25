'use strict';

var app = app || {};

(function(module) {
  const skillController = {};
  skillController.setNavMenu = function() {
    $('.tab-content').hide();
    $('#skills').show();
    $('#skills').css('border-color','black')
  }
  module.skillController = skillController;
})(app);
