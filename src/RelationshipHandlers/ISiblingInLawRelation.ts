import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";
import {Human, Man, Woman} from "../internal";

export abstract class ISiblingInLawRelation implements IRelation {
    protected constructor(private siblings: SiblingsRelation) {
    }

    getPartnerSiblings(human: Human): Human[] {
        let partner;
        switch (human.constructor.name) {
            case Man.name:
                partner = (<Man>human).getWife();
                break;
            case Woman.name:
                partner = (<Woman>human).getHusband();
                break;
        }
        if (partner) {
            return this.siblings.getRelativesOf(partner);
        } else {
            return [];
        }
    }

    getRelativesOf(human): Human[] {
        const inLaws = [];
        inLaws.push(...this.getPartnerSiblings(human));
        const siblings = this.siblings.getRelativesOf(human);
        siblings.forEach(s => {
            if (s.constructor.name === Man.name) {
                inLaws.push((<Man>s).getWife());
            } else {
                inLaws.push((<Woman>s).getHusband());
            }
        })
        return inLaws;
    }
}
