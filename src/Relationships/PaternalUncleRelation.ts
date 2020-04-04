import {Human} from "../Members/Human";
import {Gender} from "../Members/Gender";
import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";

export class PaternalUncleRelation implements IRelation<Human> {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(human: Human): Human[] {
        const father = human.getFather();
        const fathersSiblings = this.siblings.getRelativesOf(father);
        fathersSiblings.filter(h => h.gender === Gender.MALE);
        return fathersSiblings;
    }
}
