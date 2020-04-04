import {Father, Gender, Human, IMan, MarriedMan, MarriedWoman, Mother} from "../internal";

export class Man extends Human implements IMan {
    constructor(fullName: string, dateOfBirth: Date, mother: Mother, father: Father, partner?: Human) {
        super(fullName, Gender.MALE, dateOfBirth, mother, father, partner);
    }


    public marry(partner: Human): { husband: MarriedMan, wife: MarriedWoman } {
        const newMe = this.getMarried();
        const wife = <MarriedWoman>partner.getMarried();
        newMe.setPartner(wife);
        wife.setPartner(newMe);
        return {husband: newMe, wife: wife};
    }

    getMarried() {
        const newMe = new MarriedMan(this, null);
        try {
            this.getMother().getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        } catch (e) {
        }
        return newMe;
    }
}

