"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISiblingInLawRelation_1 = require("./ISiblingInLawRelation");
const Gender_1 = require("../FamilyMemberEntities/Gender");
class BrotherInLawRelation extends ISiblingInLawRelation_1.ISiblingInLawRelation {
    getRelativeOf(married) {
        const partnersSiblings = super.getRelativesOf(married);
        partnersSiblings.filter(h => h.gender === Gender_1.Gender.MALE);
        return partnersSiblings;
    }
}
exports.BrotherInLawRelation = BrotherInLawRelation;
