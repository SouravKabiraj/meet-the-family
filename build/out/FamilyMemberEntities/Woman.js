"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gender_1 = require("./Gender");
const Human_1 = require("./Human");
class Woman extends Human_1.Human {
    constructor(fullName, dateOfBirth) {
        super(fullName, Gender_1.Gender.FEMALE, dateOfBirth);
    }
}
exports.Woman = Woman;
