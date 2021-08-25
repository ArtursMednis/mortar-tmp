import { Target } from "./Target";
import { Mortar } from "./Mortar";


export class MortarTargetPair {
    mortar: Mortar;
    target: Target

    constructor(mortar: Mortar, target: Target) {
        this.mortar = mortar;
        this.target = target;
    }

    calcMil(): number {
        return 0;
    }

    calcDistance(): number {
        return 0;
    }


};