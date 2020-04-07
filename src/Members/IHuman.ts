import {Human, Man, Woman} from "../internal";

export interface IHuman {
    getFullName(): string;

    getFather(): Man;

    marry(partner: Human): void;

    getMother(): Woman;
}
