import {Woman} from "../Members/Woman";
import {Man} from "../Members/Man";

export class WomanBuilder {
    private fullName: string;
    private mother: Woman;
    private father: Man;

    constructor() {
    }

    public static withDefault(): WomanBuilder {
        return new WomanBuilder()
            .withName(`New Born #${new Date()}`)
            .withMother(null)
            .withFather(null);
    }

    public withName(fullName: string): WomanBuilder {
        this.fullName = fullName;
        return this;
    }

    public withMother(mother: Woman): WomanBuilder {
        this.mother = mother;
        return this;
    }

    public withFather(father: Man): WomanBuilder {
        this.father = father;
        return this;
    }

    public build(): Woman {
        return new Woman(this.fullName, new Date(), this.mother, this.father);
    }
}
