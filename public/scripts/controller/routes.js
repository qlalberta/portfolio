'use strict';
var app = app || {};
page('/', app.homeController.setNavMenu);
page('/about', app.aboutController.setNavMenu);
page('/skills', app.skillController.setNavMenu);
page('/projects', app.projectController.setNavMenu);
page('/repos', app.repoController.loadRepos);

page();
