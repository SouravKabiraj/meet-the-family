"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISiblingInLawRelation_1 = require("./ISiblingInLawRelation");
const Gender_1 = require("../FamilyMemberEntities/Gender");
class SisterInLawRelation extends ISiblingInLawRelation_1.ISiblingInLawRelation {
    getRelativeOf(married) {
        const partnersSiblings = super.getRelativesOf(married);
        partnersSiblings.filter(h => h.gender === Gender_1.Gender.FEMALE);
        return partnersSiblings;
    }
}
exports.SisterInLawRelation = SisterInLawRelation;
