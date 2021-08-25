import { MortarTargetPair } from "../MortarTargetPair";
import { Target } from "../Target";
import { Mortar } from "../Mortar";


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