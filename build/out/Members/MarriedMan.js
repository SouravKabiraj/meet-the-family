"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class MarriedMan extends internal_1.Man {
    constructor(me, partner) {
        super(me.getFullName(), me.getDateOfBirth(), me.getMother(), me.getFather(), null);
        this.setPartner(partner);
    }
    getPartner() {
        return this.partner;
    }
    beFather() {
        const newMe = new internal_1.Father(this);
        try {
            const mother = this.getMother();
            mother.getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        }
        catch (e) {
            console.log('Dont Have Mother!');
        }
        return newMe;
    }
}
exports.MarriedMan = MarriedMan;
