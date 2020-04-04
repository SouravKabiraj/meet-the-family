"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Woman_1 = require("./Woman");
class MarriedWoman extends Woman_1.Woman {
    constructor(fullName, dateOfBirth) {
        super(fullName, dateOfBirth);
    }
    marry(partner) {
        this.partner = partner;
    }
    getPartner() {
        return this.partner;
    }
}
exports.MarriedWoman = MarriedWoman;
