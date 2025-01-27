export class Person {  // Exports allows it to be imported
    
    // TypeScript Constructor short-cut
    constructor(private _firstName: string,  // Defines properties and assigns them in constructor
                private _lastName: string) {
    }

    // TypeScript Accessors
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}
