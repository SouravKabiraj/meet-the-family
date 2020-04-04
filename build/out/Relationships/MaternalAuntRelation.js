"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gender_1 = require("../Members/Gender");
class MaternalAuntRelation {
    constructor(siblings) {
        this.siblings = siblings;
    }
    getRelativesOf(human) {
        const mother = human.getMother();
        const MothersSiblings = this.siblings.getRelativesOf(mother);
        MothersSiblings.filter(h => h.gender === Gender_1.Gender.FEMALE);
        return MothersSiblings;
    }
}
exports.MaternalAuntRelation = MaternalAuntRelation;
