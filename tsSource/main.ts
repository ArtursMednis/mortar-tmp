import { mortarTargetBipartiteGraph, Mortar_old_mixed, Target, FO, iMortarTargetBipartiteGraph} from "./createDomElements";
import { Map } from "./createMap";
import { iMortar_, iTarget_, iGeoLocationElement_old_mixed } from "./basicTypes";
import { calcMortarFireDataGrid, calcMortarFireDataPolar, calcMortarFireDataShiftGrid, calcMortarFireDataShiftPolar } from "./mortarCalcFunctions";
import { mil2rad } from "./coordTransformFunctions";




class FireMission{
  mortars: iMortar_[] = [];
  targets: iTarget_[] = [];
  frontObserver: iGeoLocationElement_old_mixed = new FO();
  
  mortarTargetRelationShip:iMortarTargetBipartiteGraph = new mortarTargetBipartiteGraph();



  private htmlElemMort:HTMLElement = (()=>{
      var divElem = document.createElement("div");
      var createBtn = document.createElement("button");
      createBtn.innerHTML = "Add mortar";
      createBtn.className = "addBtn";
      createBtn.onclick = ()=>{this.addMortar()};
      divElem.appendChild(createBtn);
      return divElem;
    })()
  
  private htmlElemTarg:HTMLElement = (()=>{
    var divElem = document.createElement("div");
    var createBtn = document.createElement("button");
    createBtn.innerHTML = "Add target";
    createBtn.className = "addBtn";
    createBtn.onclick = ()=>{this.addTarget()};
    divElem.appendChild(createBtn);
    return divElem;
  })()

  private htmlElemMap:HTMLElement = (()=>{
    var divElem = document.createElement("div");
    return divElem;
  })()

  private htmlElemControls:HTMLElement = (()=>{
    var divElem = document.createElement("div");
    var createBtn = document.createElement("button");
    createBtn.innerHTML = "CALC";
    createBtn.onclick = ()=>{this.calcAllFiringData()};
    divElem.appendChild(createBtn);
    
    var updateMapBtn = document.createElement("button");
    updateMapBtn.innerHTML = "Update map";
    updateMapBtn.onclick = ()=>{this.updateMap()};
    divElem.appendChild(updateMapBtn);
    
    
    return divElem;

  })()

  private map:Map;


  private htmlElemFO:HTMLElement = document.createElement("div");
  _htmlElem:HTMLElement = document.createElement("div");
  
  get htmlElem(){
    return this._htmlElem;
  }

  constructor(){
    this.mortarTargetRelationShip.mortars = this.mortars;
    this.mortarTargetRelationShip.targets = this.targets;
    this.map = new Map(this.mortars,this.targets,this.frontObserver,this.mortarTargetRelationShip);

    this.creteHtmlStructure();

    this.addMortar();
    this.addTarget();
    
  }

  private creteHtmlStructure(){
    this.htmlElemFO.appendChild(this.frontObserver.htmlElem);
    //this.htmlElemMap.appendChild(this.map.mapSvg);

    this._htmlElem.appendChild(this.htmlElemMort);
    this._htmlElem.appendChild(this.htmlElemFO);
    this._htmlElem.appendChild(this.htmlElemTarg);
    this._htmlElem.appendChild(this.htmlElemControls);
    this._htmlElem.appendChild(this.htmlElemMap);

  }

  addMortar(){
    var previousMortar; 
    if(this.mortars.length != 0){
      previousMortar = this.mortars[this.mortars.length-1];
    }
    var mortar = new Mortar_old_mixed(previousMortar);
    mortar.MTRelationShipInput.MTRelationships = this.mortarTargetRelationShip;
    this.mortars.push(mortar);
    if(this.targets.length != 0){
      var lastTg = this.targets[this.targets.length-1];
      this.mortarTargetRelationShip.addPair(mortar,lastTg);
    }

    this.htmlElemMort.appendChild(mortar.htmlElem);

    mortar.onRemove = ()=>{
      mortar.htmlElem.parentElement!.removeChild(mortar.htmlElem);

      this.mortarTargetRelationShip.removeTargetsForMortar(mortar);
      
      for(var i = this.mortars.length - 1; i >= 0; i--) {
        if(this.mortars[i] === mortar) {
          this.mortars.splice(i, 1);
        }
      }
      this.updateAllRelationShips();
    }



  }

