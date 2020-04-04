import {IRelation} from "./IRelation";
import {Human} from "../Members/Human";
import {SiblingsRelation} from "./SiblingsRelation";
import {Father, MarriedMan, MarriedWoman, Mother} from "../internal";

export class ISiblingInLawRelation implements IRelation {
    constructor(private siblings: SiblingsRelation) {
    }

    getRelativesOf(married: Human): Human[] {
        let partner;
        switch (married.constructor.name) {
            case MarriedMan.name:
                partner = (<MarriedMan>married).getPartner();
                break;
            case MarriedWoman.name:
                partner = (<MarriedWoman>married).getPartner();
                break;
            case Father.name:
                partner = (<Father>married).getPartner();
                break;
            case Mother.name:
                partner = (<Mother>married).getPartner();
                break;
        }
        return this.siblings.getRelativesOf(partner);
    }

}
