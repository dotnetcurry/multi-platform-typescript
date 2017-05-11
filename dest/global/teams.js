var company;
(function (company) {
    var organization;
    (function (organization) {
        var Person = (function () {
            function Person() {
            }
            return Person;
        }());
        organization.Person = Person;
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
        organization.Team = Team;
    })(organization = company.organization || (company.organization = {}));
})(company || (company = {}));
//# sourceMappingURL=teams.js.map