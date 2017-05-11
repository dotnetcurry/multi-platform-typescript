var company;
(function (company) {
    var organization;
    (function (organization) {
        var Team = organization.Team;
        var Person = organization.Person;
        var Project = (function () {
            function Project(name, description) {
                this.name = name;
                this.description = description;
            }
            Project.prototype.assignTo = function (team) {
                this.team = team;
            };
            Project.prototype.addHumanResource = function (x) {
                if (!this.team)
                    return false;
                this.team.add(x);
                return true;
            };
            return Project;
        }());
        organization.Project = Project;
    })(organization = company.organization || (company.organization = {}));
})(company || (company = {}));
//# sourceMappingURL=projects.js.map