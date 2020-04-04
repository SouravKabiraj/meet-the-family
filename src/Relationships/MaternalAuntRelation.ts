import {Human} from "../Members/Human";
import {Gender} from "../Members/Gender";
import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";

export class MaternalAuntRelation implements IRelation<Human> {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(human: Human): Human[] {
        const mother = human.getMother();
        const MothersSiblings = this.siblings.getRelativesOf(mother);
        MothersSiblings.filter(h => h.gender === Gender.FEMALE);
        return MothersSiblings;
    }
}
