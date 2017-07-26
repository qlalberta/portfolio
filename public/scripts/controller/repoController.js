'use strict';

var app = app || {};

(function(module){
  module.repoController = function() {
    module.getRepos(function (repos) {
      module.displayRepos(repos);
    });
    $('.tab-content').hide();
    $('#repos').show();
  }
})(app);
