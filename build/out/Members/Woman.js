"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class Woman extends internal_1.Human {
    constructor(fullName, dateOfBirth, mother, father, partner) {
        super(fullName, internal_1.Gender.FEMALE, dateOfBirth, mother, father, partner);
    }
    getMarried() {
        const newMe = new internal_1.MarriedWoman(this);
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
exports.Woman = Woman;
