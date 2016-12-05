export interface IUser {
    $key?: string;
    name: string;
    companies: string[];
}

export class User implements IUser {
    name: string;
    companies: string[];

    constructor(name: string) {
        this.name = name;
    }
};
