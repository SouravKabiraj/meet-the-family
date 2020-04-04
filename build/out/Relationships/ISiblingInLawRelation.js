"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ISiblingInLawRelation {
    constructor(siblings) {
        this.siblings = siblings;
    }
    getRelativesOf(married) {
        const partner = married.getPartner();
        return this.siblings.getRelativesOf(partner);
    }
}
exports.ISiblingInLawRelation = ISiblingInLawRelation;
