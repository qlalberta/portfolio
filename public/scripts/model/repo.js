'use strict';

var app = app || {};

(function (module) {
  module.getRepos = function (ctx, next) {
    $.get(`/github/user/repos?affiliation=owner,collaborator`)
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        ctx.repos = mappedData;
        next();
      }
    );
  };

  module.getRepoByName = function (ctx, next) {
    $.ajax({
      url: `/github/repos/qlalberta/${ctx.params.name}`,
      method: 'GET'
    })
    .then(
      function (data) {
        ctx.repos = [data];
        next();
      }
    );
  }
})(app)
