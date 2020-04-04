import {LengaburuEmperorFamilyFacadeBuilder} from "./InitialDataSetup/FamilyFacadeBuilder";

export class Test {
    public static execute(): void {
        const familyFacade = LengaburuEmperorFamilyFacadeBuilder.withInitialData().build();
    }
}
