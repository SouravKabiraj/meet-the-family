import {Father, Human, Mother} from "../internal";

export interface IMarriedWoman {
    beMother(): Mother;

    getChildren(): Human[];

    giveBirth(child: Human): { father: Father, mother: Mother, child: Human };
}
