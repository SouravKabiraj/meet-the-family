import {IRelation} from "./IRelation";
import {Human} from "../Members/Human";

export class SiblingsRelation implements IRelation {
    public getRelativesOf(human: Human): Human[] {
        const children = human.getMother().getChildren();
        const siblings = children.filter(c => c.getFullName() !== human.getFullName());
        return siblings;
    }
}
