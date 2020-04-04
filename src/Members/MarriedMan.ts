import {Father, Human, IMarriedMan, IMarrried, Man, MarriedWoman, Mother} from "../internal";


export class MarriedMan extends Man implements IMarriedMan, IMarrried {
    private partner: MarriedWoman;

    constructor(me: Man, partner: MarriedWoman) {
        super(me.getFullName(), me.getDateOfBirth(), me.getMother(), me.getFather(), null);
        this.setPartner(partner);
    }

    getPartner(): MarriedWoman {
        return this.partner;
    }

    beFather(): Father {
        const newMe = new Father(this);
        try {
            const mother: Mother = <Mother>this.getMother();
            mother.getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        } catch (e) {
        }
        return newMe;
    }
}
