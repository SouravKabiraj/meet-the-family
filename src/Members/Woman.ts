import {Father, Gender, Human, MarriedWoman, Mother} from "../internal";


export class Woman extends Human {
    constructor(fullName: string, dateOfBirth: Date, mother: Mother, father: Father, partner: Human) {
        super(fullName, Gender.FEMALE, dateOfBirth, mother, father, partner);
    }

    getMarried() {
        const newMe = new MarriedWoman(this);
        try {
            this.getMother().getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        } catch (e) {
            console.log('No Mother Found!');
        }
        return newMe;
    }
}
