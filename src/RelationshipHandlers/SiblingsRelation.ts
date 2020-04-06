import {IRelation} from "./IRelation";
import {Human} from "../Members/Human";

export class SiblingsRelation implements IRelation {
    public getRelativesOf(human: Human): Human[] {
        const mother = human.getMother();
        if (mother) {
            const children = mother.getChildren();
            const siblings = children.filter(c => c.getFullName() !== human.getFullName());
            return siblings;
        } else {
            return [];
        }
    }
}
