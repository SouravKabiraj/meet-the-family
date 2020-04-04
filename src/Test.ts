import {LengaburuEmperorFamilyFacadeBuilder} from "./InitialDataSetup/FamilyFacadeBuilder";
import {FamilyTreeCommandInterface} from "./CommandInterface/FamilyTreeCommandInterface";
import {BrotherInLawRelation} from "./RelationshipHandlers/BrotherInLawRelation";
import {MaternalAuntRelation} from "./RelationshipHandlers/MaternalAuntRelation";
import {MaternalUncleRelation} from "./RelationshipHandlers/MaternalUncleRelation";
import {PaternalAuntRelation} from "./RelationshipHandlers/PaternalAuntRelation";
import {PaternalUncleRelation} from "./RelationshipHandlers/PaternalUncleRelation";
import {SiblingsRelation} from "./RelationshipHandlers/SiblingsRelation";
import {SisterInLawRelation} from "./RelationshipHandlers/SisterInLawRelation";
import {SonRelation} from "./RelationshipHandlers/SonRelation";
import {DaughterRelation} from "./RelationshipHandlers/DaughterRelation";
import {FamilyCommand} from "./Command/FamilyCommand";
import {RelationshipCommand} from "./Command/RelationshipCommand";

export class Test {
    public static execute(): void {
        const familyFacade = LengaburuEmperorFamilyFacadeBuilder.withInitialData().build();
        const sonRelation = new SonRelation();
        const siblingsRelation = new SiblingsRelation();
        const daughterRelation = new DaughterRelation();
        const brotherInLawRelation = new BrotherInLawRelation(siblingsRelation);
        const maternalAuntRelation = new MaternalAuntRelation(siblingsRelation);
        const maternalUncleRelation = new MaternalUncleRelation(siblingsRelation);
        const paternalAuntRelation = new PaternalAuntRelation(siblingsRelation);
        const paternalUncleRelation = new PaternalUncleRelation(siblingsRelation);
        const sisterInLawRelation = new SisterInLawRelation(siblingsRelation);
        const familyTreeCommandInterface = new FamilyTreeCommandInterface(familyFacade,
            brotherInLawRelation,
            maternalAuntRelation,
            maternalUncleRelation,
            paternalAuntRelation,
            paternalUncleRelation,
            siblingsRelation,
            sisterInLawRelation,
            sonRelation,
            daughterRelation
        );

        console.log(familyTreeCommandInterface.Execute(FamilyCommand.GET_RELATIONSHIP, 'Amba', RelationshipCommand.SisterInLaw));
    }
}
