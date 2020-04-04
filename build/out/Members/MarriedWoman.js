"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../internal");
class MarriedWoman extends internal_1.Woman {
    constructor(me) {
        super(me.getFullName(), me.getDateOfBirth(), me.getMother(), me.getFather(), null);
    }
    getPartner() {
        return this._partner;
    }
    giveBirth(child) {
        let partner = this.getPartner();
        if (typeof partner !== internal_1.Father.constructor.name)
            partner = partner.beFather();
        const newMe = this.beMother();
        newMe.setPartner(partner);
        partner.setPartner(newMe);
        newMe.children ? newMe.children.push(child) : newMe.children = [child];
        child.setMother(newMe);
        child.setFather(partner);
        return { father: partner, mother: newMe, child: child };
    }
    beMother() {
        const newMe = new internal_1.Mother(this);
        try {
            const mother = this.getMother();
            mother.getChildren().forEach(child => {
                if (child === this) {
                    child = newMe;
                }
            });
        }
        catch (e) {
            console.log('Dont Have Mother!');
        }
        return newMe;
    }
    getChildren() {
        return this.children;
    }
}
exports.MarriedWoman = MarriedWoman;
