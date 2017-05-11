/// <reference path="teams.d.ts" />
declare namespace company {
    namespace organization {
        class Project {
            name: string;
            description: string;
            team: Team | null;
            constructor(name: string, description: string);
            assignTo(team: Team): void;
            addHumanResource(x: Person): boolean;
        }
    }
}
