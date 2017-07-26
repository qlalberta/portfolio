'use strict';
var app = app || {};
page('/about', app.aboutController.setNavMenu);
page('/skills', app.skillController.setNavMenu);
page('/projects', app.projectController.setNavMenu);


page();
