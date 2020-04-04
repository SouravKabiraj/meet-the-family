"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Woman_1 = require("../Members/Woman");
class WomanBuilder {
    constructor() {
        this.human = new Woman_1.Woman(null, new Date(), null, null, null);
    }
    static withDefault() {
        return new WomanBuilder()
            .withName(`New Born #${new Date()}`);
    }
    withName(fullName) {
        this.human.setName(fullName);
        return this;
    }
    build() {
        return this.human;
    }
}
exports.WomanBuilder = WomanBuilder;
