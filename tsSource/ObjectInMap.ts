import { tPointGrid, tPolarPointer } from "./basicTypes";

export class ObjectInMap {
  public east:number;
  public north:number;
  public name:string;
  public disabled:boolean;

    constructor(name?:string, previousElem?:ObjectInMap){
    this.east = 0;
    this.north = 0;
    this.disabled = false;
    this.name = (name) ? name : "";
    
    if(previousElem){
      this.east = previousElem.east;
      this.north = previousElem.north;
    }
  }

    public set PointGrid(val: tPointGrid) {
        this.east = val.east;
        this.north = val.north;
    }

    public get PointGrid() {
        var objPosition: tPointGrid = { east: this.east, north: this.north };
        return objPosition;
    }

}