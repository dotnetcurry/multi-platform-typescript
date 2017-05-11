(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    exports.Person = Person;
    var Team = (function () {
        function Team(name) {
            var members = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                members[_i - 1] = arguments[_i];
            }
            this.name = name;
            this.members = members;
        }
        Team.prototype.add = function (x) {
            this.members.push(x);
        };
        return Team;
    }());
    exports.Team = Team;
});
//# sourceMappingURL=teams.js.map