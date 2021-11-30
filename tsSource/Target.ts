import { ObjectInMap } from "./ObjectInMap";
import { tPointGrid, tPolarPointer, tShiftGrid } from "./basicTypes";
import { mil2rad, rad2mil, shiftPoint } from "./coordTransformFunctions";

export class Target extends ObjectInMap {
  //pairedUnitsElement: HTMLUListElement = document.createElement("ul");

  //shiftedLocation:ObjectInMap;

  public shiftedFODistance: number = 0;
  public shiftedOTLineMil: number = 0;
  public locationMethod: "Grid"|"Polar"|"Shift (Grid)"|"Shift (polar)" = "Grid";

  public OTLineMil: number = 0;
  public FODistance: number = 0;
  AppliedCorrections: TargetCorrection[] = [];

  //public AddCorrection: number = 0;
  //public DropCorrection: number = 0;
  //public LeftCorrection: number = 0;
  //public RightCorrection: number = 0;
  frontObserver? : ObjectInMap;

  constructor(prevTarget?:Target){
      super("Target", prevTarget);
      //this.shiftedLocation = new ObjectInMap(this);
  }


  
  get OTLineRad(){
    return mil2rad(this.OTLineMil);
  }
  set OTLineRad(val_Radians:number){
    this.OTLineMil = rad2mil(val_Radians);
  }


  setLocationMethod(val: string): void {
    throw new Error("Method not implemented.");
  }


  get shiftedOTLineRad(){
    return mil2rad(this.shiftedOTLineMil);
  }
  set shiftedOTLineRad(val_Radians:number){
    this.shiftedOTLineMil = rad2mil(val_Radians);
  }


  offsetCorrections(){
    throw new Error("Not implemented yet");

    // var locateMethod = this.getLocationMethod();
    // if(locateMethod == "Shift (Grid)"){
      
    //   offSetShiftGrid(this);
    // }
    // if(locateMethod == "Shift (Polar)" && (this.frontObserver!)){
      
    //   offSetShiftPolar(this,this.frontObserver!);
    // }
    }

    AddCorrection(correction: TargetCorrection) {
        correction.baseLocation = this.PointGrid;
        this.ApplyShiftGridCorrection(correction);
        this.AppliedCorrections.push(correction);
    }

    ApplyShiftGridCorrection(correction: TargetCorrection) {

        var shiftData: tShiftGrid = { right: correction.right, add: correction.add };   //ðo vajadzçtu risinât ar interfeisiem vai arî zem correction
        var shiftedTarget = shiftPoint(this.PointGrid, shiftData, mil2rad(correction.ot));

        this.PointGrid = shiftedTarget;


        
    }






}

export class TargetCorrection {

    public constructor(init?: Partial<TargetCorrection>) {
        Object.assign(this, init);
    }

    _add: number = 0;
    _right: number = 0;
    _ot: number = 0;

    set add(val: number) {
        this._add = val;
    }
    get add() {
        return this._add;
    }

    set drop(val: number) {
        this._add = -val;
    }
    get drop() {
        return -this._add;
    }


    set right(val: number) {
        this._right = val;
    }
    get right() {
        return this._right;
    }

    set left(val: number) {
        this._right = -val;
    }
    get left() {
        return -this._right;
    }

    set ot(val: number) {
        this._ot = val;
    }
    get ot() {
        return this._ot;
    }

    public baseLocation: tPointGrid = { east: 0, north: 0 };

}