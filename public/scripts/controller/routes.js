'use strict';
var app = app || {};
page('/projects', app.projectController.setNavMenu);
page('/skills', app.skillController.setNavMenu);
page('/about', app.aboutController.setNavMenu);

page();
