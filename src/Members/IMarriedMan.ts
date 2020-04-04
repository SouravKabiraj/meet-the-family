import {Father, Human} from "../internal";

export interface IMarriedMan {
    getPartner(): Human;

    beFather(): Father;
}
