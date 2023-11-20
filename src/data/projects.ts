import { Role } from "./roles.js";


export interface Project {
    readonly name: string;
    readonly year: number;
    readonly role: Role;
    readonly url: string | null;
    readonly higlightPriority: number;
}


const projects: Project[] = [
    {
        name: 'Lemmings Launch',
        year: 2019,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Daycare',
        year: 2019,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Restaurant',
        year: 2019,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Farm',
        year: 2019,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Dr Panda School',
        year: 2019,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Darwin\'s Yearbook',
        year: 2020,
        role: Role.Designer,
        url: null,
        higlightPriority: 2
    },
    {
        name: '365 Solitaire',
        year: 2020,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Sand Castle Battle',
        year: 2020,
        role: Role.Port,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Ben 10 World Rescue',
        year: 2020,
        role: Role.Port,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Gumball Gum Dropped',
        year: 2020,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Thundercats Roar Lion-o\'< Adventure',
        year: 2020,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Thomas & Friends Fill in the Tracks',
        year: 2020,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Scooby Doo Whack Attack',
        year: 2020,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Gumball Survival',
        year: 2021,
        role: Role.Designer,
        url: null,
        higlightPriority: 2
    },
    {
        name: 'Miffy Minigames',
        year: 2021,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'TTG Platformer',
        year: 2021,
        role: Role.Designer,
        url: null,
        higlightPriority: 1
    },
    {
        name: 'CN Character Creator',
        year: 2021,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Jumble',
        year: 2022,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Veggie Village Quest',
        year: 2022,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Vote for Gumball',
        year: 2022,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Darwin Rescue',
        year: 2022,
        role: Role.Designer,
        url: null,
        higlightPriority: 1
    },
    {
        name: 'DC Super Hero Girls: Frenemies',
        year: 2022,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Crazy Golf',
        year: 2022,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Tom & Jerry Food Thief',
        year: 2023,
        role: Role.Programmer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Switch Spots',
        year: 2023,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Super Switch Spots',
        year: 2023,
        role: Role.Designer,
        url: null,
        higlightPriority: 0
    }
];

projects.sort((a: Project, b: Project): number => {
    const priority: number = b.higlightPriority - a.higlightPriority;

    if (priority !== 0) {
        return priority;
    }

    const role: number = a.role - b.role;

    return (role === 0) ? b.year - a.year : role;
});


export { projects };
