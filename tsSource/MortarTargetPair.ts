import { Target } from "./Target";
import { Mortar } from "./Mortar";
import { tPointGrid, tPolarPointer } from "./basicTypes";
import { getPoint1ToPoint2InPolar, rad2deg, rad2mil } from "./coordTransformFunctions";


export class MortarTargetPair {
    mortar: Mortar;
    target: Target

    constructor(mortar: Mortar, target: Target) {
        this.mortar = mortar;
        this.target = target;
    }

    calcMil(): number {
        var mortarFireData = this.calcMortarFireDataGrid();
        var mils = rad2mil(mortarFireData.radians);
        return mils;
    }

    calcDeg(): number {
        var mortarFireData = this.calcMortarFireDataGrid();
        var degs = rad2deg(mortarFireData.radians);
        return degs;
    }

    calcDistance(): number {
        var mortarFireData = this.calcMortarFireDataGrid();
        return mortarFireData.radius;
    }




    calcMortarFireDataGrid():tPolarPointer {
        //var mortarPosition: tPointGrid = { east: this.mortar.east, north: this.mortar.north };
        //var targetPosition: tPointGrid = { east: this.target.east, north: this.target.north };

        //var mortarFireData = getPoint1ToPoint2InPolar(mortarPosition, targetPosition);      //�� metode j�p�rveido, lai pie�em b�zes klasi ObjectInMap nevis tikai savu speci�lo klasi tPointGrid, kas p�c b�t�bas ir tas pats
        //                                                                                    // tPointGrid j�uztaisa k� interfeiss
        //                                                                                    // N�! ObjectInMap, j�izveido get;set; tPointGrid 

        var mortarFireData = getPoint1ToPoint2InPolar(this.mortar.PointGrid, this.target.PointGrid);
        return mortarFireData;
    }


};