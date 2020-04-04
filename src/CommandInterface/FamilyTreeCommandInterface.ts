import {CommandInterface} from "./CommandInterface";
import {NotImplemented} from "../Error/NotImplementedError";
import {FamilyFacade} from "../MeetTheFamilyFacade";
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
import {EntityNotFound} from "../Error/EntityNotFound";
import {InValidActionError} from "../Error/InValidActionError";
import {FamilyCommand} from "../Command/FamilyCommand";
import {RelationshipCommand} from "../Command/RelationshipCommand";

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
        try {
            switch (arg[0]) {
                case FamilyCommand.ADD_CHILD:
                    try {
                        this.familyFacade.namingCeremony(arg[1], arg[2], arg[3]);
                        return 'CHILD_ADDITION_SUCCEEDED';
                        break;
                    } catch (e) {
                        switch (e.constructor.name) {
                            case InValidActionError.name :
                                return 'CHILD_ADDITION_FAILED';
                        }
                    }
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
        } catch (e) {
            switch (e.constructor.name) {
                case EntityNotFound.name :
                    return 'PERSON_NOT_FOUND';
            }
        }
    }

    UnExecute(): string {
        throw new NotImplemented();
    }
}
