import {CommandInterface} from "./CommandInterface";
import {NotImplemented} from "../Error/NotImplementedError";
import {FamilyFacade} from "../MeetTheFamily.facade";
import {BrotherInLawRelation} from "../RelationshipHandlers/BrotherInLawRelation";
import {MaternalAuntRelation} from "../RelationshipHandlers/MaternalAuntRelation";
import {MaternalUncleRelation} from "../RelationshipHandlers/MaternalUncleRelation";
import {PaternalAuntRelation} from "../RelationshipHandlers/PaternalAuntRelation";
import {PaternalUncleRelation} from "../RelationshipHandlers/PaternalUncleRelation";
import {SiblingsRelation} from "../RelationshipHandlers/SiblingsRelation";
import {SisterInLawRelation} from "../RelationshipHandlers/SisterInLawRelation";
import {Father} from "../Members/Father";
import {SonRelation} from "../RelationshipHandlers/SonRelation";
import {DaughterRelation} from "../RelationshipHandlers/DaughterRelation";

export enum FamilyCommand {
    ADD_CHILD = 'ADD_CHILD',
    GET_RELATIONSHIP = 'GET_RELATIONSHIP'
}

export enum RelationshipCommand {
    BrotherInLaw = 'Brother-In-Law',
    MaternalAunt = 'Maternal-Aunt',
    MaternalUncle = 'Maternal-Uncle',
    PaternalAunt = 'Paternal-Aunt',
    PaternalUncle = 'Paternal-Uncle',
    Siblings = 'Siblings',
    SisterInLaw = 'Sister-In-Law',
    Son = 'Son',
    Daughter = 'Daughter'
}

export class FamilyTreeCommandInterface extends CommandInterface {
    constructor(private familyFacade: FamilyFacade,
                private brotherInLawRelation: BrotherInLawRelation,
                private maternalAuntRelation: MaternalAuntRelation,
                private maternalUncleRelation: MaternalUncleRelation,
                private paternalAuntRelation: PaternalAuntRelation,
                private paternalUncleRelation: PaternalUncleRelation,
                private siblingsRelation: SiblingsRelation,
                private sisterInLawRelation: SisterInLawRelation,
                private sonRelation: SonRelation,
                private daughterRelation: DaughterRelation) {
        super();
    }

    Execute(...arg): string {
        switch (arg[0]) {
            case FamilyCommand.ADD_CHILD:
                this.familyFacade.namingCeremony(arg[1], arg[2], arg[3]);
                return 'CHILD_ADDITION_SUCCEEDED';
                break;
            case FamilyCommand.GET_RELATIONSHIP:
                const searchedMember = this.familyFacade.search(arg[1]);
                switch (arg[2]) {
                    case RelationshipCommand.Son:
                        return this.sonRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.Daughter:
                        return this.daughterRelation.getRelativesOf(<Father>searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.BrotherInLaw:
                        return this.brotherInLawRelation.getRelativeOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.SisterInLaw:
                        return this.sisterInLawRelation.getRelativeOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.Siblings:
                        return this.siblingsRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.MaternalAunt:
                        return this.maternalAuntRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.MaternalUncle:
                        return this.maternalUncleRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.PaternalAunt:
                        return this.paternalAuntRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                    case RelationshipCommand.PaternalUncle:
                        return this.paternalUncleRelation.getRelativesOf(searchedMember)
                            .map(r => r.getFullName())
                            .toString();
                }
        }
    }

    UnExecute(): string {
        throw new NotImplemented();
    }
}
