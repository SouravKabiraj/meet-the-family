import {Human} from "../Members/Human";

export interface IRelation {
    getRelativesOf(human: Human): Human[];
}
