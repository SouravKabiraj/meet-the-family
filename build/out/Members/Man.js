"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class Man extends internal_1.Human {
    constructor(fullName, dateOfBirth, mother, father, partner) {
        super(fullName, internal_1.Gender.MALE, dateOfBirth, mother, father, partner);
    }
    marry(partner) {
        const newMe = this.getMarried();
        const wife = partner.getMarried();
        newMe.setPartner(wife);
        wife.setPartner(newMe);
        return { husband: newMe, wife: wife };
    }
    getMarried() {
        const newMe = new internal_1.MarriedMan(this, null);
        try {
            this.getMother().getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        }
        catch (e) {
            console.log('No Mother Found!');
        }
        return newMe;
    }
}
exports.Man = Man;
