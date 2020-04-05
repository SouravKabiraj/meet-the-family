import {FamilyFacade} from "../Facade/FamilyFacade";
import {Gender, Man, Woman} from "../internal";
import {ManBuilder} from "../Builders/ManBuilder";
import {WomanBuilder} from "../Builders/WomanBuilder";

export class LengaburuEmperorFamilyFacadeBuilder {
    private readonly familyFacade: FamilyFacade;

    constructor() {
        this.familyFacade = new FamilyFacade();
    }

    public static withInitialData(): LengaburuEmperorFamilyFacadeBuilder {
        // console.log('Initial setup started...')
        return new LengaburuEmperorFamilyFacadeBuilder()
            .withCoronation('King Shan')
            .withMarriage('King Shan', 'Queen Anga')
            .withNamingCeremony('Queen Anga', 'Chit', Gender.MALE)
            .withNamingCeremony('Queen Anga', 'Ish', Gender.MALE)
            .withNamingCeremony('Queen Anga', 'Vich', Gender.MALE)
            .withNamingCeremony('Queen Anga', 'Aras', Gender.MALE)
            .withNamingCeremony('Queen Anga', 'Satya', Gender.FEMALE)
            .withMarriage('Chit', 'Amba')
            .withMarriage('Vich', 'Lika')
            .withMarriage('Aras', 'Chitra')
            .withMarriage('Satya', 'Vyan')
            .withNamingCeremony('Amba', 'Dritha', Gender.FEMALE)
            .withNamingCeremony('Amba', 'Tritha', Gender.FEMALE)
            .withNamingCeremony('Amba', 'Vritha', Gender.MALE)
            .withNamingCeremony('Lika', 'Vila', Gender.FEMALE)
            .withNamingCeremony('Lika', 'Chika', Gender.FEMALE)
            .withNamingCeremony('Chitra', 'Jnki', Gender.FEMALE)
            .withNamingCeremony('Chitra', 'Ahit', Gender.MALE)
            .withNamingCeremony('Satya', 'Asva', Gender.MALE)
            .withNamingCeremony('Satya', 'Vyas', Gender.MALE)
            .withNamingCeremony('Satya', 'Atya', Gender.FEMALE)
            .withMarriage('Dritha', 'Jaya')
            .withMarriage('Jnki', 'Arit')
            .withMarriage('Asva', 'Satvy')
            .withMarriage('Vyas', 'Krpi')
            .withNamingCeremony('Dritha', 'Yodhan', Gender.MALE)
            .withNamingCeremony('Jnki', 'Laki', Gender.MALE)
            .withNamingCeremony('Jnki', 'Lavnya', Gender.FEMALE)
            .withNamingCeremony('Satvy', 'Vasa', Gender.MALE)
            .withNamingCeremony('Krpi', 'Kriya', Gender.MALE)
            .withNamingCeremony('Krpi', 'Krithi', Gender.FEMALE);
    }

    private withCoronation(kingsName: string): LengaburuEmperorFamilyFacadeBuilder {
        // console.log(`withCoronation (${kingsName})`);
        this.familyFacade.coronation(kingsName);
        return this;
    }

    private withMarriage(familyMemberName: string, newMemberName: string): LengaburuEmperorFamilyFacadeBuilder {
        // console.log(`withMarriage (${familyMemberName}, ${newMemberName})`)
        const genderOfNewMember = this.familyFacade.getGenderOf(familyMemberName);
        let newMember;
        if (genderOfNewMember === Gender.MALE) {
            newMember = WomanBuilder.withDefault().withName(newMemberName).build();
        } else {
            newMember = ManBuilder.withDefault().withName(newMemberName).build();
        }
        this.familyFacade.organizeMarriage(familyMemberName, newMember)
        return this;
    }

    private withNamingCeremony(mothersName: string, childesName: string, gender: Gender): LengaburuEmperorFamilyFacadeBuilder {
        // console.log(`withNamingCeremony (${mothersName}, ${childesName}, ${gender})`)
        this.familyFacade.namingCeremony(mothersName, childesName, gender);
        return this;
    }

    public build(): FamilyFacade {
        // console.log('Initial setup completed.')
        return this.familyFacade;
    }
}
