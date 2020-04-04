import {Human} from "../Members/Human";
import {Man} from "../Members/Man";

export class ManBuilder {
    private readonly human: Man;

    constructor() {
        this.human = new Man('', new Date(), null, null, null);
    }

    public static withDefault(): ManBuilder {
        return new ManBuilder()
            .withName(`New Born #${new Date()}`);
    }

    public withName(fullName: string): ManBuilder {
        this.human.setName(fullName);
        return this;
    }

    public build(): Man {
        return this.human;
    }
}
