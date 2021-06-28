export class ObjectInMap {  
  public east:number;
  public north:number;
  public name:string;
  public disabled:boolean;

  constructor(previousElem?:ObjectInMap, name?:string){
    this.east = 0;
    this.north = 0;
    this.disabled = false;
    this.name = (name) ? name : "";
    
    if(previousElem){
      this.east = previousElem.east;
      this.north = previousElem.north;
    }
  }

}