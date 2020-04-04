import {Father, Gender, Human, Man} from "../internal";
import {IRelation} from "./IRelation";

export class SonRelation implements IRelation {
    getRelativesOf(human: any): Human[] {
        return (human.getChildren().filter(s => s.gender === Gender.MALE));
    }
}
