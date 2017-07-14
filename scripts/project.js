'use strict';

function Project (rawDataObj) {
  this.name = rawDataObj.name,
  this.imagePath = rawDataObj.imagePath,
  this.projectUrl = rawDataObj.projectUrl,
  this.content = rawDataObj.content;
}

var projects = [];

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('a').text(this.name);
  $newProject.find('a').text(this.url).attr('href', this.projectUrl);
  $newProject.find('img').attr('src', this.imagePath);
  $newProject.find('p').html(this.content);
  $newProject.append('<hr>');
  return $newProject;
};


rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
