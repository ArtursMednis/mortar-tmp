
export type tPointGrid = {east:number, north:number};
export type tShiftGrid = {right:number, add:number};
export type tPolarPointer = {radius:number, radians:number};

export type tRadians = {value:number};


export interface iRadians {
  value:number
}


export interface iMil {
  value:number
}

export interface iPointGrid {
  north:number,
  east:number
}




export interface iGeoLocationElement_old_mixed {
  No:number;
  DisplayTitle:string;
  location:iLocationInput_old_mixed;
  readonly htmlElem:HTMLElement;
  onRemove:()=>void;
}


export interface iLocationInput_old_mixed {
  east:number;
  north:number;
  readonly htmlElem:HTMLElement;
  disabled:boolean;
}

export interface iMortar_ extends iGeoLocationElement_old_mixed, iMTRelationShipInput_ {
  resaultsDiv: HTMLDivElement;
  addLineToResaults:(text:string)=>void;
}

export interface iMTRelationShipInput_ {
  updateRelationShips:()=>void;
  pairedUnitsElement:HTMLUListElement;
  readonly htmlElem:HTMLElement;
}

export interface iTarget_ extends iGeoLocationElement_old_mixed, iMTRelationShipInput_ {
  OTLineRad:number;
  OTLineMil:number;
  
  FODistance:number;

  AddCorrection:number;
  DropCorrection:number;
  LeftCorrection:number;
  RightCorrection:number;
  

  offsetCorrections():void;

  
  getLocationMethod():"Grid"|"Polar"|"Shift (Grid)"|"Shift (Polar)";
  setLocationMethod(val:string):void;

  shiftedLocation:iLocationInput_old_mixed;

  
  shiftedFODistance:number;
  shiftedOTLineRad:number;
}


