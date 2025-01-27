"use strict";
class Customer {
    // // Traditional Vars and Constructor
    // private _firstName: string;
    // private _lastName: string;
    // constructor(theFirst: string, theLast: string) {
    //     this._firstName = theFirst;
    //     this._lastName = theLast;
    // }
    // TypeScript Constructor short-cut
    constructor(_firstName, // Defines properties and assigns them in constructor
    _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // TypeScript Accessors
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    // Traditional Getter/Setters
    getLastName() {
        return this._lastName;
    }
    setLastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Jimmy", "John");
myCustomer.firstName = "Susan"; // Using the TypeScript Accessor
myCustomer.setLastName("Public");
console.log(myCustomer.firstName); // Using the TypeScript Accessor
console.log(myCustomer.getLastName());
