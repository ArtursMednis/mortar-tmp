import {iMortar_, iTarget_, iLocationInput_old_mixed, iGeoLocationElement_old_mixed} from "./basicTypes";
import { offSetShiftGrid, offSetShiftPolar } from "./mortarCalcFunctions";
import { mil2rad, rad2mil } from "./coordTransformFunctions";



class NumericInputField{
  private static inputIdNumerator:number = 0;
  private _htmlElem:HTMLElement;
  private inputField:HTMLInputElement;
  constructor(caption:string){
    this.inputField = document.createElement("input");
    this.inputField.id = "numericInput" + NumericInputField.inputIdNumerator.toString();
    NumericInputField.inputIdNumerator++;
    this.inputField.name = caption;
    this.inputField.type = "number";
    this.inputField.value = "0";
    this.inputField.step = "any";
  
    var inputLabel = document.createElement("label");
    inputLabel.htmlFor = this.inputField.id;
    inputLabel.innerHTML = caption;

    this._htmlElem = document.createElement("div");
  
    this._htmlElem.appendChild(inputLabel);
    this._htmlElem.appendChild(this.inputField);
    
  }
  get htmlElem(){
    return this._htmlElem;
  }
  get value():number{
    var inputVal:unknown = this.inputField.value;
    return (isNaN(<number>inputVal)) ? 0 : Number(inputVal);
  }
  set value(val:number){
    this.inputField.value = val.toString();
  }
  get disabled(){
    return this.inputField.disabled;
  }
  set disabled(val:boolean){
    this.inputField.disabled = val;
  }
}

class RadioInputField{
  private static inputIdNumerator:number = 0;
  private static radioGroupNumerator:number = 0;
  private _htmlElem:HTMLElement = document.createElement("div");

  private radioFieldsWithValues:{field:HTMLInputElement,val:string}[] = [];

  constructor(options:string[]){
    options.forEach(
      (radioOption:string,indexNum:number)=>{
        var inputField = document.createElement("input");
        inputField.id = "radioInput" + RadioInputField.inputIdNumerator.toString();
        RadioInputField.inputIdNumerator++;
        inputField.name = "radioInputGroup"+ RadioInputField.radioGroupNumerator.toString();
        inputField.type = "radio";

        var inputLabel = document.createElement("label");
        inputLabel.htmlFor = inputField.id;
        inputLabel.innerHTML = radioOption;

        this._htmlElem.appendChild(inputLabel);
        this._htmlElem.appendChild(inputField);
        if(indexNum+1 != options.length){
          this._htmlElem.appendChild(document.createElement("br"));
        }

        this.radioFieldsWithValues.push({field:inputField,val:radioOption});
      }
    )
    RadioInputField.radioGroupNumerator++;
  }
  get htmlElem(){
    return this._htmlElem;
  }
  get value():string{
    for(var k=0;k<this.radioFieldsWithValues.length;k++){
      var fieldVithVal = this.radioFieldsWithValues[k];
      if(fieldVithVal.field.checked){
        return fieldVithVal.val;
      }
    }
    return "";
  }
  set value(val:string){
    for(var k=0;k<this.radioFieldsWithValues.length;k++){
      var fieldVithVal = this.radioFieldsWithValues[k];
      if(fieldVithVal.val == val){
        fieldVithVal.field.checked = true;
      }
      else {
        fieldVithVal.field.checked = false;
      }
    }
  }
}




class Location implements iLocationInput_old_mixed{  
  private _htmlElem:HTMLElement = document.createElement("div");
  private eastInputElem: NumericInputField = new NumericInputField("East");
  private northInputElem: NumericInputField = new NumericInputField("North");

  constructor(previousElem?:iLocationInput_old_mixed){
    this._htmlElem.className = "locationInputSet";
    this._htmlElem.appendChild(this.eastInputElem.htmlElem);
    this._htmlElem.appendChild(this.northInputElem.htmlElem);

    if(previousElem){
      this.east = previousElem.east;
      this.north = previousElem.north;
    }
  }

  get east(){
    return this.eastInputElem.value;
  }
  set east(val:number){
    this.eastInputElem.value = val;
  }
  get north(){
    return this.northInputElem.value;
  }
  set north(val:number){
    this.northInputElem.value = val;
  }
  get htmlElem(){
    return this._htmlElem;
  }
  get disabled(){
    return this.eastInputElem.disabled || this.northInputElem.disabled;
  }
  set disabled(val:boolean){
    this.eastInputElem.disabled = val;
    this.northInputElem.disabled = val;
  }
}


abstract class GeoLocationElement implements iGeoLocationElement_old_mixed{
  location:iLocationInput_old_mixed;
  protected _htmlElem:HTMLElement = document.createElement("div");
  No: number;
  DisplayTitle: string;
  
