import {CommandInterface} from "./CommandInterface";
import {NotImplemented} from "../Error/NotImplementedError";
import {FamilyFacade} from "../Facade/FamilyFacade";
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
                    let result;
                    const searchedMember = this.familyFacade.search(arg[1]);
                    switch (arg[2]) {
                        case RelationshipCommand.Son:
                            result = this.sonRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.Daughter:
                            result = this.daughterRelation.getRelativesOf(<Father>searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.BrotherInLaw:
                            result = this.brotherInLawRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.SisterInLaw:
                            result = this.sisterInLawRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.Siblings:
                            result = this.siblingsRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.MaternalAunt:
                            result = this.maternalAuntRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.MaternalUncle:
                            result = this.maternalUncleRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.PaternalAunt:
                            result = this.paternalAuntRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                        case RelationshipCommand.PaternalUncle:
                            result = this.paternalUncleRelation.getRelativesOf(searchedMember)
                                .map(r => r.getFullName())
                                .toString();
                            break;
                    }
                    return result ? result : 'NONE';
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



