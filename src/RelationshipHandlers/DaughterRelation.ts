import {Father, Gender, Human, Man} from "../internal";
import {IRelation} from "./IRelation";

export class DaughterRelation implements IRelation {
    getRelativesOf(human: Human): Human[] {
        return <Man[]>((<Father>human).getChildren().filter(s => s.gender === Gender.FEMALE));
    }
}
