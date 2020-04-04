import {FamilyFacade} from "./MeetTheFamily.facade";
import {WomanBuilder} from "./Builders/WomanBuilder";
import {Gender} from "./internal";

export class Test {
    public static execute(): void {
        const familyFacade = new FamilyFacade();
        console.log('1');
        familyFacade.coronation('King');
        console.log('1');
        const queen = WomanBuilder.withDefault().withName('Queen').build();
        console.log('1');
        familyFacade.organizeMarriage('King', queen);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Prince1', Gender.MALE);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Princess1', Gender.FEMALE);
        console.log('1');
        familyFacade.namingCeremony('Queen', 'Prince2', Gender.MALE);
        console.log('1');
        const Prince1Wife = WomanBuilder.withDefault().withName('Prince1Wife').build();
        console.log('1');
        familyFacade.organizeMarriage('Prince1', Prince1Wife);
        console.log('1');
        familyFacade.namingCeremony('Prince1Wife', 'Prince1Wife-Child', Gender.MALE);
        console.log('1');
    }
}
