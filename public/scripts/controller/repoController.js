'use strict';

var app = app || {};

(function(module){
  const repoController = {};
  repoController.loadRepos = function() {
    module.getRepos(function (repos) {
      module.displayRepos(repos);
    });
    $('#repoList').show();
  }
  module.repoController = repoController;
})(app);
