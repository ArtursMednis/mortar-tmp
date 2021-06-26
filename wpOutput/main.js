/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _createMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




class FireMission {
    constructor() {
        this.mortars = [];
        this.targets = [];
        this.frontObserver = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["FO"]();
        this.mortarTargetRelationShip = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortarTargetBipartiteGraph"]();
        this.htmlElemMort = (() => {
            var divElem = document.createElement("div");
            var createBtn = document.createElement("button");
            createBtn.innerHTML = "Add mortar";
            createBtn.className = "addBtn";
            createBtn.onclick = () => { this.addMortar(); };
            divElem.appendChild(createBtn);
            return divElem;
        })();
        this.htmlElemTarg = (() => {
            var divElem = document.createElement("div");
            var createBtn = document.createElement("button");
            createBtn.innerHTML = "Add target";
            createBtn.className = "addBtn";
            createBtn.onclick = () => { this.addTarget(); };
            divElem.appendChild(createBtn);
            return divElem;
        })();
        this.htmlElemMap = (() => {
            var divElem = document.createElement("div");
            return divElem;
        })();
        this.htmlElemControls = (() => {
            var divElem = document.createElement("div");
            var createBtn = document.createElement("button");
            createBtn.innerHTML = "CALC";
            createBtn.onclick = () => { this.calcAllFiringData(); };
            divElem.appendChild(createBtn);
            var updateMapBtn = document.createElement("button");
            updateMapBtn.innerHTML = "Update map";
            updateMapBtn.onclick = () => { this.updateMap(); };
            divElem.appendChild(updateMapBtn);
            return divElem;
        })();
        this.htmlElemFO = document.createElement("div");
        this._htmlElem = document.createElement("div");
        this.mortarTargetRelationShip.mortars = this.mortars;
        this.mortarTargetRelationShip.targets = this.targets;
        this.map = new _createMap__WEBPACK_IMPORTED_MODULE_1__["Map"](this.mortars, this.targets, this.frontObserver, this.mortarTargetRelationShip);
        this.creteHtmlStructure();
        this.addMortar();
        this.addTarget();
    }
    get htmlElem() {
        return this._htmlElem;
    }
    creteHtmlStructure() {
        this.htmlElemFO.appendChild(this.frontObserver.htmlElem);
        //this.htmlElemMap.appendChild(this.map.mapSvg);
        this._htmlElem.appendChild(this.htmlElemMort);
        this._htmlElem.appendChild(this.htmlElemFO);
        this._htmlElem.appendChild(this.htmlElemTarg);
        this._htmlElem.appendChild(this.htmlElemControls);
        this._htmlElem.appendChild(this.htmlElemMap);
    }
    addMortar() {
        var previousMortar;
        if (this.mortars.length != 0) {
            previousMortar = this.mortars[this.mortars.length - 1];
        }
        var mortar = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Mortar"](previousMortar);
        mortar.MTRelationShipInput.MTRelationships = this.mortarTargetRelationShip;
        this.mortars.push(mortar);
        if (this.targets.length != 0) {
            var lastTg = this.targets[this.targets.length - 1];
            this.mortarTargetRelationShip.addPair(mortar, lastTg);
        }
        this.htmlElemMort.appendChild(mortar.htmlElem);
        mortar.onRemove = () => {
            mortar.htmlElem.parentElement.removeChild(mortar.htmlElem);
            this.mortarTargetRelationShip.removeTargetsForMortar(mortar);
            for (var i = this.mortars.length - 1; i >= 0; i--) {
                if (this.mortars[i] === mortar) {
                    this.mortars.splice(i, 1);
                }
            }
            this.updateAllRelationShips();
        };
    }
    addTarget() {
        var previousTarget;
        if (this.targets.length != 0) {
            previousTarget = this.targets[this.targets.length - 1];
        }
        var target = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Target"](previousTarget);
        target.MTRelationShipInput.MTRelationships = this.mortarTargetRelationShip;
        this.targets.push(target);
        if (this.mortars.length != 0) {
            var lastMrt = this.mortars[this.mortars.length - 1];
            this.mortarTargetRelationShip.addPair(lastMrt, target);
        }
        this.htmlElemTarg.appendChild(target.htmlElem);
        target.onRemove = () => {
            target.htmlElem.parentElement.removeChild(target.htmlElem);
            //  !!!
            this.mortarTargetRelationShip.removeMortarsForTarget(target);
            for (var i = this.targets.length - 1; i >= 0; i--) {
                //  !!!
                if (this.targets[i] === target) {
                    this.targets.splice(i, 1);
                }
            }
            this.updateAllRelationShips();
        };
        target.frontObserver = this.frontObserver;
    }
    updateAllRelationShips() {
        this.mortars.forEach((updateUnit) => {
            updateUnit.updateRelationShips();
        });
        this.targets.forEach((updateUnit) => {
            updateUnit.updateRelationShips();
        });
    }
    updateMap() {
        this.map.creataMap();
        this.htmlElemMap.innerHTML = this.map.mapSvg.outerHTML;
    }
    calcAllFiringData() {
        this.mortars.forEach((mortarF) => {
            mortarF.resaultsDiv.innerHTML = "";
        });
        for (var i = 0; i < this.mortarTargetRelationShip.edges.length; i++) {
            var pair = this.mortarTargetRelationShip.edges[i];
            var locateMethod = pair.target.getLocationMethod();
            pair.mortar.addLineToResaults("Fire data on " + pair.target.DisplayTitle + " - method: " + locateMethod);
            switch (locateMethod) {
                case "Grid":
                    Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_2__["calcMortarFireDataGrid"])(pair.mortar, pair.target);
                    break;
                case "Polar":
                    Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_2__["calcMortarFireDataPolar"])(pair.mortar, pair.target, this.frontObserver);
                    break;
                case "Shift (Grid)":
                    Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_2__["calcMortarFireDataShiftGrid"])(pair.mortar, pair.target);
                    break;
                case "Shift (Polar)":
                    Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_2__["calcMortarFireDataShiftPolar"])(pair.mortar, pair.target, this.frontObserver);
                    break;
            }
        }
    }
    createLinearTarget() {
        var baseTarget = this.targets[0];
        baseTarget.offsetCorrections();
        var baseTargetEast = baseTarget.location.east;
        var baseTargetNorth = baseTarget.location.north;
        var FODistance = baseTarget.FODistance;
        var OTLine = baseTarget.OTLineMil;
        while (this.targets.length > 0) {
            var loopTarget = this.targets.pop();
            loopTarget.htmlElem.parentElement.removeChild(loopTarget.htmlElem);
        }
        this.mortarTargetRelationShip.edges.length = 0;
        var attitudeRad = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_3__["mil2rad"])(Number(document.getElementById("linTGAtt").value)); // getAttitude();
        var targetLength = Number(document.getElementById("linTGLen").value); // getLength();
        var subTargetCount = Number(document.getElementById("linTGSubTGCount").value); // getTargetCount();
        var distanceBetweenTargets = targetLength / subTargetCount;
        var attSin = Math.sin(attitudeRad);
        var attCos = Math.cos(attitudeRad);
        var targetsPerFU = 0;
        if (this.mortars.length != 0)
            targetsPerFU = Math.ceil(subTargetCount / this.mortars.length);
        var currentTargetForFU = targetsPerFU;
        var mortarCounter = 0;
        for (var i = 0; i < subTargetCount; i++) {
            //@ts-ignore
            var newTarget = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Target"]();
            var positionOnTargetLine = (-targetLength / 2 + distanceBetweenTargets / 2 + i * distanceBetweenTargets);
            newTarget.location.east = baseTargetEast + attSin * positionOnTargetLine;
            newTarget.location.north = baseTargetNorth + attCos * positionOnTargetLine;
            newTarget.OTLineMil = OTLine;
            newTarget.FODistance = FODistance;
            //linearTargetElements.push(newTarget);
            if (currentTargetForFU == 0) {
                currentTargetForFU = targetsPerFU;
                mortarCounter++;
            }
            var mortar = this.mortars[mortarCounter];
            if (mortar) {
                this.mortarTargetRelationShip.addPair(mortar, newTarget);
            }
            currentTargetForFU--;
        }
    }
    createFieldTarget() {
        var baseTarget = this.targets[0];
        baseTarget.offsetCorrections();
        var baseTargetEast = baseTarget.location.east;
        var baseTargetNorth = baseTarget.location.north;
        var FODistance = baseTarget.FODistance;
        var OTLine = baseTarget.OTLineMil;
        while (this.targets.length > 0) {
            var loopTarget = this.targets.pop();
            loopTarget.htmlElem.parentElement.removeChild(loopTarget.htmlElem);
        }
        this.mortarTargetRelationShip.edges.length = 0;
        var attitudeRad = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_3__["mil2rad"])(Number(document.getElementById("linTGAtt").value)); // getAttitude();
        var targetLength = Number(document.getElementById("linTGLen").value); // getLength();
        var targetWidth = Number(document.getElementById("linTGWidth").value); // getWidth();
        var targetsPerLength = Number(document.getElementById("linTGSubTGCount").value); // getTargetCount();
        var targetsPerWidth = Number(document.getElementById("widthTGSubTGCount").value); // getTargetCount();
        var linDistanceBetweenTargets = targetLength / targetsPerLength;
        var lateralDistanceBetweenTargets = targetWidth / targetsPerWidth;
        var attSin = Math.sin(attitudeRad);
        var attCos = Math.cos(attitudeRad);
        var attSinLat = Math.sin(attitudeRad + Math.PI / 2);
        var attCosLat = Math.cos(attitudeRad + Math.PI / 2);
        var targetsPerFU = 0;
        if (this.mortars.length != 0)
            targetsPerFU = Math.ceil((targetsPerLength) * targetsPerWidth / this.mortars.length);
        var currentTargetForFU = targetsPerFU;
        var mortarCounter = 0;
        for (var i = 0; i < targetsPerLength; i++) {
            var positionOnTargetLine = (-targetLength / 2 + linDistanceBetweenTargets / 2 + i * linDistanceBetweenTargets);
            for (var k = 0; k < targetsPerWidth; k++) {
                var positionOnTargetWidthLine = (-targetWidth / 2 + lateralDistanceBetweenTargets / 2 + k * lateralDistanceBetweenTargets);
                //@ts-ignore
                var newTarget = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Target"]();
                newTarget.location.east = baseTargetEast + attSin * positionOnTargetLine + attCosLat * positionOnTargetWidthLine;
                newTarget.location.north = baseTargetNorth + attCos * positionOnTargetLine + attSinLat * positionOnTargetWidthLine;
                newTarget.OTLineMil = OTLine;
                newTarget.FODistance = FODistance;
                //linearTargetElements.push(newTarget);
                if (currentTargetForFU == 0) {
                    currentTargetForFU = targetsPerFU;
                    mortarCounter++;
                }
                var mortar = this.mortars[mortarCounter];
                if (mortar) {
                    this.mortarTargetRelationShip.addPair(mortar, newTarget);
                }
                currentTargetForFU--;
            }
        }
    }
    applyCorrectionsToAllTargets() {
        var shiftedTarget;
        for (var i = 0; i < this.targets.length; i++) {
            var loopTarget = this.targets[i];
            if (loopTarget.AddCorrection != 0 || loopTarget.DropCorrection != 0 || loopTarget.LeftCorrection != 0 || loopTarget.RightCorrection != 0) {
                shiftedTarget = loopTarget;
                break;
            }
        }
        if (shiftedTarget) {
            var shiftedAdd = shiftedTarget.AddCorrection;
            var shiftedDrop = shiftedTarget.DropCorrection;
            var shiftedLeft = shiftedTarget.LeftCorrection;
            var shiftedRight = shiftedTarget.RightCorrection;
            var locMethod = shiftedTarget.getLocationMethod();
            var foDist = shiftedTarget.FODistance;
            var otLine = shiftedTarget.OTLineMil;
            for (var i = 0; i < this.targets.length; i++) {
                var loopTarget = this.targets[i];
                loopTarget.AddCorrection = shiftedAdd;
                loopTarget.DropCorrection = shiftedDrop;
                loopTarget.LeftCorrection = shiftedLeft;
                loopTarget.RightCorrection = shiftedRight;
                loopTarget.setLocationMethod(locMethod);
                loopTarget.FODistance = foDist;
                loopTarget.OTLineMil = otLine;
                loopTarget.offsetCorrections();
            }
        }
    }
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mortar", function() { return Mortar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FO", function() { return FO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mortarTargetBipartiteGraph", function() { return mortarTargetBipartiteGraph; });
/* harmony import */ var _mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


class NumericInputField {
    constructor(caption) {
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
    get htmlElem() {
        return this._htmlElem;
    }
    get value() {
        var inputVal = this.inputField.value;
        return (isNaN(inputVal)) ? 0 : Number(inputVal);
    }
    set value(val) {
        this.inputField.value = val.toString();
    }
    get disabled() {
        return this.inputField.disabled;
    }
    set disabled(val) {
        this.inputField.disabled = val;
    }
}
NumericInputField.inputIdNumerator = 0;
class RadioInputField {
    constructor(options) {
        this._htmlElem = document.createElement("div");
        this.radioFieldsWithValues = [];
        options.forEach((radioOption, indexNum) => {
            var inputField = document.createElement("input");
            inputField.id = "radioInput" + RadioInputField.inputIdNumerator.toString();
            RadioInputField.inputIdNumerator++;
            inputField.name = "radioInputGroup" + RadioInputField.radioGroupNumerator.toString();
            inputField.type = "radio";
            var inputLabel = document.createElement("label");
            inputLabel.htmlFor = inputField.id;
            inputLabel.innerHTML = radioOption;
            this._htmlElem.appendChild(inputLabel);
            this._htmlElem.appendChild(inputField);
            if (indexNum + 1 != options.length) {
                this._htmlElem.appendChild(document.createElement("br"));
            }
            this.radioFieldsWithValues.push({ field: inputField, val: radioOption });
        });
        RadioInputField.radioGroupNumerator++;
    }
    get htmlElem() {
        return this._htmlElem;
    }
    get value() {
        for (var k = 0; k < this.radioFieldsWithValues.length; k++) {
            var fieldVithVal = this.radioFieldsWithValues[k];
            if (fieldVithVal.field.checked) {
                return fieldVithVal.val;
            }
        }
        return "";
    }
    set value(val) {
        for (var k = 0; k < this.radioFieldsWithValues.length; k++) {
            var fieldVithVal = this.radioFieldsWithValues[k];
            if (fieldVithVal.val == val) {
                fieldVithVal.field.checked = true;
            }
            else {
                fieldVithVal.field.checked = false;
            }
        }
    }
}
RadioInputField.inputIdNumerator = 0;
RadioInputField.radioGroupNumerator = 0;
class Location {
    constructor(previousElem) {
        this._htmlElem = document.createElement("div");
        this.eastInputElem = new NumericInputField("East");
        this.northInputElem = new NumericInputField("North");
        this._htmlElem.className = "locationInputSet";
        this._htmlElem.appendChild(this.eastInputElem.htmlElem);
        this._htmlElem.appendChild(this.northInputElem.htmlElem);
        if (previousElem) {
            this.east = previousElem.east;
            this.north = previousElem.north;
        }
    }
    get east() {
        return this.eastInputElem.value;
    }
    set east(val) {
        this.eastInputElem.value = val;
    }
    get north() {
        return this.northInputElem.value;
    }
    set north(val) {
        this.northInputElem.value = val;
    }
    get htmlElem() {
        return this._htmlElem;
    }
    get disabled() {
        return this.eastInputElem.disabled || this.northInputElem.disabled;
    }
    set disabled(val) {
        this.eastInputElem.disabled = val;
        this.northInputElem.disabled = val;
    }
}
class GeoLocationElement {
    constructor(prevLoc, ObjectType) {
        this._htmlElem = document.createElement("div");
        this.onRemove = () => { };
        this.No = (prevLoc) ? prevLoc.No + 1 : 1;
        this._htmlElem.className = "fieldSet";
        this.location = (prevLoc) ? new Location(prevLoc.location) : new Location();
        this.DisplayTitle = ((ObjectType) ? ObjectType : "Obj") + "_" + this.No.toString();
        this.creteHeaderWithLocationElements();
    }
    get htmlElem() {
        return this._htmlElem;
    }
    creteHeaderWithLocationElements() {
        var titleElem = document.createElement("h3");
        titleElem.innerHTML = this.DisplayTitle;
        this._htmlElem.appendChild(titleElem);
        this._htmlElem.appendChild(this.location.htmlElem);
    }
}
class Mortar extends GeoLocationElement {
    constructor(prevMortar) {
        super(prevMortar, "Mortar");
        this.MTRelationShipInput = new MTRelationShipInput(this);
        this.pairedUnitsElement = document.createElement("ul");
        var caption1 = document.createElement("h4");
        caption1.innerHTML = "Targets for mortar";
        this._htmlElem.appendChild(caption1);
        this._htmlElem.appendChild(this.MTRelationShipInput.htmlElem);
        this.resaultsDiv = document.createElement("div");
        this._htmlElem.appendChild(this.resaultsDiv);
        this.addLineToResaults = (text) => {
            var line = document.createElement("p");
            line.innerHTML = text;
            this.resaultsDiv.appendChild(line);
        };
        var spanElement = document.createElement("button");
        spanElement.innerHTML = "Remove mortar";
        spanElement.addEventListener("click", () => {
            this.onRemove();
        });
        this._htmlElem.appendChild(spanElement);
    }
    // asignAbstractProperties(prevLoc?:iGeoLocationElement){
    //   this.DisplayTitle = "Mortar_" + this.No.toString();
    // }
    updateRelationShips() {
        this.MTRelationShipInput.updateRelationShips();
    } //: () => void = ()=>{};
}
class Target extends GeoLocationElement {
    constructor(prevTarget) {
        var _a;
        super(prevTarget, "Target");
        this.pairedUnitsElement = document.createElement("ul");
        this.MTRelationShipInput = new MTRelationShipInput(this);
        this.shiftedOTDistanceElem = new NumericInputField("Shifted OT distance");
        this.shiftedOTLineElem = new NumericInputField("Shifted OT Line");
        this.locationMethodElem = new RadioInputField(["Grid", "Polar", "Shift (Grid)", "Shift (polar)"]);
        this.OTLineInputElem = new NumericInputField("OT Line");
        this.FODistanceInputElem = new NumericInputField("FO distance");
        this.AddCorrectionInputElem = new NumericInputField("East");
        this.DropCorrectionInputElem = new NumericInputField("East");
        this.LeftCorrectionInputElem = new NumericInputField("East");
        this.RightCorrectionInputElem = new NumericInputField("East");
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
        offsetBtn.addEventListener("click", () => {
            this.offsetCorrections();
        });
        this._htmlElem.appendChild(offsetBtn);
        var spanElement = document.createElement("button");
        spanElement.innerHTML = "Remove Target";
        spanElement.addEventListener("click", () => {
            this.onRemove();
        });
        this._htmlElem.appendChild(spanElement);
        (_a = document.getElementById("targets")) === null || _a === void 0 ? void 0 : _a.appendChild(this._htmlElem);
    }
    updateRelationShips() {
        this.MTRelationShipInput.updateRelationShips();
    }
    get OTLineMil() {
        return this.OTLineInputElem.value;
    }
    set OTLineMil(val) {
        this.OTLineInputElem.value = val;
    }
    get OTLineRad() {
        return Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__["mil2rad"])(this.OTLineInputElem.value);
    }
    set OTLineRad(val_Radians) {
        this.OTLineInputElem.value = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__["rad2mil"])(val_Radians);
    }
    get FODistance() {
        return this.FODistanceInputElem.value;
    }
    set FODistance(val) {
        this.FODistanceInputElem.value = val;
    }
    get AddCorrection() {
        return this.AddCorrectionInputElem.value;
    }
    set AddCorrection(val) {
        this.AddCorrectionInputElem.value = val;
    }
    get DropCorrection() {
        return this.DropCorrectionInputElem.value;
    }
    set DropCorrection(val) {
        this.DropCorrectionInputElem.value = val;
    }
    get LeftCorrection() {
        return this.LeftCorrectionInputElem.value;
    }
    set LeftCorrection(val) {
        this.LeftCorrectionInputElem.value = val;
    }
    get RightCorrection() {
        return this.RightCorrectionInputElem.value;
    }
    set RightCorrection(val) {
        this.RightCorrectionInputElem.value = val;
    }
    setLocationMethod(val) {
        throw new Error("Method not implemented.");
    }
    get shiftedFODistance() {
        return this.shiftedOTDistanceElem.value;
    }
    set shiftedFODistance(val) {
        this.shiftedOTDistanceElem.value = val;
    }
    get shiftedOTLineRad() {
        return Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__["mil2rad"])(this.shiftedOTLineElem.value);
    }
    set shiftedOTLineRad(val_Radians) {
        this.shiftedOTLineElem.value = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__["rad2mil"])(val_Radians);
    }
    getLocationMethod() {
        var selectedRadio = this.locationMethodElem.value;
        if (selectedRadio == "Grid")
            return "Grid";
        if (selectedRadio == "Polar")
            return "Polar";
        if (selectedRadio == "Shift (Grid)")
            return "Shift (Grid)";
        if (selectedRadio == "Shift (Polar)")
            return "Shift (Polar)";
        return "Grid";
    }
    getInputOTLine() { return Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_1__["mil2rad"])(this.OTLineInputElem.value); }
    ;
    offsetCorrections() {
        var locateMethod = this.getLocationMethod();
        if (locateMethod == "Shift (Grid)") {
            Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_0__["offSetShiftGrid"])(this);
        }
        if (locateMethod == "Shift (Polar)" && (this.frontObserver)) {
            Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_0__["offSetShiftPolar"])(this, this.frontObserver);
        }
    }
}
class FO extends GeoLocationElement {
    constructor() {
        super(undefined, "Front_Observer");
    }
}
class MTRelationShipInput {
    constructor(MTObject) {
        this._htmlElem = document.createElement("div");
        this.pairedUnitsElement = document.createElement("ul");
        this.MTRelationships = null;
        this._htmlElem.className = "MTRelationsInputSet";
        this._htmlElem.appendChild(this.pairedUnitsElement);
        this.MTObject = MTObject;
    }
    get htmlElem() {
        return this._htmlElem;
    }
    updateRelationShips() {
        this.pairedUnitsElement.innerHTML = "";
        if (this.MTRelationships == null) {
            return;
        }
        for (var i = 0; i < this.MTRelationships.edges.length; i++) {
            var pair = this.MTRelationships.edges[i];
            if (this.MTObject == pair.mortar || this.MTObject == pair.target) {
                var liElement = document.createElement("li");
                liElement.innerHTML = (this.MTObject == pair.mortar) ? pair.target.DisplayTitle : pair.mortar.DisplayTitle;
                var spanElement = document.createElement("span");
                spanElement.innerHTML = "&times;";
                var MTRelationships = this.MTRelationships;
                (function (freezPair) {
                    spanElement.addEventListener("click", () => {
                        MTRelationships.removePair(freezPair.mortar, freezPair.target);
                        freezPair.mortar.updateRelationShips();
                        freezPair.target.updateRelationShips();
                    });
                })(pair);
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
        var isMortar = this.MTObject instanceof Mortar;
        var pairableUnits = (isMortar) ? this.MTRelationships.targets : this.MTRelationships.mortars;
        for (var k = 0; k < pairableUnits.length; k++) {
            var option = document.createElement("option");
            option.value = k.toString();
            option.innerHTML = pairableUnits[k].DisplayTitle;
            addSelectElement.appendChild(option);
        }
        addSelectElement.addEventListener("change", () => {
            if (addSelectElement.value == "") {
                return;
            }
            var selectedValue = Number(addSelectElement.value);
            var unitToPair = pairableUnits[selectedValue];
            if (isMortar) {
                this.MTRelationships.addPair(this.MTObject, unitToPair);
            }
            else {
                this.MTRelationships.addPair(unitToPair, this.MTObject);
            }
        });
    }
}
class mortarTargetBipartiteGraph {
    constructor() {
        this.edges = [];
        this.mortars = null;
        this.targets = null;
    }
    addPair(mortar, target) {
        var pairExist = false;
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar && pair.target == target) {
                pairExist = true;
            }
        }
        if (!pairExist) {
            this.edges.push({ mortar: mortar, target: target });
            mortar.updateRelationShips();
            target.updateRelationShips();
        }
    }
    removePair(mortar, target) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar && pair.target == target) {
                this.edges.splice(i, 1);
            }
        }
    }
    removeTargetsForMortar(mortar) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.mortar == mortar) {
                this.edges.splice(i, 1);
            }
        }
    }
    ;
    removeMortarsForTarget(target) {
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            if (pair.target == target) {
                this.edges.splice(i, 1);
            }
        }
    }
    ;
    toString() {
        var output = "";
        for (var i = this.edges.length - 1; i >= 0; i--) {
            var pair = this.edges[i];
            output = output + "M" + pair.mortar.No + "-T" + pair.target.No + "; __ ";
        }
        return output;
    }
    reversePairingOrder() {
        var dePairedTargets = [];
        var dePairedFU = [];
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMortarFireDataGrid", function() { return calcMortarFireDataGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMortarFireDataPolar", function() { return calcMortarFireDataPolar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMortarFireDataShiftGrid", function() { return calcMortarFireDataShiftGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMortarFireDataShiftPolar", function() { return calcMortarFireDataShiftPolar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSetShiftGrid", function() { return offSetShiftGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSetShiftPolar", function() { return offSetShiftPolar; });
/* harmony import */ var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

function calcMortarFireDataGrid(mortar, target) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var targetPosition = { east: target.location.east, north: target.location.north };
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
}
function calcMortarFireDataPolar(mortar, target, fo) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    target.location.east = targetPosition.east;
    target.location.north = targetPosition.north;
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
}
function calcMortarFireDataShiftGrid(mortar, target) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var targetPosition = { east: target.location.east, north: target.location.north };
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.OTLineRad);
    target.shiftedLocation.east = shiftedTarget.east;
    target.shiftedLocation.north = shiftedTarget.north;
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
}
function calcMortarFireDataShiftPolar(mortar, target, fo) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.OTLineRad);
    var shiftedOTData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(foPosition, shiftedTarget);
    target.shiftedLocation.east = shiftedTarget.east;
    target.shiftedLocation.north = shiftedTarget.north;
    target.shiftedFODistance = shiftedOTData.radius;
    target.shiftedOTLineRad = shiftedOTData.radians;
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
}
function offSetShiftGrid(target) {
    var targetPosition = { east: target.location.east, north: target.location.north };
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.OTLineRad);
    target.location.east = shiftedTarget.east;
    target.location.north = shiftedTarget.north;
    target.LeftCorrection = 0;
    target.RightCorrection = 0;
    target.AddCorrection = 0;
    target.DropCorrection = 0;
    target.shiftedLocation.east = 0;
    target.shiftedLocation.north = 0;
}
function offSetShiftPolar(target, fo) {
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.OTLineRad);
    var shiftedOTData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(foPosition, shiftedTarget);
    target.location.east = shiftedTarget.east;
    target.location.north = shiftedTarget.north;
    target.FODistance = shiftedOTData.radius;
    target.OTLineMil = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(shiftedOTData.radians);
    target.shiftedLocation.east = 0;
    target.shiftedLocation.north = 0;
    target.LeftCorrection = 0;
    target.RightCorrection = 0;
    target.AddCorrection = 0;
    target.DropCorrection = 0;
    target.shiftedFODistance = 0;
    target.shiftedOTLineRad = 0;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milsInDeg", function() { return milsInDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoint1ToPoint2InPolar", function() { return getPoint1ToPoint2InPolar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointingLocationFromPoint1", function() { return getPointingLocationFromPoint1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftPoint", function() { return shiftPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2mil", function() { return rad2mil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mil2rad", function() { return mil2rad; });
var milsInDeg = 160 / 9;
function getPoint1ToPoint2InPolar(point1, point2) {
    var dEast = point2.east - point1.east;
    var dNorth = point2.north - point1.north;
    var distance = Math.sqrt(dEast * dEast + dNorth * dNorth);
    var radiansZtoE = Math.atan2(dEast, dNorth);
    return { radius: distance, radians: radiansZtoE };
}
function getPointingLocationFromPoint1(point1, pointer) {
    var dEast = pointer.radius * Math.sin(pointer.radians);
    var dNorth = pointer.radius * Math.cos(pointer.radians);
    var pointingLocation = {
        east: dEast + point1.east,
        north: dNorth + point1.north
    };
    return pointingLocation;
}
function shiftPoint(startingPoint, shiftGrid, pointerAngleRadians) {
    var shiftAngle = Math.atan2(shiftGrid.right, shiftGrid.add);
    var shiftedAngle = pointerAngleRadians + shiftAngle;
    var shiftedDistance = Math.sqrt(shiftGrid.add * shiftGrid.add + shiftGrid.right * shiftGrid.right);
    var shiftedPoint = getPointingLocationFromPoint1(startingPoint, { radius: shiftedDistance, radians: shiftedAngle });
    return shiftedPoint;
}
function rad2mil(radians) {
    var degrees = rad2deg(radians);
    var miljens = degrees * (milsInDeg + Number.EPSILON);
    return miljens;
}
function rad2deg(radians) {
    var degrees = radians * 180 / Math.PI;
    if (degrees < 0) {
        degrees = degrees + 360;
    }
    ;
    return degrees;
}
function deg2rad(degrees) {
    var radians = degrees * Math.PI / 180;
    return radians;
}
function mil2rad(miljens) {
    var degrees = miljens / (milsInDeg - Number.EPSILON);
    var radians = deg2rad(degrees);
    return radians;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
class Map {
    constructor(mortars, targets, frontObserver, MTRelationships) {
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.dstncBtwnGridLinesBold = 10;
        this.boldLineWidth = 0.05;
        this.fontSize = 1;
        this.locPointRadius = 0.2;
        this.startingX = 0;
        this.endingX = 0;
        this.startingY = 0;
        this.endingY = 0;
        this.mapSvg = document.createElement("svg");
        this.mortarTargetRelationShip = MTRelationships;
        this.mortars = mortars;
        this.targets = targets;
        this.frontObserver = frontObserver;
    }
    creataMap() {
        var mapSvg = this.mapSvg;
        mapSvg.setAttribute("width", "1200");
        mapSvg.setAttribute("height", "1200");
        mapSvg.innerHTML = "";
        this.trackMapMargins();
        this.drawGridLines();
        this.setViewBox();
        this.mortarTargetRelationShip.edges.forEach(pair => {
            var target = pair.target;
            var mortar = pair.mortar;
            this.drawCustomLine(mortar.location.east, target.location.east, mortar.location.north, target.location.north, mapSvg, this.boldLineWidth / 4, "255,0,0");
        });
        this.mortars.forEach(mortar => {
            this.addLocationPointOnMap(mortar, mapSvg, "red");
        });
        this.targets.forEach(target => {
            this.addLocationPointOnMap(target, mapSvg, "green");
        });
        this.addLocationPointOnMap(this.frontObserver, mapSvg, "blue");
        mapSvg.innerHTML = mapSvg.innerHTML + " ";
    }
    trackMapMargins() {
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.mortars.forEach(mortar => {
            this.trackMinMax(mortar);
        });
        this.targets.forEach(target => {
            this.trackMinMax(target);
        });
        this.trackMinMax(this.frontObserver);
        var maxD = Math.max(this.maxX - this.minX, this.maxY - this.minY);
        if (maxD < 100) {
            this.dstncBtwnGridLinesBold = 10;
        }
        else {
            this.dstncBtwnGridLinesBold = 1000;
        }
        this.startingX = Math.floor(this.minX / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.endingX = Math.ceil(this.maxX / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.startingY = Math.floor(this.minY / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.endingY = Math.ceil(this.maxY / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        var mapLenght = Math.max(this.endingX - this.startingX, this.endingY - this.startingY);
        this.fontSize = Math.ceil(mapLenght / 50);
        this.locPointRadius = 0.1 * Math.ceil(mapLenght / 25);
        this.boldLineWidth = this.locPointRadius / 4;
    }
    addLocationPointOnMap(location, parentSVG, color) {
        if (Number(location.location.east) == 0 && Number(location.location.north) == 0) {
            return;
        }
        var mortarSVGElem = document.createElement("circle");
        mortarSVGElem.setAttribute("cx", location.location.east.toString());
        mortarSVGElem.setAttribute("cy", (-location.location.north).toString());
        mortarSVGElem.setAttribute("r", this.locPointRadius.toString());
        mortarSVGElem.setAttributeNS(null, 'style', 'fill: ' + color + ';');
        parentSVG.appendChild(mortarSVGElem);
        var mortarSVGRounding = document.createElement("circle");
        mortarSVGRounding.setAttribute("cx", location.location.east.toString());
        mortarSVGRounding.setAttribute("cy", (-location.location.north).toString());
        mortarSVGRounding.setAttribute("r", "4%"); //5%
        mortarSVGRounding.setAttributeNS(null, 'style', 'fill: ' + color + '; fill-opacity:0.4 ');
        parentSVG.appendChild(mortarSVGRounding);
        var locNum = document.createElement("text");
        locNum.setAttribute("x", (Number(location.location.east) + this.locPointRadius).toString());
        locNum.setAttribute("y", (-Number(location.location.north) - this.locPointRadius).toString());
        locNum.setAttribute("font-size", this.fontSize.toString());
        locNum.innerHTML = location.DisplayTitle;
        parentSVG.appendChild(locNum);
    }
    trackMinMax(location) {
        if (Number(location.location.east) == 0 && Number(location.location.north) == 0)
            return;
        if (this.minX == 0 && this.maxX == 0 && this.minY == 0 && this.maxY == 0) {
            this.minX = Number(location.location.east);
            this.maxX = Number(location.location.east);
            this.minY = Number(location.location.north);
            this.maxY = Number(location.location.north);
        }
        else {
            if (this.minX > Number(location.location.east)) {
                this.minX = Number(location.location.east);
            }
            if (this.maxX < Number(location.location.east)) {
                this.maxX = Number(location.location.east);
            }
            if (this.minY > Number(location.location.north)) {
                this.minY = Number(location.location.north);
            }
            if (this.maxY < Number(location.location.north)) {
                this.maxY = Number(location.location.north);
            }
        }
    }
    drawGridLines() {
        if (this.minX == 0 && this.maxX == 0 && this.minY == 0 && this.maxY == 0) {
            return;
        }
        var deltaX = this.maxX - this.minX;
        var deltaY = this.maxY - this.minY;
        var gridStrokeWidth = this.boldLineWidth; //0.05;
        var boldLinesCountX = Math.ceil(deltaX / this.dstncBtwnGridLinesBold);
        var boldLinesCountY = Math.ceil(deltaY / this.dstncBtwnGridLinesBold);
        var maxLinesPerDrawing = 15;
        if (Math.max(boldLinesCountX, boldLinesCountY) > maxLinesPerDrawing) {
            return;
        }
        var mapSvg = this.mapSvg;
        var linePos = 0;
        for (linePos = this.startingX; linePos <= this.endingX; linePos += this.dstncBtwnGridLinesBold) {
            this.drawVerticalLine(linePos, mapSvg, gridStrokeWidth, true);
            this.drawThinLines(linePos, false, gridStrokeWidth);
        }
        for (linePos = this.startingY; linePos <= this.endingY; linePos += this.dstncBtwnGridLinesBold) {
            this.drawHorizontalLine(linePos, mapSvg, gridStrokeWidth, true);
            this.drawThinLines(linePos, true, gridStrokeWidth);
        }
    }
    drawThinLines(startingPos, isHorizontal, gridStrokeWidth) {
        var dstncBtwnGridLinesThin = this.dstncBtwnGridLinesBold / 4;
        var dstncBtwnGridLinesXtrThin = dstncBtwnGridLinesThin / 10;
        var mapSvg = this.mapSvg;
        for (var linePos = startingPos; linePos < startingPos + this.dstncBtwnGridLinesBold; linePos += dstncBtwnGridLinesThin) {
            if (linePos > startingPos)
                isHorizontal ? this.drawHorizontalLine(linePos, mapSvg, gridStrokeWidth / 2, false) : this.drawVerticalLine(linePos, mapSvg, gridStrokeWidth / 2, false);
            for (var eThinlinePos = linePos + dstncBtwnGridLinesXtrThin; eThinlinePos < linePos + dstncBtwnGridLinesThin; eThinlinePos += dstncBtwnGridLinesXtrThin) {
                isHorizontal ? this.drawHorizontalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false) : this.drawVerticalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false);
            }
        }
    }
    drawHorizontalLine(linePos, parentElem, strokeWidth, showLineNum) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("x1", (this.minX - this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("x2", (this.maxX + this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("y1", (-linePos));
        lineVGElem.setAttribute("y2", (-linePos));
        lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        if (showLineNum) {
            var nearStartX = Math.ceil(this.startingX + this.dstncBtwnGridLinesBold / 6);
            var lineNum = document.createElement("text");
            lineNum.setAttribute("x", nearStartX.toString());
            lineNum.setAttribute("y", (-linePos));
            lineNum.setAttribute("font-size", this.fontSize.toString());
            var displayLineNum = (linePos < 1000) ? linePos : linePos / 1000;
            lineNum.innerHTML = displayLineNum.toString();
            parentElem.appendChild(lineNum);
            //<text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
        }
    }
    drawVerticalLine(linePos, parentElem, strokeWidth, showLineNum) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("y1", -(this.minY - this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("y2", -(this.maxY + this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("x1", (linePos));
        lineVGElem.setAttribute("x2", (linePos));
        lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        if (showLineNum) {
            var nearStartY = Math.ceil(-1 * this.startingY - this.dstncBtwnGridLinesBold / 6);
            var lineNum = document.createElement("text");
            lineNum.setAttribute("y", (nearStartY).toString());
            lineNum.setAttribute("x", (linePos));
            lineNum.setAttribute("font-size", this.fontSize.toString());
            var displayLineNum = (linePos < 1000) ? linePos : linePos / 1000;
            lineNum.innerHTML = displayLineNum.toString();
            parentElem.appendChild(lineNum);
        }
    }
    drawCustomLine(x1, x2, y1, y2, parentElem, strokeWidth, colorRGBString) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("x1", x1.toString());
        lineVGElem.setAttribute("x2", x2.toString());
        lineVGElem.setAttribute("y1", (-y1).toString());
        lineVGElem.setAttribute("y2", (-y2).toString());
        lineVGElem.setAttribute("style", 'stroke:rgb(' + colorRGBString + ' );stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    }
    setViewBox() {
        var viewBoxValue = this.startingX + " " +
            (-1) * this.endingY + " " +
            (this.endingX - this.startingX) + " " +
            (this.endingY - this.startingY);
        this.mapSvg.setAttribute("viewBox", viewBoxValue);
    }
}


/***/ })
/******/ ]);