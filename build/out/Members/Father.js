"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class Father extends internal_1.MarriedMan {
    constructor(me) {
        super(me, me.getPartner());
    }
    getChildren() {
        const partner = this.getPartner();
        return partner.getChildren();
    }
}
exports.Father = Father;
