"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Man_1 = require("./Man");
class MarriedMan extends Man_1.Man {
    marry(partner) {
        this.partner = partner;
    }
    getPartner() {
        return this.partner;
    }
}
exports.MarriedMan = MarriedMan;
