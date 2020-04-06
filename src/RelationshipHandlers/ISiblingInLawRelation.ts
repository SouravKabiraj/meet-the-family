import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";
import {Father, Gender, Human, Man, MarriedMan, MarriedWoman, Mother, Woman} from "../internal";

export abstract class ISiblingInLawRelation implements IRelation {
    protected constructor(private siblings: SiblingsRelation) {
    }

    getPartnerSiblings(married: Human): Human[] {
        let partner;
        switch (married.constructor.name) {
            case MarriedMan.name:
                partner = (<MarriedMan>married).getPartner();
                break;
            case MarriedWoman.name:
                partner = (<MarriedWoman>married).getPartner();
                break;
            case Father.name:
                partner = (<Father>married).getPartner();
                break;
            case Mother.name:
                partner = (<Mother>married).getPartner();
                break;
        }
        return this.siblings.getRelativesOf(partner);
    }

    getRelativesOf(human): Human[] {
        const sisterInLaws = [];
        if (human.constructor.name !== Man.name && human.constructor.name !== Woman.name) {
            sisterInLaws.push(...this.getPartnerSiblings(human));
        }
        const siblings = this.siblings.getRelativesOf(human);
        sisterInLaws.push(...siblings.map((s: any) => s.getPartner()));
        return sisterInLaws;
    }
}
