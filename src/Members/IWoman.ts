import {Human, Man} from "../internal";

export interface IWoman {
    getHusband(): Man;

    getChildren(): Human[];

    giveBirth(child: Human): void;
}
