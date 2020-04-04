"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class Mother extends internal_1.MarriedWoman {
    constructor(me) {
        super(me);
        super.children = me.getChildren();
    }
    getChildren() {
        return this.children;
    }
}
exports.Mother = Mother;
