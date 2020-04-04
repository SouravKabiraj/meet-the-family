"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarriedMan_1 = require("./MarriedMan");
class Father extends MarriedMan_1.MarriedMan {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    getChildren() {
        return this.children;
    }
    addChild(child) {
        this.children.push(child);
    }
}
exports.Father = Father;
