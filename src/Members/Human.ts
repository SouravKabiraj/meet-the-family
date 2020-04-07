import {Gender, IHuman, Man, Woman} from "../internal";

export abstract class Human implements IHuman {
    private readonly _gender: Gender;
    private readonly _dateOfBirth: Date;
    private readonly _fullName: string;
    private readonly _father: Man;
    private readonly _mother: Woman;

    protected constructor(fullName: string, gender: Gender, dateOfBirth: Date, mother: Woman, father: Man) {
        this._fullName = fullName;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._mother = mother;
        this._father = father;
    }

    getFullName(): string {
        return this._fullName;
    }

    getFather(): Man {
        return this._father;
    }

    getMother(): Woman {
        return this._mother;
    }

    abstract marry(partner: Human): void;
}

