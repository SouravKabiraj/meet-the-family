import {Father, Gender, Human, IMan, MarriedMan, MarriedWoman, Mother} from "../internal";

export class Man extends Human implements IMan {
    constructor(fullName: string, dateOfBirth: Date, mother: Mother, father: Father, partner?: Human) {
        super(fullName, Gender.MALE, dateOfBirth, mother, father, partner);
    }


    public marry(partner: Human): { husband: MarriedMan, wife: MarriedWoman } {
        const newMe = this.beMarried();
        const wife = <MarriedWoman>partner.beMarried();
        newMe.setPartner(wife);
        wife.setPartner(newMe);
        newMe.updateMotherRef();
        wife.updateMotherRef();
        return {husband: newMe, wife: wife};
    }

    beMarried(): MarriedMan {
        return new MarriedMan(this, null);
    }
}

