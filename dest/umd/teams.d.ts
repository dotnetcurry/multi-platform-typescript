export declare class Person {
    name: string;
    surname: string;
    role: string;
}
export declare class Team {
    name: string;
    members: Person[];
    constructor(name: string, ...members: Person[]);
    add(x: Person): void;
}
