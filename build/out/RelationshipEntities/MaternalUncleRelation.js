"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gender_1 = require("../FamilyMemberEntities/Gender");
class MaternalUncleRelation {
    constructor(siblings) {
        this.siblings = siblings;
    }
    getRelativesOf(human) {
        const mother = human.mother;
        const MothersSiblings = this.siblings.getRelativesOf(mother);
        MothersSiblings.filter(h => h.gender === Gender_1.Gender.MALE);
        return MothersSiblings;
    }
}
exports.MaternalUncleRelation = MaternalUncleRelation;
