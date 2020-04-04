import {Human} from "../Members/Human";
import {Man} from "../Members/Man";
import {Woman} from "../Members/Woman";

export class WomanBuilder {
    private readonly human: Woman;

    constructor() {
        this.human = new Woman(null, new Date(), null, null, null);
    }

    public static withDefault(): WomanBuilder {
        return new WomanBuilder()
            .withName(`New Born #${new Date()}`);
    }

    public withName(fullName: string): WomanBuilder {
        this.human.setName(fullName);
        return this;
    }

    public build(): Woman {
        return this.human;
    }
}
