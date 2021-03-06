import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {Gender, Human, Woman} from "../internal";
import {SiblingsRelation} from "./SiblingsRelation";


export class SisterInLawRelation extends ISiblingInLawRelation {

    constructor(private siblingsRelation: SiblingsRelation) {
        super(siblingsRelation);
    }

    getRelativesOf(human): Human[];
    getRelativesOf(human: Human): Human[] {
        return super.getRelativesOf(human).filter(h => (h.constructor.name === Woman.name));
    }
}
