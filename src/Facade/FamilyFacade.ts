import {Gender, Human, Man, Woman} from "../internal";
import {ManBuilder} from "../Builders/ManBuilder";
import {WomanBuilder} from "../Builders/WomanBuilder";
import {EntityNotFound} from "../Error/EntityNotFound";
import {InValidActionError} from "../Error/InValidActionError";

export class FamilyFacade {
    private king: Human;
    private members: Map<string, Human>;

    constructor() {
        this.members = new Map<string, Human>();
    }

    // Create King but with better name ;P
    coronation(kingName: string): void {
        const king = ManBuilder.withDefault().withName(kingName).build();
        this.members.set(kingName, king);
        this.king = king;
    }

    public search(name: string): Human {
        const searchedPerson = this.members.get(name);
        if (!searchedPerson) {
            throw new EntityNotFound()
        }
        return searchedPerson;
    }

    public getGenderOf(name: string): Gender {
        return this.search(name).constructor.name === Man.name ? Gender.MALE : Gender.FEMALE;
    }

    public organizeMarriage(familyMemberName: string, newMember: Human): void {
        const familyMember = this.search(familyMemberName);
        if (newMember.constructor.name === Man.name) {
            (<Man>newMember).marry(<Woman>familyMember);
        } else {
            (<Man>familyMember).marry(<Woman>newMember);
        }
        this.members.set(newMember.getFullName(), newMember);
    }

    // Add Child but with better name ;)
    public namingCeremony(mothersName: string, newBornName: string, gender: Gender): void {
        const mother = <Woman>this.search(mothersName);
        try {
            const newBorn = gender === Gender.MALE ?
                ManBuilder.withDefault().withName(newBornName).withMother(mother).withFather(mother.getHusband()).build() :
                WomanBuilder.withDefault().withName(newBornName).withMother(mother).withFather(mother.getHusband()).build()
            mother.giveBirth(newBorn);
            this.members.set(newBorn.getFullName(), newBorn);
        } catch (e) {
            throw new InValidActionError();
        }
    }
}


