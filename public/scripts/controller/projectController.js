'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.setNavMenu = function() {
    app.Project.retrieveAllProject(function() {
      $('.tab-content').hide();
      $('#about').show()
    });
  }
  module.projectController = projectController;
})(app);
