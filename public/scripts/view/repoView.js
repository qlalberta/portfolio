'use strict';

var app = app || {};

(function (module) {
  module.displayRepos = function (reposFromModel) {
    const template = Handlebars.compile($('#repoTemplate').html());
    $('#repos').append(template({repos: reposFromModel}))
  }
  console.log('in repoView');
})(app);
