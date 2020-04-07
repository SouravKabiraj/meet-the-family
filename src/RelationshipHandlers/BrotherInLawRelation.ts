import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {Human, Man} from "../internal";
import {SiblingsRelation} from "./SiblingsRelation";

export class BrotherInLawRelation extends ISiblingInLawRelation {
    constructor(private siblingsRelation: SiblingsRelation) {
        super(siblingsRelation);
    }

    getRelativesOf(human): Human[];
    getRelativesOf(human: Human): Human[] {
        return super.getRelativesOf(human).filter(h => (h.constructor.name === Man.name));
    }
}
