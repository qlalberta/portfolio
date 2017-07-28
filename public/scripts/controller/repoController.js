'use strict';

// var app = app || {};
//
// (function(module){
//   const repoController = {};
//   repoController.loadRepos = function() {
//     module.getRepos(function (repos) {
//       module.displayRepos(repos);
//     });
//     $('#repoList').show();
//   }
//   module.repoController = repoController;
// })(app);


(function(module){
  let repoController = {};

  repoController.index = function(ctx, next) {
    $('#repoList').empty();
    module.displayRepos(ctx.repos);
    $('#repos').show();
    next();
  }

  repoController.findRepo = function(ctx, next) {
    let singleRepo = ctx.repos.filter(repo => repo.name === ctx.params.name);
    ctx.repos = singleRepo;
    next();
  }

  module.repoController = repoController;
})(app);
