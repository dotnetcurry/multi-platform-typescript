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
export { Project };
//# sourceMappingURL=projects.js.map