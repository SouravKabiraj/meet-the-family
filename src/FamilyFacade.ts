import {Father, Gender, Human, Man, MarriedMan, MarriedWoman, Mother} from "./internal";
import {ManBuilder} from "./Builders/ManBuilder";
import {WomanBuilder} from "./Builders/WomanBuilder";
import {EntityNotFound} from "./Error/EntityNotFound";
import {InValidActionError} from "./Error/InValidActionError";

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
        return this.search(name).gender;
    }

    public organizeMarriage(familyMemberName: string, newMember: Human): void {
        const familyMember = this.search(familyMemberName);
        let newCouple: { husband: MarriedMan, wife: MarriedWoman };
        if (newMember.constructor.name === Man.name) {
            newCouple = (<Man>newMember).marry(familyMember);
        } else {
            newCouple = (<Man>familyMember).marry(newMember);
        }
        this.members.set(newCouple.husband.getFullName(), newCouple.husband);
        this.members.set(newCouple.wife.getFullName(), newCouple.wife);
    }

    // Add Child but with better name ;)
    public namingCeremony(mothersName: string, newBornName: string, gender: Gender): void {
        try {
            const newBorn = gender === Gender.MALE ?
                ManBuilder.withDefault().withName(newBornName).build() :
                WomanBuilder.withDefault().withName(newBornName).build();
            const familyMember = <MarriedWoman>this.members.get(mothersName);
            const giveBirthResponse: { father: Father, mother: Mother, child: Human } = familyMember.giveBirth(newBorn);
            this.members.set(giveBirthResponse.child.getFullName(), giveBirthResponse.child);
            this.members.set(giveBirthResponse.mother.getFullName(), giveBirthResponse.mother);
            this.members.set(giveBirthResponse.father.getFullName(), giveBirthResponse.father);
        } catch (e) {
            throw new InValidActionError();
        }
    }
}


