import {Human, IParent, MarriedMan, Mother} from "../internal";

export class Father extends MarriedMan implements IParent {

    constructor(me: MarriedMan) {
        super(me, me.getPartner());
    }

    getChildren(): Human[] {
        const partner: Mother = <Mother>this._partner;
        return partner.getChildren();
    }
}
