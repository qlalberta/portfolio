'use strict';

var app = app || {};

(function(module) {
  const homeController = {};
  homeController.setNavMenu = function() {
    $('.tab-content').hide();
    $('#projects, #about, #skills').show();
  }
  module.homeController = homeController;
})(app);