  constructor(prevLoc?:iGeoLocationElement_old_mixed,ObjectType?:string){
    this.No = (prevLoc) ? prevLoc.No+1 : 1;
    this._htmlElem.className = "fieldSet";
    this.location = (prevLoc) ? new Location(prevLoc.location) : new Location();
    this.DisplayTitle = ((ObjectType) ? ObjectType : "Obj") + "_" + this.No.toString();
    this.creteHeaderWithLocationElements();
  }

  get htmlElem(){
    return this._htmlElem;
  }

  private creteHeaderWithLocationElements(){
    var titleElem = document.createElement("h3");
    titleElem.innerHTML = this.DisplayTitle;
    this._htmlElem.appendChild(titleElem);

    this._htmlElem.appendChild(this.location.htmlElem);
  }
  onRemove = ()=>{};
}


export class Mortar_old_mixed extends GeoLocationElement implements iMortar_{
  MTRelationShipInput:MTRelationShipInput = new MTRelationShipInput(this);

  constructor(prevMortar?:iMortar_){
    super(prevMortar,"Mortar");
    
    var caption1 = document.createElement("h4");
    caption1.innerHTML = "Targets for mortar";
    this._htmlElem.appendChild(caption1);

    this._htmlElem.appendChild(this.MTRelationShipInput.htmlElem);

    this.resaultsDiv = document.createElement("div");
    this._htmlElem.appendChild(this.resaultsDiv);
    this.addLineToResaults = (text:string)=>{
      var line = document.createElement("p");
      line.innerHTML = text;
      this.resaultsDiv.appendChild(line);
    }

    var spanElement = document.createElement("button");
    spanElement.innerHTML = "Remove mortar";
    spanElement.addEventListener("click",()=>{
      this.onRemove();
    });
    this._htmlElem.appendChild(spanElement);
  }

  // asignAbstractProperties(prevLoc?:iGeoLocationElement){
  //   this.DisplayTitle = "Mortar_" + this.No.toString();
  // }


  updateRelationShips(){
    this.MTRelationShipInput.updateRelationShips();
  }                       //: () => void = ()=>{};
  pairedUnitsElement: HTMLUListElement = document.createElement("ul");
  
  resaultsDiv: HTMLDivElement;
  addLineToResaults: (text: string) => void;
  //ObjectType = "Mortar";
  
  // get DisplayTitle(): string {
  //   return "Mortar_" + this.No.toString();
  // };
  //
}

export class Target extends GeoLocationElement implements iTarget_ {

  updateRelationShips(){
    this.MTRelationShipInput.updateRelationShips();
  }
  pairedUnitsElement: HTMLUListElement = document.createElement("ul");

  shiftedLocation:iLocationInput_old_mixed;
  MTRelationShipInput:MTRelationShipInput = new MTRelationShipInput(this);

  private shiftedOTDistanceElem: NumericInputField = new NumericInputField("Shifted OT distance");
  private shiftedOTLineElem: NumericInputField = new NumericInputField("Shifted OT Line");
  private locationMethodElem: RadioInputField = new RadioInputField(["Grid","Polar","Shift (Grid)","Shift (polar)"]);

  private OTLineInputElem: NumericInputField = new NumericInputField("OT Line");
  private FODistanceInputElem: NumericInputField = new NumericInputField("FO distance");

  private AddCorrectionInputElem: NumericInputField = new NumericInputField("East");
  private DropCorrectionInputElem: NumericInputField = new NumericInputField("East");
  private LeftCorrectionInputElem: NumericInputField = new NumericInputField("East");
  private RightCorrectionInputElem: NumericInputField = new NumericInputField("East");
  frontObserver? : iGeoLocationElement_old_mixed;

