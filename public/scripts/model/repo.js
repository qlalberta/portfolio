'use strict';

var app = app || {};

(function (module) {
  module.getRepos = function (callback) {
    $.get(`/github/user/repos`)
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        callback(mappedData);
      }
    );
  };
})(app)
