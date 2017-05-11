import {Person, Team} from "./teams"

export class Project
{
    name: string;
    description: string;
    team: Team|null;

    constructor(name: string, description: string)
    {
        this.name=name;
        this.description=description;
    }
    assignTo(team: Team)
    {
        this.team=team;
    }
    addHumanResource(x: Person): boolean
    {
        if(!this.team) return false;
        this.team.add(x);
        return true;
    }
}



