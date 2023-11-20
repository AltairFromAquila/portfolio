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
        url: 'https://www.boomerang.asia/games/grizzy-and-the-lemmings-lemmings-launch',
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Daycare',
        year: 2019,
        role: Role.Programmer,
        url: 'https://html5.gamedistribution.com/61c32aec6eca4e5b807f2bfc11e5660e/',
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Restaurant',
        year: 2019,
        role: Role.Programmer,
        url: 'https://html5.gamedistribution.com/3654ff28d9044e4e82d662bc43c2e13d/',
        higlightPriority: 0
    },
    {
        name: 'Dr Panda Farm',
        year: 2019,
        role: Role.Additional,
        url: 'https://html5.gamedistribution.com/f1bdb884f9f54703845a9c77a186a703/',
        higlightPriority: 0
    },
    {
        name: 'Dr Panda School',
        year: 2019,
        role: Role.Additional,
        url: 'https://html5.gamedistribution.com/9809a9413aec43d5b97b9ca6dae9b53e/',
        higlightPriority: 0
    },
    {
        name: 'Darwin\'s Yearbook',
        year: 2020,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkme.com/games/gumball-darwins-yearbook/play',
        higlightPriority: 3
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
        url: 'https://www.cartoonnetworkme.com/games/gumball-gum-dropped/play',
        higlightPriority: 0
    },
    {
        name: 'Thundercats Roar! Lion O\'s Quest',
        year: 2020,
        role: Role.Additional,
        url: 'https://www.cartoonnetworkasia.com/games/thundercats-roar-lion-o-quest/play',
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
        name: 'Gumball Home Alone Survival',
        year: 2021,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkhq.com/games/gumball-home-alone-survival/play',
        higlightPriority: 2
    },
    {
        name: 'Scooby Doo Mystery Escape',
        year: 2021,
        role: Role.Designer,
        url: 'https://www.boomerangtv.co.uk/games/scooby-doo-mystery-escape',
        higlightPriority: 0
    },
    {
        name: 'Miffy Minigames',
        year: 2021,
        role: Role.Additional,
        url: null,
        higlightPriority: 0
    },
    {
        name: 'Teen Titans Go! Jump City Rescue',
        year: 2021,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkme.com/games/teen-titans-go-jump-city-rescue/play',
        higlightPriority: 1
    },
    {
        name: 'Jumble',
        year: 2022,
        role: Role.Programmer,
        url: 'https://www.puzzlesociety.com/word-scrambles/jumble',
        higlightPriority: 0
    },
    {
        name: 'Veggie Village Quest',
        year: 2022,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkme.com/games/we-baby-bears-veggie-village-quest/play',
        higlightPriority: 0
    },
    {
        name: 'Vote for Gumball',
        year: 2022,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkme.com/games/gumball-vote-for-gumball/play',
        higlightPriority: 0
    },
    {
        name: 'Darwin Rescue',
        year: 2022,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkme.com/games/gumball-darwin-rescue/play',
        higlightPriority: 1
    },
    {
        name: 'DC Super Hero Girls: Frenemies',
        year: 2022,
        role: Role.Designer,
        url: 'https://www.cartoonnetworkhq.com/games/dc-super-hero-girls-frenemies/play',
        higlightPriority: 0
    },
    {
        name: 'Crazy Golf',
        year: 2022,
        role: Role.Additional,
        url: 'https://www.cartoonnetworkhq.com/games/cartoon-network-crazy-golf/play',
        higlightPriority: 0
    },
    {
        name: 'Switch Spots',
        year: 2023,
        role: Role.Designer,
        url: 'https://www.puzzlesociety.com/logic-puzzles/switch-spots',
        higlightPriority: 0
    },
    {
        name: 'Super Switch Spots',
        year: 2023,
        role: Role.Designer,
        url: 'https://www.puzzlesociety.com/logic-puzzles/super-switch-spots',
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
