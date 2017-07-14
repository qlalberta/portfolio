'use strict';
var projects = [];

function Project (rawDataObj) {
  this.name = rawDataObj.name,
  this.imagePath = rawDataObj.imagePath,
  this.projectUrl = rawDataObj.projectUrl,
  this.content = rawDataObj.content;
}

Project.prototype.toHtml = function() {
  var handlebarsTemplateString = $('#handlebarsTemplate').html();
  var compiled = Handlebars.compile(handlebarsTemplateString);
  var html = compiled(this);
  return html;
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
