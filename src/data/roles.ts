export enum Role {
    Designer,
    Programmer,
    Additional,
    Port
}


const roleString: { [key: number]: string } = {
    [Role.Designer]: 'Software designer and programmer',
    [Role.Programmer]: 'Programmer',
    [Role.Additional]: 'Additional programming',
    [Role.Port]: 'Port programming'
}


export function roleToString(role: Role): string {
    const ret: string | undefined = roleString[role];

    return (ret === undefined) ? 'Unknown' : ret;
}
