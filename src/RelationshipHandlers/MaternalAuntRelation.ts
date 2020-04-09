import {Human} from "../Members/Human";
import {IRelation} from "./IRelation";
import {SiblingsRelation} from "./SiblingsRelation";
import {Woman} from "../internal";

export class MaternalAuntRelation implements IRelation {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(human: Human): Human[] {
        const mother = human.getMother();
        const mothersSiblings = this.siblings.getRelativesOf(mother);
        return mothersSiblings.filter(h => h.constructor.name === Woman.name);
    }
}
