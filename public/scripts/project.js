'use strict';
var projects = [];

function Project (projectDataObj) {
  this.name = projectDataObj.name,
  this.imagePath = projectDataObj.imagePath,
  this.projectUrl = projectDataObj.projectUrl,
  this.content = projectDataObj.content;
}

Project.prototype.toHtml = function() {
  var handlebarsTemplateString = $('#handlebarsTemplate').html();
  var compiled = Handlebars.compile(handlebarsTemplateString);
  var html = compiled(this);
  return html;
};

Project.loadAllProject = function(projectData) {
  projects = projectData.map(function(ele) {
    return new Project(ele);
  });
};

Project.retrieveAllProject = function() {
  if (localStorage.projectData) {
    Project.loadAllProject(JSON.parse(localStorage.getItem('projectData')));
    projects.forEach(function(project) {
      $('#projects').append(project.toHtml());
    });
  } else {
    var path = '../data/project.json';
    $.get(path).then(function functionSuccess(data) {
      var stringfiedData = JSON.stringify(data);
      localStorage.setItem('projectData', stringfiedData);
      var parsedData = JSON.parse(stringfiedData);
      Project.loadAllProject(parsedData);
      projects.forEach(function(project) {
        $('#projects').append(project.toHtml());
      });
    }, function functionError(err) {
      console.error(err);
    });
  }
}

Project.reduceAllProject = function() {
  Project.loadAllProject(JSON.parse(localStorage.getItem('projectData')));
  var count = projects.map(function(project) {
    return project.content.length;
  }).reduce(function(sum,value){
    return sum + value;
  }, 0)
  return count;
};

Project.initStatsPage = function() {
  var span = document.createElement('span');
  $('#stats').append(span);
  span.textContent = Project.reduceAllProject();
};
