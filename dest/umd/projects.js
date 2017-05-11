(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./teams"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var teams_1 = require("./teams");
    exports.Person = teams_1.Person;
    exports.Team = teams_1.Team;
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
    exports.Project = Project;
});
//# sourceMappingURL=projects.js.map