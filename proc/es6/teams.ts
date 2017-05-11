
export class Person
{
    name: string;
    surname: string;
    role: string;
    
}
export class Team 
{
    name: string;
    members: Person[]
    constructor(name: string, ...members: Person[]){
        this.name = name;
        this.members=members;
    }
    add(x: Person){
        this.members.push(x);
    }
}



