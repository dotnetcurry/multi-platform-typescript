let projects=require("./dest/umd/projects.js")

var project = new projects.Project("test", "test description");
project.assignTo(
    new projects.Team("TypeScript team", 
    new projects.Person("Francesco", "Abbruzzese", "team leader")));
var team = project.team;