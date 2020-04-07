import {Man} from "../Members/Man";
import {Woman} from "../Members/Woman";

export class ManBuilder {
    private fullName: string;
    private mother: Woman;
    private father: Man;

    constructor() {
    }

    public static withDefault(): ManBuilder {
        return new ManBuilder()
            .withName(`New Born #${new Date()}`)
            .withMother(null)
            .withFather(null);
    }

    public withName(fullName: string): ManBuilder {
        this.fullName = fullName;
        return this;
    }

    public withMother(mother: Woman): ManBuilder {
        this.mother = mother;
        return this;
    }

    public withFather(father: Man): ManBuilder {
        this.father = father;
        return this;
    }

    public build(): Man {
        return new Man(this.fullName, new Date(), this.mother, this.father);
    }
}
