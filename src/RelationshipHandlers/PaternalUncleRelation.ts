import {Human} from "../Members/Human";
import {Gender} from "../Members/Gender";
import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";

export class PaternalUncleRelation implements IRelation {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(human: Human): Human[] {
        const father = human.getFather();
        let fathersSiblings = this.siblings.getRelativesOf(father);
        fathersSiblings = fathersSiblings.filter(h => (h.gender === Gender.MALE));
        return fathersSiblings;
    }
}
