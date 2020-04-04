"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SiblingsRelation {
    getRelativesOf(human) {
        return human.getMother().getChildren().filter(c => c !== human);
    }
}
exports.SiblingsRelation = SiblingsRelation;
