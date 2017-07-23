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
  projectData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  })
}



Project.retrieveAllProject = function() {
  if (localStorage.projectData) {
    Project.loadAllProject(JSON.parse(localStorage.getItem('projectdata')));
  } else {
    var path = '../data/project.json';
    $.get(path).then(function functionSuccess(data) {
      var stringfiedData = JSON.stringify(data);
      localStorage.setItem('data', stringfiedData);
      var parsedData = JSON.parse(stringfiedData)
      Project.loadAllProject(parsedData);
      projects.forEach(function(project) {
        $('#projects').append(project.toHtml());
      });
    }, function functionError(err) {
      console.err(err);
    });
  }
}
