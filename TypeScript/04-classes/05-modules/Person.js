"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
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
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
exports.Person = Person;
