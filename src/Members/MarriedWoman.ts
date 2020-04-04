import {Father, Human, IMarriedWoman, IMarrried, MarriedMan, Mother, Woman} from "../internal";


export class MarriedWoman extends Woman implements IMarriedWoman, IMarrried {
    protected children: Human[];

    constructor(me: Woman) {
        super(me.getFullName(), me.getDateOfBirth(), me.getMother(), me.getFather(), null);
    }

    getPartner(): MarriedMan {
        return <MarriedMan>this._partner;
    }

    giveBirth(child: Human): { father: Father, mother: Mother, child: Human } {
        let partner = <MarriedMan>this.getPartner();
        if (partner.constructor.name !== Father.name)
            partner = partner.beFather();
        const newMe = this.beMother();
        newMe.setPartner(partner);
        partner.setPartner(newMe);
        newMe.children ? newMe.children.push(child) : newMe.children = [child];
        child.setMother(newMe);
        child.setFather(<Father>partner);
        return {father: partner as Father, mother: newMe, child: child};
    }

    beMother(): Mother {
        const newMe = new Mother(this);
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

    getChildren(): Human[] {
        return this.children;
    }
}
