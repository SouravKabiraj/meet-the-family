import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {Gender, Human, IMarrried} from "../internal";
import {SiblingsRelation} from "./SiblingsRelation";

export class BrotherInLawRelation extends ISiblingInLawRelation {
    constructor(private siblingsRelation: SiblingsRelation) {
        super(siblingsRelation);
    }

    getRelativesOf(human): Human[];
    getRelativesOf(human: Human): Human[] {
        return super.getRelativesOf(human).filter(h => (h.gender === Gender.MALE));
    }
}