  addTarget(){
    var previousTarget; 
    if(this.targets.length != 0){
      previousTarget = this.targets[this.targets.length-1];
    }
    var target = new Target(previousTarget);
    target.MTRelationShipInput.MTRelationships = this.mortarTargetRelationShip;
    this.targets.push(target);
    if(this.mortars.length != 0){
      var lastMrt = this.mortars[this.mortars.length-1];
      this.mortarTargetRelationShip.addPair(lastMrt,target);
    }

    this.htmlElemTarg.appendChild(target.htmlElem);
    target.onRemove = ()=>{

      target.htmlElem.parentElement!.removeChild(target.htmlElem);

      //  !!!
      this.mortarTargetRelationShip.removeMortarsForTarget(target);
      
      for(var i = this.targets.length - 1; i >= 0; i--) {
        //  !!!
        if(this.targets[i] === target) {
          this.targets.splice(i, 1);
        }
      }
      this.updateAllRelationShips();
    }
    target.frontObserver = this.frontObserver;

  }


  updateAllRelationShips(){
    this.mortars.forEach((updateUnit)=>{
      updateUnit.updateRelationShips();
    })
    this.targets.forEach((updateUnit)=>{
      updateUnit.updateRelationShips();
    })
  }

  updateMap(){
    this.map.creataMap();
    this.htmlElemMap.innerHTML = this.map.mapSvg.outerHTML;
  }

  calcAllFiringData(){
    this.mortars.forEach((mortarF)=>{
      mortarF.resaultsDiv.innerHTML = "";
    })
    
  
    for(var i=0;i<this.mortarTargetRelationShip.edges.length;i++){
      var pair = this.mortarTargetRelationShip.edges[i];
      var locateMethod = pair.target.getLocationMethod();
      pair.mortar.addLineToResaults("Fire data on " + pair.target.DisplayTitle + " - method: " + locateMethod);
      switch(locateMethod){
        case "Grid": calcMortarFireDataGrid(pair.mortar,pair.target); break;
        case "Polar": calcMortarFireDataPolar(pair.mortar,pair.target,this.frontObserver); break;
        case "Shift (Grid)": calcMortarFireDataShiftGrid(pair.mortar,pair.target); break;
        case "Shift (Polar)": calcMortarFireDataShiftPolar(pair.mortar,pair.target,this.frontObserver); break;
      }
    }
  }


  createLinearTarget(){
    var baseTarget:iTarget_ = this.targets[0];
    baseTarget.offsetCorrections();
    var baseTargetEast = baseTarget.location.east;
    var baseTargetNorth = baseTarget.location.north;
    var FODistance = baseTarget.FODistance;
    var OTLine = baseTarget.OTLineMil;
  
    while(this.targets.length >0){
      var loopTarget = this.targets.pop();
      loopTarget!.htmlElem.parentElement!.removeChild(loopTarget!.htmlElem);
    }
  
    this.mortarTargetRelationShip.edges.length = 0;
  
    var attitudeRad:number = mil2rad(Number((<HTMLInputElement>document.getElementById("linTGAtt")).value));// getAttitude();
    var targetLength:number =  Number((<HTMLInputElement>document.getElementById("linTGLen")).value);// getLength();
    var subTargetCount = Number((<HTMLInputElement>document.getElementById("linTGSubTGCount")).value); // getTargetCount();
  
    var distanceBetweenTargets = targetLength/subTargetCount;
    var attSin = Math.sin(attitudeRad);
    var attCos = Math.cos(attitudeRad);
  
    var targetsPerFU = 0;
    if(this.mortars.length != 0)
      targetsPerFU = Math.ceil(subTargetCount/this.mortars.length);
  
    var currentTargetForFU = targetsPerFU;
    var mortarCounter = 0;
  
    for(var i=0; i<subTargetCount; i++){
      //@ts-ignore
      var newTarget:iTarget_ = new Target();
      var positionOnTargetLine = (-targetLength/2+distanceBetweenTargets/2+i*distanceBetweenTargets);
      newTarget.location.east = baseTargetEast + attSin*positionOnTargetLine;
      newTarget.location.north = baseTargetNorth + attCos*positionOnTargetLine;
      newTarget.OTLineMil = OTLine;
      newTarget.FODistance = FODistance;
  
      //linearTargetElements.push(newTarget);
      
      if(currentTargetForFU == 0){
        currentTargetForFU = targetsPerFU;
        mortarCounter++;
      }
      var mortar = this.mortars[mortarCounter];
      if(mortar){
        this.mortarTargetRelationShip.addPair(mortar,newTarget);
      }
      currentTargetForFU--;
      
    }
  }


