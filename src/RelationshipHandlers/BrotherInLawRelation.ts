import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {Gender, Human, IMarrried} from "../internal";

export class BrotherInLawRelation extends ISiblingInLawRelation {
    getRelativeOf(married: Human): Human[] {
        const partner = (married as any).getPartner();
        let partnersSiblings = super.getRelativesOf(married);
        partnersSiblings = partnersSiblings.filter(h => (h.gender === Gender.MALE));
        return partnersSiblings;
    }
}
