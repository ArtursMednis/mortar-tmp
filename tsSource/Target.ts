import {ObjectInMap} from "./ObjectInMap";
import { mil2rad, rad2mil } from "./coordTransformFunctions";

export class Target extends ObjectInMap {
  //pairedUnitsElement: HTMLUListElement = document.createElement("ul");

  shiftedLocation:ObjectInMap;

  public shiftedFODistance: number = 0;
  public shiftedOTLineMil: number = 0;
  public locationMethod: "Grid"|"Polar"|"Shift (Grid)"|"Shift (polar)" = "Grid";

  public OTLineMil: number = 0;
  public FODistance: number = 0;

  public AddCorrection: number = 0;
  public DropCorrection: number = 0;
  public LeftCorrection: number = 0;
  public RightCorrection: number = 0;
  frontObserver? : ObjectInMap;

  constructor(prevTarget?:Target){
    super(prevTarget,"Target");
      this.shiftedLocation = new ObjectInMap(this);
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









}