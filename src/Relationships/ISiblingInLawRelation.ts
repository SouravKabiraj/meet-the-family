import {IMarriedMan} from "../Members/IMarriedMan";
import {IRelation} from "./IRelation";
import {Human} from "../Members/Human";
import {SiblingsRelation} from "./SiblingsRelation";

export class ISiblingInLawRelation implements IRelation<IMarriedMan> {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(married: IMarriedMan): Human[] {
        const partner = married.getPartner();
        return this.siblings.getRelativesOf(partner);
    }

}
