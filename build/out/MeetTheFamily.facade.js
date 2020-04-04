"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
const ManBuilder_1 = require("./Builders/ManBuilder");
const WomanBuilder_1 = require("./Builders/WomanBuilder");
class FamilyFacade {
    constructor() {
        this.members = new Map();
    }
    coronation(kingName) {
        const king = ManBuilder_1.ManBuilder.withDefault().withName('King').build();
        this.members.set(kingName, king);
        this.king = king;
    }
    search(name) {
        return this.members.get(name);
    }
    organizeMarriage(familyMemberName, newMember) {
        const familyMember = this.search(familyMemberName);
        let newCouple;
        if (typeof newMember === internal_1.Man.constructor.name) {
            newCouple = newMember.marry(familyMember);
        }
        else {
            newCouple = familyMember.marry(newMember);
        }
        this.members.set(newCouple.husband.getFullName(), newCouple.husband);
        this.members.set(newCouple.wife.getFullName(), newCouple.wife);
    }
    namingCeremony(mothersName, newBornName, gender) {
        const newBorn = gender === internal_1.Gender.MALE ?
            ManBuilder_1.ManBuilder.withDefault().withName(newBornName).build() :
            WomanBuilder_1.WomanBuilder.withDefault().withName(newBornName).build();
        const familyMember = this.members.get(mothersName);
        const giveBirthResponse = familyMember.giveBirth(newBorn);
        this.members.set(giveBirthResponse.child.getFullName(), giveBirthResponse.child);
        this.members.set(giveBirthResponse.mother.getFullName(), giveBirthResponse.mother);
        this.members.set(giveBirthResponse.father.getFullName(), giveBirthResponse.father);
    }
}
exports.FamilyFacade = FamilyFacade;
