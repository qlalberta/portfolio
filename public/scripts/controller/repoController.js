'use strict';

var app = app || {};

(function(module){
  const repoController = {};
  repoController.loadRepos = function() {
    console.log('in repoController')
    module.getRepos(function (repos) {
      module.displayRepos(repos);
      console.log('from the callback')
      console.log(repos);
    });
    $('#repoList').show();
  }
  module.repoController = repoController;
})(app);


// (function(module) {
//   const aboutController = {};
//
//   aboutController.index = () => {
//     $('#about').show().siblings().hide();
//     module.repos.requestRepos(module.repoView.index);
//     $('#about').show();
//   }
//   module.aboutController = aboutController;
// })(app);