  constructor(prevTarget?:iTarget_){
    super(prevTarget,"Target");
      this.shiftedLocation = new Location(this.location);
      this.shiftedLocation.disabled = true;

    this._htmlElem.appendChild(document.createElement("br"));

    var caption0 = document.createElement("h4");
    caption0.innerHTML = "Shifted data";
    this._htmlElem.appendChild(caption0);

    this._htmlElem.appendChild(this.shiftedLocation.htmlElem);


    this.shiftedOTDistanceElem.disabled = true;
    this._htmlElem.appendChild(this.shiftedOTDistanceElem.htmlElem);

    this.shiftedOTLineElem.disabled = true;
    this._htmlElem.appendChild(this.shiftedOTLineElem.htmlElem);

    var caption1 = document.createElement("h4");
    caption1.innerHTML = "Firing units for target";
    this._htmlElem.appendChild(caption1);

    this._htmlElem.appendChild(this.MTRelationShipInput.htmlElem);
    
    var caption2 = document.createElement("h4");
    caption2.innerHTML = "Target location method";
    this._htmlElem.appendChild(caption2);
    this._htmlElem.appendChild(this.locationMethodElem.htmlElem);
 

    this._htmlElem.appendChild(document.createElement("br"));

  
    this._htmlElem.appendChild(this.OTLineInputElem.htmlElem);
    this._htmlElem.appendChild(this.FODistanceInputElem.htmlElem);

    this._htmlElem.appendChild(document.createElement("br"));

    var caption3 = document.createElement("h4");
    caption3.innerHTML = "Target correction";

    this._htmlElem.appendChild(caption3);


    this._htmlElem.appendChild(this.AddCorrectionInputElem.htmlElem);
    this._htmlElem.appendChild(this.DropCorrectionInputElem.htmlElem);
    this._htmlElem.appendChild(this.LeftCorrectionInputElem.htmlElem);
    this._htmlElem.appendChild(this.RightCorrectionInputElem.htmlElem);

    this._htmlElem.appendChild(document.createElement("br"));

    var offsetBtn = document.createElement("button");
    offsetBtn.innerHTML = "Save Corrections";
    offsetBtn.addEventListener("click",()=>{
      this.offsetCorrections();
    });
    this._htmlElem.appendChild(offsetBtn);


    var spanElement = document.createElement("button");
    spanElement.innerHTML = "Remove Target";
    spanElement.addEventListener("click",()=>{
      this.onRemove();
    });
    this._htmlElem.appendChild(spanElement);

    document.getElementById("targets")?.appendChild(this._htmlElem);
  }
  get OTLineMil(){
    return this.OTLineInputElem.value;
  }
  set OTLineMil(val:number){
    this.OTLineInputElem.value = val;
  }
  
  get OTLineRad(){
    return mil2rad(this.OTLineInputElem.value);
  }
  set OTLineRad(val_Radians:number){
    this.OTLineInputElem.value = rad2mil(val_Radians);
  }
  get FODistance(){
    return this.FODistanceInputElem.value;
  }
  set FODistance(val:number){
    this.FODistanceInputElem.value = val;
  }
  get AddCorrection(){
    return this.AddCorrectionInputElem.value;
  }
  set AddCorrection(val:number){
    this.AddCorrectionInputElem.value = val;
  }
  get DropCorrection(){
    return this.DropCorrectionInputElem.value;
  }
  set DropCorrection(val:number){
    this.DropCorrectionInputElem.value = val;
  }
  get LeftCorrection(){
    return this.LeftCorrectionInputElem.value;
  }
  set LeftCorrection(val:number){
    this.LeftCorrectionInputElem.value=val;
  }
  get RightCorrection(){
    return this.RightCorrectionInputElem.value;
  }
  set RightCorrection(val:number){
    this.RightCorrectionInputElem.value = val;
  }


  setLocationMethod(val: string): void {
    throw new Error("Method not implemented.");
  }
  get shiftedFODistance(){
    return this.shiftedOTDistanceElem.value;
  }
  set shiftedFODistance(val:number){
    this.shiftedOTDistanceElem.value = val;
  }

  get shiftedOTLineRad(){
    return mil2rad(this.shiftedOTLineElem.value);
  }
  set shiftedOTLineRad(val_Radians:number){
    this.shiftedOTLineElem.value = rad2mil(val_Radians);
  }

  getLocationMethod(){
    var selectedRadio = this.locationMethodElem.value;
    if(selectedRadio =="Grid")
      return "Grid";
    if(selectedRadio =="Polar")
      return "Polar";
    if(selectedRadio =="Shift (Grid)")
      return "Shift (Grid)";
    if(selectedRadio =="Shift (Polar)")
      return "Shift (Polar)";

    return "Grid";
  }

  getInputOTLine(){return mil2rad(this.OTLineInputElem.value);};


  offsetCorrections(){
    var locateMethod = this.getLocationMethod();
    if(locateMethod == "Shift (Grid)"){
      
      offSetShiftGrid(this);
    }
    if(locateMethod == "Shift (Polar)" && (this.frontObserver!)){
      
      offSetShiftPolar(this,this.frontObserver!);
    }
  }

}

export class FO extends GeoLocationElement {
  constructor(){
    super(undefined,"Front_Observer");
  }
}


class MTRelationShipInput {  
  private _htmlElem:HTMLElement = document.createElement("div");
  private pairedUnitsElement = document.createElement("ul");
  private MTObject:iMortar_|iTarget_;
  MTRelationships:mortarTargetBipartiteGraph|null = null;

  constructor(MTObject:iMortar_|iTarget_){
    this._htmlElem.className = "MTRelationsInputSet";
    this._htmlElem.appendChild(this.pairedUnitsElement);
    this.MTObject = MTObject;
  }

