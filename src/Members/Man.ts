import {Gender, Human, IMan, IParent, Woman} from "../internal";

export class Man extends Human implements IMan, IParent {
    private _partner: Woman;

    constructor(fullName: string, dateOfBirth: Date, mother: Woman, father: Man) {
        super(fullName, Gender.MALE, dateOfBirth, mother, father);
    }

    public marry(partner: Woman): void {
        this._partner = partner;
        partner.marry(this);
    }

    public getWife(): Woman {
        return this._partner;
    }

    getChildren(): Human[] {
        return this._partner.getChildren();
    }
}

