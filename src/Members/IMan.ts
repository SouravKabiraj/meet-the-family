import {Human, MarriedMan, MarriedWoman} from "../internal";


export interface IMan {
    marry(partner: Human): { husband: MarriedMan, wife: MarriedWoman };
}
