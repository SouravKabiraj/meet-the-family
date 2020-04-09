import {FamilyTreeCommandInterface} from "../../src/CommandInterface/FamilyTreeCommandInterface";
import {suite, test} from "mocha-typescript";
import {BrotherInLawRelation} from "../../src/RelationshipHandlers/BrotherInLawRelation";
import {MaternalAuntRelation} from "../../src/RelationshipHandlers/MaternalAuntRelation";
import {MaternalUncleRelation} from "../../src/RelationshipHandlers/MaternalUncleRelation";
import {PaternalAuntRelation} from "../../src/RelationshipHandlers/PaternalAuntRelation";
import {PaternalUncleRelation} from "../../src/RelationshipHandlers/PaternalUncleRelation";
import {SiblingsRelation} from "../../src/RelationshipHandlers/SiblingsRelation";
import {SisterInLawRelation} from "../../src/RelationshipHandlers/SisterInLawRelation";
import {DaughterRelation} from "../../src/RelationshipHandlers/DaughterRelation";
import {SonRelation} from "../../src/RelationshipHandlers/SonRelation";
import {LengaburuEmperorFamilyFacadeBuilder} from "../../src/InitialDataSetup/FamilyFacadeBuilder";
import {FamilyCommand} from "../../src/Command/FamilyCommand";
import {Gender, Man} from "../../src/internal";
import {expect} from 'chai';
import {RelationshipCommand} from "../../src/Command/RelationshipCommand";
import {FamilyFacade} from "../../src/Facade/FamilyFacade";

@suite
class FamilyTreeCommandInterfaceSpec {
    private targetObject: FamilyTreeCommandInterface;
    private familyFacade: FamilyFacade;
    private siblingsRelation = new SiblingsRelation();
    private daughterRelation = new DaughterRelation();
    private sonRelation = new SonRelation();
    private brotherInLawRelation = new BrotherInLawRelation(this.siblingsRelation);
    private maternalAuntRelation = new MaternalAuntRelation(this.siblingsRelation);
    private sisterInLawRelation = new SisterInLawRelation(this.siblingsRelation);
    private paternalUncleRelation = new PaternalUncleRelation(this.siblingsRelation);
    private paternalAuntRelation = new PaternalAuntRelation(this.siblingsRelation);
    private maternalUncleRelation = new MaternalUncleRelation(this.siblingsRelation);

    constructor() {
        this.familyFacade = LengaburuEmperorFamilyFacadeBuilder.withInitialData().build();
        this.targetObject = new FamilyTreeCommandInterface(this.familyFacade, this.brotherInLawRelation,
            this.maternalAuntRelation, this.maternalUncleRelation, this.paternalAuntRelation,
            this.paternalUncleRelation, this.siblingsRelation, this.sisterInLawRelation, this.sonRelation,
            this.daughterRelation);
    }

    @test
    private shouldAbleToAddChild(): void {
        const addChild = FamilyCommand.ADD_CHILD;
        const returnedValue = this.targetObject.Execute(addChild, 'Satya', 'Test1', Gender.MALE);

        const searchedMember = this.familyFacade.search('Test1');
        expect(searchedMember.getFullName()).to.equal('Test1');
        expect(searchedMember.constructor.name).to.equal(Man.name);
        expect(searchedMember.getMother().getFullName()).to.equal('Satya');
        expect(returnedValue).to.equal('CHILD_ADDITION_SUCCEEDED');
    }

    @test
    private shouldThrowErrorWhileWrongMothersNameEntered(): void {
        const addChild = FamilyCommand.ADD_CHILD;
        const returnedValue = this.targetObject.Execute(addChild, 'shdkfhsdk', 'Test1', Gender.MALE);

        expect(returnedValue).to.equal('PERSON_NOT_FOUND');
    }

    @test
    private shouldReturnSonsNames(): void {
        const relationShipCommand = RelationshipCommand.Son;
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const returnedValue = this.targetObject.Execute(getRelationship, 'King Shan', relationShipCommand);

        expect(returnedValue).to.equal('Chit,Ish,Vich,Aras');
    }

    @test
    private shouldReturnDaughterNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const daughter = RelationshipCommand.Daughter;
        const returnedValue = this.targetObject.Execute(getRelationship, 'King Shan', daughter);

        expect(returnedValue).to.equal('Satya');
    }

    @test
    private shouldReturnAllSisterInLaws(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const sisterInLaw = RelationshipCommand.SisterInLaw;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Atya', sisterInLaw);

        expect(returnedValue).to.equal('Satvy,Krpi');
    }

    @test
    private shouldReturnSiblingsNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const siblings = RelationshipCommand.Siblings;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Satya', siblings);

        expect(returnedValue).to.equal('Chit,Ish,Vich,Aras');
    }

    @test
    private shouldAllVasasSiblings(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const siblings = RelationshipCommand.Siblings;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Vasa', siblings);

        expect(returnedValue).to.equal('NONE');
    }

    @test
    private shouldReturnAllSisterInLawNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const sisterInLaw = RelationshipCommand.SisterInLaw;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Amba', sisterInLaw);

        expect(returnedValue).to.equal('Satya');
    }

    @test
    private shouldReturnAllBrotherInLawNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const brotherInLaw = RelationshipCommand.BrotherInLaw;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Amba', brotherInLaw);

        expect(returnedValue).to.equal('Ish,Vich,Aras');
    }

    @test
    private shouldReturnMaternalAuntNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const maternalAunt = RelationshipCommand.MaternalAunt;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Yodhan', maternalAunt);

        expect(returnedValue).to.equal('Tritha');
    }

    @test
    private shouldReturnMaternalUnclesNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const maternalUncle = RelationshipCommand.MaternalUncle;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Yodhan', maternalUncle);

        expect(returnedValue).to.equal('Vritha');
    }

    @test
    private shouldReturnPaternalAuntsNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const paternalAunt = RelationshipCommand.PaternalAunt;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Vasa', paternalAunt);

        expect(returnedValue).to.equal('Atya');
    }

    @test
    private shouldReturnPaternalUnclesNames(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const paternalUncle = RelationshipCommand.PaternalUncle;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Vasa', paternalUncle);

        expect(returnedValue).to.equal('Vyas');
    }

    @test
    private shouldThrowError(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const paternalUncle = RelationshipCommand.PaternalUncle;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Vjkesfhkjasa', paternalUncle);

        expect(returnedValue).to.equal('PERSON_NOT_FOUND');
    }

    @test
    private shouldThrowErrorWhileAddChildIsNotPossible(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.ADD_CHILD, 'Pjali', 'Srutak', Gender.MALE);

        expect(returnedValue).to.equal('PERSON_NOT_FOUND');
    }

    @test
    private shouldThrowPersonNotFoundError(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const son = RelationshipCommand.Son;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Pjali', son);

        expect(returnedValue).to.equal('PERSON_NOT_FOUND');
    }

    @test
    private shouldThrowAddChildFailedError(): void {
        const addChild = FamilyCommand.ADD_CHILD;
        const returnedValue = this.targetObject.Execute(addChild, 'Asva', 'Vani', Gender.FEMALE);

        expect(returnedValue).to.equal('CHILD_ADDITION_FAILED');
    }

    @test
    private shouldReturnNoneWhileNotASingleItemExists(): void {
        const getRelationship = FamilyCommand.GET_RELATIONSHIP;
        const siblings = RelationshipCommand.Siblings;
        const returnedValue = this.targetObject.Execute(getRelationship, 'Vasa', siblings);

        expect(returnedValue).to.equal('NONE');
    }
}
