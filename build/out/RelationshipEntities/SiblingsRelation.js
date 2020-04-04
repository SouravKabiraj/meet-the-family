"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SiblingsRelation {
    getRelativesOf(human) {
        return human.mother.getChildren().filter(c => c !== human);
    }
}
exports.SiblingsRelation = SiblingsRelation;
