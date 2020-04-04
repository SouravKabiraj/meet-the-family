import {Human} from "../Members/Human";

export interface IRelation<T> {
    getRelativesOf(human: T): Human[];
}
