"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeetTheFamily_facade_1 = require("./MeetTheFamily.facade");
const WomanBuilder_1 = require("./Builders/WomanBuilder");
const internal_1 = require("./internal");
class Test {
    static execute() {
        const familyFacade = new MeetTheFamily_facade_1.FamilyFacade();
        console.log('1');
        familyFacade.coronation('King');
        console.log('1');
        const queen = WomanBuilder_1.WomanBuilder.withDefault().withName('Queen').build();
        console.log('1');
        familyFacade.organizeMarriage('King', queen);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Prince1', internal_1.Gender.MALE);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Princess1', internal_1.Gender.FEMALE);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Prince2', internal_1.Gender.MALE);
        console.log('1');
        const Prince1Wife = WomanBuilder_1.WomanBuilder.withDefault().withName('Prince1Wife').build();
        console.log('1');
        familyFacade.organizeMarriage('Prince1', Prince1Wife);
        console.log('1');
        familyFacade.namingCeremony('Prince1Wife', 'Prince1Wife-Child', internal_1.Gender.MALE);
        console.log('1');
    }
}
exports.Test = Test;
