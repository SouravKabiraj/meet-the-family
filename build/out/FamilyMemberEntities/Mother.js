"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarriedWoman_1 = require("./MarriedWoman");
class Mother extends MarriedWoman_1.MarriedWoman {
    constructor(fullName, dateOfBirth) {
        super(fullName, dateOfBirth);
        this.children = [];
    }
    giveBirth(child, partner) {
        this.addChild(child);
        partner.addChild(child);
        child.setFather(partner);
        child.setMother(this);
    }
    getChildren() {
        return this.children;
    }
    addChild(child) {
        this.children.push(child);
    }
}
exports.Mother = Mother;
