import {Human, IParent, MarriedWoman} from "../internal";


export class Mother extends MarriedWoman implements IParent {


    constructor(me: MarriedWoman) {
        super(me);
        super.children = me.getChildren();
    }

    getChildren(): Human[] {
        return this.children;
    }

}
