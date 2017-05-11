declare namespace company {
    namespace organization {
        class Person {
            name: string;
            surname: string;
            role: string;
        }
        class Team {
            name: string;
            members: Person[];
            constructor(name: string, ...members: Person[]);
            add(x: Person): void;
        }
    }
}
