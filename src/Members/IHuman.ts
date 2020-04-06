import {Human, MarriedMan, MarriedWoman} from "../internal";

export interface IHuman {
    setPartner(partner: Human): void;

    setName(fullName: string): void;

    setFather(father: MarriedMan): void;

    setMother(mother: MarriedWoman): void;

    getFullName(): string;

    getDateOfBirth(): Date;

    getFather(): MarriedMan;

    getMother(): MarriedWoman;

    beMarried();
}
