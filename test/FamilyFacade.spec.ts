import {FamilyFacade} from "../src/FamilyFacade";
import {suite, test} from 'mocha-typescript';
import {expect} from 'chai';
import {Gender, MarriedMan, MarriedWoman} from "../src/internal";
import {WomanBuilder} from "../src/Builders/WomanBuilder";

@suite
class FamilyFacadeSpec {
    private targetObject: FamilyFacade;

    constructor() {
        this.targetObject = new FamilyFacade();
    }

    @test
    private shouldAssignKing(): void {
        this.targetObject.coronation('King');

        const kingObj = this.targetObject.search('King');
        expect(kingObj.getFullName()).to.equals('King');
        expect(kingObj.gender).to.equals(Gender.MALE);
    }

    @test
    private shouldOrganizeMarriage(): void {
        try {
            this.targetObject.search('King')
        } catch (e) {
            this.targetObject.coronation('King');
        }

        this.targetObject.organizeMarriage('King', WomanBuilder.withDefault().withName('Queen').build());

        const returnedQueen = this.targetObject.search('Queen');
        const returnedKing = this.targetObject.search('King');
        expect(returnedQueen.constructor.name).to.equals(MarriedWoman.name);
        expect(returnedKing.constructor.name).to.equals(MarriedMan.name);
    }

    @test
    private shouldOrganizeNamingCeremonyAndAddNewMember(): void {
        try {
            this.targetObject.search('King');
        } catch (e) {
            this.targetObject.coronation('King');
        }
        try {
            this.targetObject.search('Queen');
        } catch (e) {
            this.targetObject.organizeMarriage('King', WomanBuilder.withDefault().withName('Queen').build());
        }

        this.targetObject.namingCeremony('Queen', 'Prince', Gender.MALE);

        expect(this.targetObject.search('Prince').getFullName()).to.equals('Prince');
        expect(this.targetObject.search('Prince').gender).to.equals(Gender.MALE);
    }
}
