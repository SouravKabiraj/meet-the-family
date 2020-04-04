"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(fullName, gender, dateOfBirth) {
        this._fullName = fullName;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
    }
    get gender() {
        return this._gender;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        this._fullName = value;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    set father(value) {
        this._father = value;
    }
    set mother(value) {
        this._mother = value;
    }
    get mother() {
        return this._mother;
    }
    setFather(father) {
        this._father = father;
    }
    setMother(mother) {
        this._mother = mother;
    }
}
exports.Human = Human;
