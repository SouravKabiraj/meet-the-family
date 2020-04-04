"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class Human {
    constructor(fullName, gender, dateOfBirth, mother, father, partner) {
        this._fullName = fullName;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._mother = mother;
        this._father = father;
        this._partner = partner;
    }
    get gender() {
        return this._gender;
    }
    getFullName() {
        return this._fullName;
    }
    getFather() {
        return this._father;
    }
    getMother() {
        return this._mother;
    }
    setFather(father) {
        this._father = father;
    }
    setMother(mother) {
        this._mother = mother;
    }
    toString() {
        return `[
    name: ${this.getFullName()},
    Gender : ${this.gender === internal_1.Gender.MALE ? 'MALE' : 'FEMALE'}
]`;
    }
    setName(fullName) {
        this._fullName = fullName;
    }
    getDateOfBirth() {
        return this._dateOfBirth;
    }
    setPartner(partner) {
        this._partner = partner;
    }
}
exports.Human = Human;
