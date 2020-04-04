import {Father, Gender, IHuman, MarriedMan, Mother} from "../internal";

export abstract class Human implements IHuman {
    private readonly _gender: Gender;
    private readonly _dateOfBirth: Date;
    private _fullName: string;
    private _father: Father;
    private _mother: Mother;
    protected _partner: Human;

    protected constructor(fullName: string, gender: Gender, dateOfBirth: Date, mother: Mother, father: Father, partner: Human) {
        this._fullName = fullName;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._mother = mother;
        this._father = father;
        this._partner = partner;
    }

    get gender(): Gender {
        return this._gender;
    }

    getFullName(): string {
        return this._fullName;
    }

    getFather(): Father {
        return this._father;
    }

    getMother(): Mother {
        return this._mother;
    }

    setFather(father: Father): void {
        this._father = father;
    }

    setMother(mother: Mother): void {
        this._mother = mother;
    }

    toString(): string {
        return `[
    name: ${this.getFullName()},
    Gender : ${this.gender === Gender.MALE ? 'MALE' : 'FEMALE'}
]`
    }

    setName(fullName: string) {
        this._fullName = fullName;
    }

    getDateOfBirth(): Date {
        return this._dateOfBirth;
    }

    setPartner(partner: Human): void {
        this._partner = partner;
    }

    abstract getMarried();
}

