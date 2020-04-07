import {Human} from "../Members/Human";
import {Gender} from "../Members/Gender";
import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";
import {Man, Woman} from "../internal";

export class MaternalAuntRelation implements IRelation {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(human: Human): Human[] {
        const mother = human.getMother();
        const MothersSiblings = this.siblings.getRelativesOf(mother);
        return MothersSiblings.filter(h => h.constructor.name === Woman.name);
    }
}
