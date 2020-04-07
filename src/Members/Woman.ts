import {Gender, Human, IParent, IWoman, Man} from "../internal";


export class Woman extends Human implements IWoman, IParent {
    private readonly _children: Human[];
    protected _partner: Man;

    constructor(fullName: string, dateOfBirth: Date, mother: Woman, father: Man) {
        super(fullName, Gender.FEMALE, dateOfBirth, mother, father);
        this._children = [];
    }

    marry(partner: Man): void {
        this._partner = partner;
    }

    getChildren(): Human[] {
        return this._children;
    }

    getHusband(): Man {
        return this._partner as Man;
    }

    giveBirth(child: Human): void {
        this._children.push(child);
    }
}
