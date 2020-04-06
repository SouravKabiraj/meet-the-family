import {Father, Gender, Human, MarriedMan, MarriedWoman, Mother} from "../internal";


export class Woman extends Human {
    constructor(fullName: string, dateOfBirth: Date, mother: Mother, father: Father, partner: Human) {
        super(fullName, Gender.FEMALE, dateOfBirth, mother, father, partner);
    }

    beMarried(): MarriedWoman {
        return new MarriedWoman(this);
    }
}