  get htmlElem(){
    return this._htmlElem;
  }

  updateRelationShips():void{
    this.pairedUnitsElement.innerHTML = "";
    if(this.MTRelationships == null){
      return;
    }

    for(var i = 0; i<this.MTRelationships.edges.length;i++){
      var pair = this.MTRelationships.edges[i];

      if(this.MTObject == pair.mortar || this.MTObject == pair.target){
        var liElement = document.createElement("li");
        liElement.innerHTML = (this.MTObject == pair.mortar) ? pair.target.DisplayTitle : pair.mortar.DisplayTitle;

        var spanElement = document.createElement("span");
        spanElement.innerHTML = "&times;";
        var MTRelationships = this.MTRelationships!;
        (function(freezPair){
          spanElement.addEventListener("click",()=>{
            MTRelationships!.removePair(freezPair.mortar,freezPair.target);
            freezPair.mortar.updateRelationShips();
            freezPair.target.updateRelationShips();
          });
        })(pair)

        liElement.appendChild(spanElement);
        this.pairedUnitsElement.appendChild(liElement);
      }

    }

    var addSelectElement = document.createElement("select");
    var liSelectElement = document.createElement("li");
    liSelectElement.appendChild(addSelectElement);
    this.pairedUnitsElement.appendChild(liSelectElement);


    var optionEmpty = document.createElement("option");
    optionEmpty.value = "";
    optionEmpty.innerHTML = "";
    addSelectElement.appendChild(optionEmpty);

    var isMortar = this.MTObject instanceof Mortar_old_mixed;

    var pairableUnits = (isMortar) ? this.MTRelationships.targets! : this.MTRelationships.mortars!;
    for(var k = 0; k<pairableUnits.length; k++){
      var option = document.createElement("option");
      option.value = k.toString();
      option.innerHTML = pairableUnits[k].DisplayTitle;
      addSelectElement.appendChild(option);
    }

    addSelectElement.addEventListener("change",()=>{
      if(addSelectElement.value == ""){
        return
      }
      var selectedValue = Number(addSelectElement.value);
      var unitToPair = pairableUnits[selectedValue];
      if(isMortar){
        this.MTRelationships!.addPair(this.MTObject as iMortar_,unitToPair as iTarget_);
      }
      else{
        this.MTRelationships!.addPair(unitToPair as iMortar_,this.MTObject as iTarget_);
      }
    })
  }

}



export class mortarTargetBipartiteGraph implements iMortarTargetBipartiteGraph{
  edges: tMortarTargetPair_[] = [];
  mortars: iMortar_[]|null = null;
  targets: iTarget_[]|null = null;

  constructor(){}
  

  addPair(mortar: iMortar_, target: iTarget_){
    var pairExist = false;
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      if(pair.mortar == mortar && pair.target == target){
        pairExist = true;
      }
    }
    if(!pairExist){
      this.edges.push({mortar:mortar,target:target});
      mortar.updateRelationShips();
      target.updateRelationShips();
    }
  }


  removePair(mortar: iMortar_, target: iTarget_){
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      if(pair.mortar == mortar && pair.target == target){
        this.edges.splice(i,1);
      }
    }
  }

  removeTargetsForMortar(mortar: iMortar_){
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      if(pair.mortar == mortar){
        this.edges.splice(i,1);
      }
    }
  };

  removeMortarsForTarget(target: iTarget_){
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      if(pair.target == target){
        this.edges.splice(i,1);
      }
    }
  };
  
  toString(): string {
    var output: string = "";
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      output = output + "M" + pair.mortar.No + "-T" + pair.target.No + "; __ ";      
    }
    return output;
  }

  reversePairingOrder(){
    var dePairedTargets:iTarget_[] = [];
    var dePairedFU:iMortar_[] = []
  
  
    for(var i = this.edges.length - 1 ; i >=0 ; i--){
      var pair = this.edges[i];
      dePairedTargets.push(pair.target);
      dePairedFU.unshift(pair.mortar);
      this.edges.splice(i,1);
    }
  
    for(var k=0; k<dePairedFU.length; k++){
      this.addPair(dePairedFU[k],dePairedTargets[k]);
    }
  }


}

export interface iMortarTargetBipartiteGraph {
  edges:tMortarTargetPair_[];
  mortars: iMortar_[]|null;
  targets: iTarget_[]|null;
  addPair:(mortar:iMortar_,target:iTarget_)=>void;
  removePair:(mortar:iMortar_,target:iTarget_)=>void;
  removeTargetsForMortar:(mortar:iMortar_)=>void;
  removeMortarsForTarget:(target:iTarget_)=>void;
  toString():string;
  reversePairingOrder():void;
}


export type tMortarTargetPair_ = {mortar:iMortar_,target:iTarget_};


