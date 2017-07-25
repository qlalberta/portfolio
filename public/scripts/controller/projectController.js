'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.setNavMenu = function() {
    $('.tab-content').hide();
    $('#projects').show();
  }
  module.projectController = projectController;
})(app);
