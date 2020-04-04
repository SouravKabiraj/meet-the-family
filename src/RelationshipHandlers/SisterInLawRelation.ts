import {ISiblingInLawRelation} from "./ISiblingInLawRelation";
import {Gender, Human} from "../internal";


export class SisterInLawRelation extends ISiblingInLawRelation {
    getRelativeOf(married: Human): Human[] {
        const partner = (married as any).getPartner();
        let partnersSiblings = super.getRelativesOf(married);
        partnersSiblings = partnersSiblings.filter(h => (h.gender === Gender.FEMALE && h.getFullName() !== partner.getFullName()));
        return partnersSiblings;
    }
}
