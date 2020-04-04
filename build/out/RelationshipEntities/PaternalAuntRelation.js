"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gender_1 = require("../FamilyMemberEntities/Gender");
class PaternalAuntRelation {
    constructor(siblings) {
        this.siblings = siblings;
    }
    getRelativesOf(human) {
        const father = human.father;
        const fathersSiblings = this.siblings.getRelativesOf(father);
        fathersSiblings.filter(h => h.gender === Gender_1.Gender.FEMALE);
        return fathersSiblings;
    }
}
exports.PaternalAuntRelation = PaternalAuntRelation;
