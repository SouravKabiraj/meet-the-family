import {IRelation} from "./IRelation";
import {Human} from "../Members/Human";

export class SiblingsRelation implements IRelation<Human> {
    public getRelativesOf(human: Human): Human[] {
        return human.getMother().getChildren().filter(c => c !== human);
    }
}
