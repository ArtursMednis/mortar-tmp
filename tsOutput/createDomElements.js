import { offSetShiftGrid, offSetShiftPolar } from "./mortarCalcFunctions";
import { mil2rad, rad2mil } from "./coordTransformFunctions";
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
export class Mortar extends GeoLocationElement {
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
export class Target extends GeoLocationElement {
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
        return mil2rad(this.OTLineInputElem.value);
    }
    set OTLineRad(val_Radians) {
        this.OTLineInputElem.value = rad2mil(val_Radians);
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
        return mil2rad(this.shiftedOTLineElem.value);
    }
    set shiftedOTLineRad(val_Radians) {
        this.shiftedOTLineElem.value = rad2mil(val_Radians);
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
    getInputOTLine() { return mil2rad(this.OTLineInputElem.value); }
    ;
    offsetCorrections() {
        var locateMethod = this.getLocationMethod();
        if (locateMethod == "Shift (Grid)") {
            offSetShiftGrid(this);
        }
        if (locateMethod == "Shift (Polar)" && (this.frontObserver)) {
            offSetShiftPolar(this, this.frontObserver);
        }
    }
}
export class FO extends GeoLocationElement {
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
export class mortarTargetBipartiteGraph {
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
