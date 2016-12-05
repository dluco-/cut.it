export interface ICompany {
    $key?: string;
    name: string;
}

export class Company implements ICompany {
    name: string;
    companies: string[];

    constructor(name: string) {
        this.name = name;
    }
};
