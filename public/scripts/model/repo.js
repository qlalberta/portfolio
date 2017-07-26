'use strict';

var app = app || {};

(function (module) {
  // const repos = {};
  // repos.all = [];
  module.getRepos = function (callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      function (data) {
        console.log('in repo.js')
        console.log(data);
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        callback(mappedData);
      }
    );
  };
  //  console.log(mappedData)
})(app)
