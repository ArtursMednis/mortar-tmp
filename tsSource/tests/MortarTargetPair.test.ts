import { MortarTargetPair } from "../MortarTargetPair";
import { Target, TargetCorrection } from "../Target";
import { Mortar } from "../Mortar";


/*
konsolç rakstît
npm run test
//*/



describe('MortarTargetPair (1;1),(1;2)', () => {

    var mortar = new Mortar();
    mortar.east = 1;
    mortar.north = 1;
    var target = new Target();
    target.east = 1;
    target.north = 2;

    var mortarTargetPair: MortarTargetPair = new MortarTargetPair(mortar, target);



    it('calcMil', () => {
        expect(mortarTargetPair.calcMil()).toBeCloseTo(0);
    })

    it('calcDistance', () => {
        expect(mortarTargetPair.calcDistance()).toBeCloseTo(1);
    })

})


describe('MortarTargetPair (2;2),(1;1)', () => {

    var mortar = new Mortar();
    mortar.east = 2;
    mortar.north = 2;
    var target = new Target();
    target.east = 1;
    target.north = 1;

    var mortarTargetPair: MortarTargetPair = new MortarTargetPair(mortar, target);



    it('calcMil', () => {
        expect(mortarTargetPair.calcMil()).toBeCloseTo(4000);
    })

    it('calcDistance', () => {
        expect(mortarTargetPair.calcDistance()).toBeCloseTo(1.4142135623730951);
    })

})


//*

// un ar 2x correction
describe('MortarTargetPair (10;10),(10;20) with correction - OT:800 ADD:1 RIGHT:3', () => {

    var mortar = new Mortar();
    mortar.east = 10;
    mortar.north = 10;
    var target = new Target();
    target.east = 10;
    target.north = 20;

    var mortarTargetPair: MortarTargetPair = new MortarTargetPair(mortar, target);

    var correction = new TargetCorrection({
        ot:800,
        add:1,
        right:3
    });



    target.AddCorrection(correction);

    it('calcMil', () => {
        expect(mortarTargetPair.calcMil()).toBeCloseTo(324.15116136536005);
    })

    it('calcDistance', () => {
        expect(mortarTargetPair.calcDistance()).toBeCloseTo(9.039675257028765);
    })

})

//*/



/*
konsolç rakstît
npm run test
//*/