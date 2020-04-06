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

@suite
class FamilyTreeCommandInterfaceSpec {
    private targetObject: FamilyTreeCommandInterface;
    private familyFacade;
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
        this.targetObject = new FamilyTreeCommandInterface(this.familyFacade, this.brotherInLawRelation, this.maternalAuntRelation, this.maternalUncleRelation, this.paternalAuntRelation, this.paternalUncleRelation, this.siblingsRelation, this.sisterInLawRelation, this.sonRelation, this.daughterRelation);
    }

    @test
    private shouldAbleToAddChild(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.ADD_CHILD, 'Satya', 'Test1', Gender.MALE);

        const searchedMember: Man = this.familyFacade.search('Test1');
        expect(searchedMember.getFullName()).to.equal('Test1');
        expect(searchedMember.getMother().getFullName()).to.equal('Satya');
        expect(searchedMember.gender).to.equal(Gender.MALE);
        expect(returnedValue).to.equal('CHILD_ADDITION_SUCCEEDED');
    }

    @test
    private shouldThrowErrorWhileWrongMothersNameEntered(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.ADD_CHILD, 'shdkfhsdk', 'Test1', Gender.MALE);

        expect(returnedValue).to.equal('CHILD_ADDITION_FAILED');
    }

    @test
    private shouldReturnSonsNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'King Shan', RelationshipCommand.Son);

        expect(returnedValue).to.equal('Chit,Ish,Vich,Aras');
    }

    @test
    private shouldReturnDaughterNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'King Shan', RelationshipCommand.Daughter);

        expect(returnedValue).to.equal('Satya');
    }

    @test
    private shouldReturnAllSisterInLaws(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Atya', RelationshipCommand.SisterInLaw);

        expect(returnedValue).to.equal('Satvy,Krpi');
    }

    @test
    private shouldReturnSiblingsNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Satya', RelationshipCommand.Siblings);

        expect(returnedValue).to.equal('Chit,Ish,Vich,Aras');
    }

    @test
    private shouldReturnAllSisterInLawNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Amba', RelationshipCommand.SisterInLaw);

        expect(returnedValue).to.equal('Satya');
    }

    @test
    private shouldReturnAllBrotherInLawNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Amba', RelationshipCommand.BrotherInLaw);

        expect(returnedValue).to.equal('Ish,Vich,Aras');
    }

    @test
    private shouldReturnMaternalAuntNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Yodhan', RelationshipCommand.MaternalAunt);

        expect(returnedValue).to.equal('Tritha');
    }

    @test
    private shouldReturnMaternalUnclesNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Yodhan', RelationshipCommand.MaternalUncle);

        expect(returnedValue).to.equal('Vritha');
    }

    @test
    private shouldReturnPaternalAuntsNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Vasa', RelationshipCommand.PaternalAunt);

        expect(returnedValue).to.equal('Atya');
    }

    @test
    private shouldReturnPaternalUnclesNames(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Vasa', RelationshipCommand.PaternalUncle);

        expect(returnedValue).to.equal('Vyas');
    }

    @test
    private shouldThrowError(): void {
        const returnedValue = this.targetObject.Execute(FamilyCommand.GET_RELATIONSHIP, 'Vjkesfhkjasa', RelationshipCommand.PaternalUncle);

        expect(returnedValue).to.equal('PERSON_NOT_FOUND');
    }
}
