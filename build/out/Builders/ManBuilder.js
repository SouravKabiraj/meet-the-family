"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Man_1 = require("../Members/Man");
class ManBuilder {
    constructor() {
        this.human = new Man_1.Man('', new Date(), null, null, null);
    }
    static withDefault() {
        return new ManBuilder()
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
exports.ManBuilder = ManBuilder;
