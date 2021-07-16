import { Target } from "./Target";
import { Mortar } from "./Mortar";

export type MortarTargetPair = { mortar: Mortar, target: Target };

export class MortarTargetBipartiteGraph {
    edges: MortarTargetPair[] = [];
    mortars: Mortar[] | null = null;
    targets: Target[] | null = null;

    constructor() { }


    addPair(mortar: Mortar, target: Target) {
        var pairExist = false;
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar && pair.target == target) {
                pairExist = true;
            }
        }
        if (!pairExist) {
            this.edges.push({ mortar: mortar, target: target });
            //mortar.updateRelationShips();
            //target.updateRelationShips();
        }
    }


    removePair(mortar: Mortar, target: Target) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar && pair.target == target) {
                this.edges.splice(i, 1);
            }
        }
    }

    removeTargetsForMortar(mortar: Mortar) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar) {
                this.edges.splice(i, 1);
            }
        }
    };

    removeMortarsForTarget(target: Target) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.target == target) {
                this.edges.splice(i, 1);
            }
        }
    };

    toString(): string {
        var output: string = "";
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            output = output + "M" + pair.mortar.name + "-T" + pair.target.name + "; __ ";
        }
        return output;
    }

    reversePairingOrder() {
        var dePairedTargets: Target[] = [];
        var dePairedFU: Mortar[] = []


        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            dePairedTargets.push(pair.target);
            dePairedFU.unshift(pair.mortar);
            this.edges.splice(i, 1);
        }

        for (var k = 0; k < dePairedFU.length; k++) {
            this.addPair(dePairedFU[k], dePairedTargets[k]);
        }
    }


}