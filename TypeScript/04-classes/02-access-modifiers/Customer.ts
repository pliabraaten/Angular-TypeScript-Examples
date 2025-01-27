class Customer {
    
    // // Traditional Vars and Constructor
    // private _firstName: string;
    // private _lastName: string;

    // constructor(theFirst: string, theLast: string) {
    //     this._firstName = theFirst;
    //     this._lastName = theLast;
    // }


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

    // Traditional Getter/Setters
    public getLastName(): string {
        return this._lastName;
    }

    public setLastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("Jimmy", "John");

myCustomer.firstName = "Susan";  // Using the TypeScript Accessor
myCustomer.setLastName("Public");

console.log(myCustomer.firstName);  // Using the TypeScript Accessor
console.log(myCustomer.getLastName());