  createFieldTarget(){
    var baseTarget:iTarget_ = this.targets[0];
    baseTarget.offsetCorrections();
  
    var baseTargetEast = baseTarget.location.east;
    var baseTargetNorth = baseTarget.location.north;
    var FODistance = baseTarget.FODistance;
    var OTLine = baseTarget.OTLineMil;
  
    while(this.targets.length >0){
      var loopTarget = this.targets.pop();
      loopTarget!.htmlElem.parentElement!.removeChild(loopTarget!.htmlElem);
    }
  
    this.mortarTargetRelationShip.edges.length = 0;
  
    var attitudeRad:number = mil2rad(Number((<HTMLInputElement>document.getElementById("linTGAtt")).value));// getAttitude();
    var targetLength:number =  Number((<HTMLInputElement>document.getElementById("linTGLen")).value);// getLength();
    var targetWidth:number =  Number((<HTMLInputElement>document.getElementById("linTGWidth")).value);// getWidth();
    var targetsPerLength = Number((<HTMLInputElement>document.getElementById("linTGSubTGCount")).value); // getTargetCount();
    var targetsPerWidth = Number((<HTMLInputElement>document.getElementById("widthTGSubTGCount")).value); // getTargetCount();
  
    var linDistanceBetweenTargets = targetLength/targetsPerLength;
    var lateralDistanceBetweenTargets = targetWidth/targetsPerWidth;
    var attSin = Math.sin(attitudeRad);
    var attCos = Math.cos(attitudeRad);
  
    var attSinLat = Math.sin(attitudeRad + Math.PI/2);
    var attCosLat = Math.cos(attitudeRad + Math.PI/2);
  
  
    var targetsPerFU = 0;
    if(this.mortars.length != 0)
      targetsPerFU = Math.ceil((targetsPerLength)*targetsPerWidth/this.mortars.length);
  
    var currentTargetForFU = targetsPerFU;
    var mortarCounter = 0;
  
  
    for(var i=0; i<targetsPerLength; i++){
      var positionOnTargetLine = (-targetLength/2+linDistanceBetweenTargets/2+i*linDistanceBetweenTargets);
  
      for(var k=0; k<targetsPerWidth; k++){
        var positionOnTargetWidthLine = (-targetWidth/2+lateralDistanceBetweenTargets/2+k*lateralDistanceBetweenTargets);
  
        //@ts-ignore
        var newTarget:iTarget_ = new Target();
        
        newTarget.location.east = baseTargetEast + attSin*positionOnTargetLine + attCosLat*positionOnTargetWidthLine;
        newTarget.location.north = baseTargetNorth + attCos*positionOnTargetLine + attSinLat*positionOnTargetWidthLine;
        newTarget.OTLineMil = OTLine;
        newTarget.FODistance = FODistance;
  
        //linearTargetElements.push(newTarget);
  
  
  
        if(currentTargetForFU == 0){
          currentTargetForFU = targetsPerFU;
          mortarCounter++;
        }
        var mortar = this.mortars[mortarCounter];
        if(mortar){
          this.mortarTargetRelationShip.addPair(mortar,newTarget);
        }
        currentTargetForFU--;
      }
    }
  }
  

  applyCorrectionsToAllTargets(){
    var shiftedTarget:iTarget_;
    for(var i = 0; i < this.targets.length; i++){
      var loopTarget = this.targets[i];
      if(loopTarget.AddCorrection != 0 || loopTarget.DropCorrection != 0 || loopTarget.LeftCorrection != 0 || loopTarget.RightCorrection != 0){
        shiftedTarget = loopTarget;
        break;
      }
    }
  
    if(shiftedTarget!){
      var shiftedAdd = shiftedTarget!.AddCorrection;
      var shiftedDrop = shiftedTarget!.DropCorrection;
      var shiftedLeft = shiftedTarget!.LeftCorrection;
      var shiftedRight = shiftedTarget!.RightCorrection;
  
      var locMethod = shiftedTarget!.getLocationMethod();
      var foDist = shiftedTarget!.FODistance;
      var otLine =  shiftedTarget!.OTLineMil;
      for(var i = 0; i < this.targets.length; i++){
        var loopTarget = this.targets[i];
        loopTarget.AddCorrection = shiftedAdd;
        loopTarget.DropCorrection = shiftedDrop
        loopTarget.LeftCorrection = shiftedLeft;
        loopTarget.RightCorrection = shiftedRight;
        
        loopTarget.setLocationMethod(locMethod);
           
        loopTarget.FODistance = foDist;
        loopTarget.OTLineMil = otLine;
  
        loopTarget.offsetCorrections();
      }
    }
  
  }




  // visas html failā lietotās funkcijas ievietot šajā klasē, kā piekļuves punktā
  // padomāt par šo: apakšējās klases par fireMission neko nezina, bet fireMission ir kā observeris apakšējām klasēm un pats izdara kas vajadzīgs
      // iGeoLocationElement šeit implementēt observable modeli
}

var currentMission = new FireMission();
document.body.appendChild(currentMission.htmlElem);




//@ts-ignore
window.currentMission = currentMission;

alert("ARM 26.062021");

//@ts-ignore
//window.addMortar = currentMission.addMortar; window.addTarget = currentMission.addTarget; window.calcAllFiringData = currentMission.calcAllFiringData;  window.changeTargetOrderForFU = currentMission.mortarTargetRelationShip.reversePairingOrder;window.offSetAllCorrections = currentMission.applyCorrectionsToAllTargets;
//@ts-ignore
//window.creataMap = creataMap;
