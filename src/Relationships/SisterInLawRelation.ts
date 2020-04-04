import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {IMarriedMan} from "../Members/IMarriedMan";
import {Human} from "../Members/Human";
import {Gender} from "../Members/Gender";

export class SisterInLawRelation extends ISiblingInLawRelation {
    getRelativeOf(married: IMarriedMan): Human[] {
        const partnersSiblings = super.getRelativesOf(married);
        partnersSiblings.filter(h => h.gender === Gender.FEMALE);
        return partnersSiblings;
    }
}
