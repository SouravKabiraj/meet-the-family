import {Gender, Human, Man, Woman} from "../internal";
import {IRelation} from "./IRelation";

export class DaughterRelation implements IRelation {
    getRelativesOf(human: Human): Human[] {
        return <Man[]>((<Man>human).getChildren().filter(s => s.constructor.name === Woman.name));
    }
}
