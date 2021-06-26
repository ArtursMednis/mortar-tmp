"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _createDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _createMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5); // //@ts-ignore
  // var mortarTargetRelationShip:iMortarTargetBipartiteGraph = new mortarTargetBipartiteGraph();
  // //@ts-ignore
  // window.mortarTargetRelationShip = mortarTargetRelationShip;


  function pageInit() {
    //@ts-ignore
    var mortar = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Mortar"](); //@ts-ignore

    var target = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Target"](); //@ts-ignore

    var fo = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["FO"]();

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortarTargetRelationShip"].addPair(mortar, target); //alert(mortarTargetRelationShip.toString());

  }

  pageInit();

  function addMortar() {
    //@ts-ignore
    var mortar = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Mortar"]();

    if (_createDomElements__WEBPACK_IMPORTED_MODULE_0__["targets"].length != 0) {
      var lastTg = _createDomElements__WEBPACK_IMPORTED_MODULE_0__["targets"][_createDomElements__WEBPACK_IMPORTED_MODULE_0__["targets"].length - 1];

      _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortarTargetRelationShip"].addPair(mortar, lastTg);
    }
  }

  function addTarget() {
    //@ts-ignore
    var target = new _createDomElements__WEBPACK_IMPORTED_MODULE_0__["Target"]();

    if (_createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortars"].length != 0) {
      var lastMrt = _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortars"][_createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortars"].length - 1];

      _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortarTargetRelationShip"].addPair(lastMrt, target);
    }
  } //@ts-ignore


  window.addMortar = addMortar;
  window.addTarget = addTarget; //@ts-ignore

  window.creataMap = _createMap__WEBPACK_IMPORTED_MODULE_1__["creataMap"];
  /***/
},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "mortars", function () {
    return mortars;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "targets", function () {
    return targets;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "frontObserver", function () {
    return frontObserver;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Mortar", function () {
    return Mortar;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Target", function () {
    return Target;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "FO", function () {
    return FO;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "mortarTargetBipartiteGraph", function () {
    return mortarTargetBipartiteGraph;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcAllFiringData", function () {
    return calcAllFiringData;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "createLinearTarget", function () {
    return createLinearTarget;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "createFieldTarget", function () {
    return createFieldTarget;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "changeTargetOrderForFU", function () {
    return changeTargetOrderForFU;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "offSetAllCorrections", function () {
    return offSetAllCorrections;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "mortarTargetRelationShip", function () {
    return mortarTargetRelationShip;
  });
  /* harmony import */


  var _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
  /* harmony import */


  var _mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
  /* harmony import */


  var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

  var mortars = [];
  var targets = [];
  var frontObserver = null;

  function addNumericInputWithLabel(inputID, name, parentElem) {
    var startingValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var inputField = document.createElement("input");
    inputField.id = inputID;
    inputField.name = inputID;
    inputField.type = "number"; //@ts-ignore

    inputField.value = startingValue;
    inputField.step = "any";
    var inputLabel = document.createElement("label");
    inputLabel.htmlFor = inputID;
    inputLabel.innerHTML = name;
    parentElem.appendChild(inputLabel);
    parentElem.appendChild(inputField);
    parentElem.appendChild(document.createElement("br"));
    return inputField;
  }

  function addRadioInputWithLabel(inputID, name, inputName, parentElem) {
    var inputField = document.createElement("input");
    inputField.id = inputID;
    inputField.name = inputName;
    inputField.type = "radio";
    var inputLabel = document.createElement("label");
    inputLabel.htmlFor = inputID;
    inputLabel.innerHTML = name;
    parentElem.appendChild(inputLabel);
    parentElem.appendChild(inputField);
    parentElem.appendChild(document.createElement("br"));
    return inputField;
  }

  function Mortar() {
    var _this = this;

    var _a;

    var previousMortar = mortars.length == 0 ? null : mortars[mortars.length - 1];
    this.No = previousMortar ? previousMortar.No + 1 : 1;
    this.DisplayTitle = "Firing Unit " + this.No.toString();
    this.idPrefix = _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__["prefixMortar"];
    this.isMortar = true;
    createLocationDivWithInputElements(this);
    var caption1 = document.createElement("h4");
    caption1.innerHTML = "Targets for mortar";
    this.divElem.appendChild(caption1);
    createMTRelationShipInputElements(this);

    if (previousMortar) {
      this.eastInputElem.value = previousMortar.getInputEast();
      this.northInputElem.value = previousMortar.getInputNorth();
    }

    this.resaultsDiv = document.createElement("div");
    this.divElem.appendChild(this.resaultsDiv);

    this.addLineToResaults = function (text) {
      var line = document.createElement("p");
      line.innerHTML = text;

      _this.resaultsDiv.appendChild(line);
    };

    var spanElement = document.createElement("button");
    spanElement.innerHTML = "Remove mortar";
    spanElement.addEventListener("click", function () {
      _this.divElem.parentElement.removeChild(_this.divElem);

      mortarTargetRelationShip.removeTargetsForMortar(_this);

      for (var i = mortars.length - 1; i >= 0; i--) {
        if (mortars[i] === _this) {
          mortars.splice(i, 1);
        }
      }

      updateAllRelationShips();
    });
    this.divElem.appendChild(spanElement);
    (_a = document.getElementById("mortars")) === null || _a === void 0 ? void 0 : _a.appendChild(this.divElem);
    mortars.push(this);
    updateAllRelationShips();
  }

  function Target() {
    var _this2 = this;

    var _a;

    var previousTarget = targets.length == 0 ? null : targets[targets.length - 1];
    this.No = previousTarget ? previousTarget.No + 1 : 1;
    this.DisplayTitle = "Target " + this.No.toString();
    this.idPrefix = _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__["prefixTarget"];
    this.isMortar = false;
    createLocationDivWithInputElements(this);
    var divElem = this.divElem;
    divElem.appendChild(document.createElement("br"));
    this.shiftedEastElem = addNumericInputWithLabel("shE" + this.No, "Shifted East", divElem);
    this.shiftedNorthElem = addNumericInputWithLabel("shN" + this.No, "Shifted North", divElem);
    divElem.appendChild(document.createElement("br"));
    this.shiftedOTDistanceElem = addNumericInputWithLabel("shDist" + this.No, "Shifted OT distance", divElem);
    this.shiftedOTLineElem = addNumericInputWithLabel("shDir" + this.No, "Shifted OT direction", divElem);
    this.shiftedEastElem.disabled = true;
    this.shiftedNorthElem.disabled = true;
    this.shiftedOTDistanceElem.disabled = true;
    this.shiftedOTLineElem.disabled = true;
    var caption1 = document.createElement("h4");
    caption1.innerHTML = "Firing units for target";
    divElem.appendChild(caption1); //divElem.appendChild(document.createElement("br"));

    createMTRelationShipInputElements(this);
    var caption2 = document.createElement("h4");
    caption2.innerHTML = "Target location method";
    divElem.appendChild(caption2);
    this.locationMethodGridElement = addRadioInputWithLabel("locMethodGrid_" + this.No, "Grid", "locationMethod", divElem);
    this.locationMethodPolarElement = addRadioInputWithLabel("locMethodPolar_" + this.No, "Polar", "locationMethod", divElem);
    this.locationMethodShiftGridElement = addRadioInputWithLabel("locMethodShiftGrid_" + this.No, "Shift (Grid)", "locationMethod", divElem);
    this.locationMethodShiftPolarElement = addRadioInputWithLabel("locMethodShiftPolar_" + this.No, "Shift (Polar)", "locationMethod", divElem);

    this.getLocationMethod = function () {
      if (_this2.locationMethodGridElement.checked) return "Grid";
      if (_this2.locationMethodPolarElement.checked) return "Polar";
      if (_this2.locationMethodShiftGridElement.checked) return "Shift (Grid)";
      if (_this2.locationMethodShiftPolarElement.checked) return "Shift (Polar)";
      return "Grid";
    };

    divElem.appendChild(document.createElement("br"));
    this.OTLineInputElem = addNumericInputWithLabel(_inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__["prefixOTLine"] + this.No, "OT Line", divElem);
    this.FODistanceInputElem = addNumericInputWithLabel("OTDistance", "Distance to target", this.divElem);

    this.getInputFODistance = function () {
      return Number(_this2.FODistanceInputElem.value);
    };

    divElem.appendChild(document.createElement("br"));
    divElem.appendChild(document.createElement("br"));
    var caption3 = document.createElement("h4");
    caption3.innerHTML = "Target correction";
    divElem.appendChild(caption3);
    this.AddCorrectionInputElem = addNumericInputWithLabel("AddCorrection_" + this.No, "Add", divElem); //divElem.appendChild(document.createElement("br"));

    this.DropCorrectionInputElem = addNumericInputWithLabel("DropCorrection_" + this.No, "Drop", divElem); //divElem.appendChild(document.createElement("br"));

    this.LeftCorrectionInputElem = addNumericInputWithLabel("LeftCorrection_" + this.No, "Left", divElem); //divElem.appendChild(document.createElement("br"));

    this.RightCorrectionInputElem = addNumericInputWithLabel("RigthCorrection_" + this.No, "Right", divElem);
    divElem.appendChild(document.createElement("br"));
    var offsetBtn = document.createElement("button");
    offsetBtn.innerHTML = "Save Corrections";
    offsetBtn.addEventListener("click", function () {
      _this2.offsetCorrections();
    });
    this.divElem.appendChild(offsetBtn); //this.divElem = divElem;

    if (previousTarget) {
      this.eastInputElem.value = previousTarget.getInputEast();
      this.northInputElem.value = previousTarget.getInputNorth();
      this.OTLineInputElem.value = previousTarget.getInputOTLine();
    }

    this.getInputOTLine = function () {
      return Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_2__["mil2rad"])(Number(_this2.OTLineInputElem.value));
    };

    this.getInputAdd = function () {
      return Number(_this2.AddCorrectionInputElem.value);
    };

    this.getInputDrop = function () {
      return Number(_this2.DropCorrectionInputElem.value);
    };

    this.getInputLeft = function () {
      return Number(_this2.LeftCorrectionInputElem.value);
    };

    this.getInputRight = function () {
      return Number(_this2.RightCorrectionInputElem.value);
    };

    var spanElement = document.createElement("button");
    spanElement.innerHTML = "Remove Target";
    spanElement.addEventListener("click", function () {
      _this2.divElem.parentElement.removeChild(_this2.divElem);

      mortarTargetRelationShip.removeMortarsForTarget(_this2);

      for (var i = targets.length - 1; i >= 0; i--) {
        if (targets[i] === _this2) {
          targets.splice(i, 1);
        }
      }

      updateAllRelationShips();
    });
    this.divElem.appendChild(spanElement);

    this.offsetCorrections = function () {
      var locateMethod = _this2.getLocationMethod();

      if (locateMethod == "Shift (Grid)") {
        Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["offSetShiftGrid"])(_this2);
      }

      if (locateMethod == "Shift (Polar)") {
        Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["offSetShiftPolar"])(_this2, frontObserver);
      }
    };

    (_a = document.getElementById("targets")) === null || _a === void 0 ? void 0 : _a.appendChild(divElem);
    targets.push(this);
    updateAllRelationShips();
  }

  function FO() {
    if (frontObserver != null) throw "FO must be single for fire mission";
    frontObserver = this;
    this.No = 0;
    this.DisplayTitle = "Front Observer ";
    this.idPrefix = "FO_";
    createLocationDivWithInputElements(this);
    document.getElementById("frontObserver").appendChild(this.divElem);
  }

  function createLocationDivWithInputElements(forElement) {
    var divElem = document.createElement("div");
    divElem.className = "fieldSet";
    var titleElem = document.createElement("h3");
    titleElem.innerHTML = forElement.DisplayTitle;
    divElem.appendChild(titleElem);
    forElement.eastInputElem = addNumericInputWithLabel(forElement.idPrefix + _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__["prefixEast"] + forElement.No, "East", divElem); //divElem.appendChild(document.createElement("br"));

    forElement.northInputElem = addNumericInputWithLabel(forElement.idPrefix + _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_0__["prefixNorth"] + forElement.No, "North", divElem);
    forElement.divElem = divElem;

    forElement.getInputEast = function () {
      return Number(forElement.eastInputElem.value);
    };

    forElement.getInputNorth = function () {
      return Number(forElement.northInputElem.value);
    };
  }

  function createMTRelationShipInputElements(forElement) {
    var listElem = document.createElement("ul");
    forElement.divElem.appendChild(listElem);
    forElement.pairedUnitsElement = listElem;

    forElement.updateRelationShips = function () {
      forElement.pairedUnitsElement.innerHTML = "";

      for (var i = 0; i < mortarTargetRelationShip.edges.length; i++) {
        var pair = mortarTargetRelationShip.edges[i];

        if (forElement == pair.mortar || forElement == pair.target) {
          var liElement = document.createElement("li"); //liElement.innerHTML = (forElement == pair.mortar) ? "Target " + pair.target.No : "Mortar " + pair.mortar.No;

          liElement.innerHTML = forElement == pair.mortar ? pair.target.DisplayTitle : pair.mortar.DisplayTitle;
          var spanElement = document.createElement("span");
          spanElement.innerHTML = "&times;";

          (function (freezPair) {
            spanElement.addEventListener("click", function () {
              mortarTargetRelationShip.removePair(freezPair.mortar, freezPair.target);
              freezPair.mortar.updateRelationShips();
              freezPair.target.updateRelationShips();
            });
          })(pair); // spanElement.addEventListener("click",()=>{
          //   mortarTargetRelationShip.removePair(pair.mortar,pair.target);
          //   pair.mortar.updateRelationShips();
          //   pair.target.updateRelationShips();
          // });


          liElement.appendChild(spanElement);
          forElement.pairedUnitsElement.appendChild(liElement);
        }
      }

      var addSelectElement = document.createElement("select");
      var liSelectElement = document.createElement("li");
      liSelectElement.appendChild(addSelectElement);
      forElement.pairedUnitsElement.appendChild(liSelectElement);
      var optionEmpty = document.createElement("option");
      optionEmpty.value = "";
      optionEmpty.innerHTML = "";
      addSelectElement.appendChild(optionEmpty);
      var pairableUnits = forElement.isMortar ? targets : mortars;

      for (var k = 0; k < pairableUnits.length; k++) {
        var option = document.createElement("option"); //option.value = pairableUnits[k].No.toString();

        option.value = k.toString();
        option.innerHTML = pairableUnits[k].DisplayTitle;
        addSelectElement.appendChild(option);
      }

      addSelectElement.addEventListener("change", function () {
        if (addSelectElement.value == "") {
          return;
        }

        var selectedValue = Number(addSelectElement.value);
        var unitToPair = pairableUnits[selectedValue];

        if (forElement.isMortar) {
          mortarTargetRelationShip.addPair(forElement, unitToPair);
        } else {
          mortarTargetRelationShip.addPair(unitToPair, forElement);
        }
      });
    };
  }

  function mortarTargetBipartiteGraph() {
    var _this3 = this;

    this.edges = [];

    this.addPair = function (mortar, target) {
      var pairExist = false;

      for (var i = _this3.edges.length - 1; i >= 0; i--) {
        var pair = _this3.edges[i];

        if (pair.mortar == mortar && pair.target == target) {
          pairExist = true;
        }
      }

      if (!pairExist) {
        _this3.edges.push({
          mortar: mortar,
          target: target
        });

        mortar.updateRelationShips();
        target.updateRelationShips();
      }
    };

    this.removePair = function (mortar, target) {
      for (var i = _this3.edges.length - 1; i >= 0; i--) {
        var pair = _this3.edges[i];

        if (pair.mortar == mortar && pair.target == target) {
          _this3.edges.splice(i, 1);
        }
      }
    };

    this.removeTargetsForMortar = function (mortar) {
      for (var i = _this3.edges.length - 1; i >= 0; i--) {
        var pair = _this3.edges[i];

        if (pair.mortar == mortar) {
          _this3.edges.splice(i, 1);
        }
      }
    };

    this.removeMortarsForTarget = function (target) {
      for (var i = _this3.edges.length - 1; i >= 0; i--) {
        var pair = _this3.edges[i];

        if (pair.target == target) {
          _this3.edges.splice(i, 1);
        }
      }
    };

    this.toString = function () {
      var output = "";

      for (var i = _this3.edges.length - 1; i >= 0; i--) {
        var pair = _this3.edges[i];
        output = output + "M" + pair.mortar.No + "-T" + pair.target.No + "; __ ";
      }

      return output;
    };
  }

  function updateAllRelationShips() {
    mortars.forEach(function (updateUnit) {
      updateUnit.updateRelationShips();
    });
    targets.forEach(function (updateUnit) {
      updateUnit.updateRelationShips();
    });
  }

  function calcAllFiringData() {
    mortars.forEach(function (mortarF) {
      mortarF.resaultsDiv.innerHTML = "";
    });

    for (var i = 0; i < mortarTargetRelationShip.edges.length; i++) {
      var pair = mortarTargetRelationShip.edges[i];
      var locateMethod = pair.target.getLocationMethod();
      pair.mortar.addLineToResaults("Fire data on " + pair.target.DisplayTitle + " - method: " + locateMethod);

      switch (locateMethod) {
        case "Grid":
          Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["calcMortarFireDataGrid"])(pair.mortar, pair.target);
          break;

        case "Polar":
          Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["calcMortarFireDataPolar"])(pair.mortar, pair.target, frontObserver);
          break;

        case "Shift (Grid)":
          Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["calcMortarFireDataShiftGrid"])(pair.mortar, pair.target);
          break;

        case "Shift (Polar)":
          Object(_mortarCalcFunctions__WEBPACK_IMPORTED_MODULE_1__["calcMortarFireDataShiftPolar"])(pair.mortar, pair.target, frontObserver);
          break;
      }
    }
  }

  var linearTargetElements = [];

  function createLinearTarget() {
    var baseTarget = targets[0];
    baseTarget.offsetCorrections();
    var baseTargetEast = Number(baseTarget.eastInputElem.value);
    var baseTargetNorth = Number(baseTarget.northInputElem.value);
    var FODistance = baseTarget.FODistanceInputElem.value;
    var OTLine = baseTarget.OTLineInputElem.value;

    while (targets.length > 0) {
      var loopTarget = targets.pop();
      loopTarget.divElem.parentElement.removeChild(loopTarget.divElem);
    }

    mortarTargetRelationShip.edges.length = 0;
    var attitudeRad = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_2__["mil2rad"])(Number(document.getElementById("linTGAtt").value)); // getAttitude();

    var targetLength = Number(document.getElementById("linTGLen").value); // getLength();

    var subTargetCount = Number(document.getElementById("linTGSubTGCount").value); // getTargetCount();

    var distanceBetweenTargets = targetLength / subTargetCount;
    var attSin = Math.sin(attitudeRad);
    var attCos = Math.cos(attitudeRad);
    var targetsPerFU = 0;
    if (mortars.length != 0) targetsPerFU = Math.ceil(subTargetCount / mortars.length);
    var currentTargetForFU = targetsPerFU;
    var mortarCounter = 0;

    for (var i = 0; i < subTargetCount; i++) {
      //@ts-ignore
      var newTarget = new Target();
      var positionOnTargetLine = -targetLength / 2 + distanceBetweenTargets / 2 + i * distanceBetweenTargets;
      newTarget.eastInputElem.value = baseTargetEast + attSin * positionOnTargetLine;
      newTarget.northInputElem.value = baseTargetNorth + attCos * positionOnTargetLine;
      newTarget.OTLineInputElem.value = OTLine;
      newTarget.FODistanceInputElem.value = FODistance;
      linearTargetElements.push(newTarget);

      if (currentTargetForFU == 0) {
        currentTargetForFU = targetsPerFU;
        mortarCounter++;
      }

      var mortar = mortars[mortarCounter];

      if (mortar) {
        mortarTargetRelationShip.addPair(mortar, newTarget);
      }

      currentTargetForFU--;
    }
  }

  function createFieldTarget() {
    var baseTarget = targets[0];
    baseTarget.offsetCorrections();
    var baseTargetEast = Number(baseTarget.eastInputElem.value);
    var baseTargetNorth = Number(baseTarget.northInputElem.value);
    var FODistance = baseTarget.FODistanceInputElem.value;
    var OTLine = baseTarget.OTLineInputElem.value;

    while (targets.length > 0) {
      var loopTarget = targets.pop();
      loopTarget.divElem.parentElement.removeChild(loopTarget.divElem);
    }

    mortarTargetRelationShip.edges.length = 0;
    var attitudeRad = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_2__["mil2rad"])(Number(document.getElementById("linTGAtt").value)); // getAttitude();

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
    if (mortars.length != 0) targetsPerFU = Math.ceil(targetsPerLength * targetsPerWidth / mortars.length);
    var currentTargetForFU = targetsPerFU;
    var mortarCounter = 0;

    for (var i = 0; i < targetsPerLength; i++) {
      var positionOnTargetLine = -targetLength / 2 + linDistanceBetweenTargets / 2 + i * linDistanceBetweenTargets;

      for (var k = 0; k < targetsPerWidth; k++) {
        var positionOnTargetWidthLine = -targetWidth / 2 + lateralDistanceBetweenTargets / 2 + k * lateralDistanceBetweenTargets; //@ts-ignore

        var newTarget = new Target();
        newTarget.eastInputElem.value = baseTargetEast + attSin * positionOnTargetLine + attCosLat * positionOnTargetWidthLine;
        newTarget.northInputElem.value = baseTargetNorth + attCos * positionOnTargetLine + attSinLat * positionOnTargetWidthLine;
        newTarget.OTLineInputElem.value = OTLine;
        newTarget.FODistanceInputElem.value = FODistance;
        linearTargetElements.push(newTarget);

        if (currentTargetForFU == 0) {
          currentTargetForFU = targetsPerFU;
          mortarCounter++;
        }

        var mortar = mortars[mortarCounter];

        if (mortar) {
          mortarTargetRelationShip.addPair(mortar, newTarget);
        }

        currentTargetForFU--;
      }
    }
  }

  function changeTargetOrderForFU() {
    var dePairedTargets = [];
    var dePairedFU = [];

    for (var i = mortarTargetRelationShip.edges.length - 1; i >= 0; i--) {
      var pair = mortarTargetRelationShip.edges[i];
      dePairedTargets.push(pair.target);
      dePairedFU.unshift(pair.mortar);
      mortarTargetRelationShip.edges.splice(i, 1);
    }

    for (var k = 0; k < dePairedFU.length; k++) {
      mortarTargetRelationShip.addPair(dePairedFU[k], dePairedTargets[k]);
    }
  }

  function offSetAllCorrections() {
    //var shiftData:tShiftGrid = {right:(target.getInputRight()-target.getInputLeft()),add:(target.getInputAdd()-target.getInputDrop())};
    var shiftedTarget;

    for (var i = 0; i < targets.length; i++) {
      var loopTarget = targets[i];

      if (loopTarget.getInputAdd() != 0 || loopTarget.getInputDrop() != 0 || loopTarget.getInputLeft() != 0 || loopTarget.getInputRight() != 0) {
        shiftedTarget = loopTarget;
        break;
      }
    }

    if (shiftedTarget) {
      var shiftedAdd = shiftedTarget.AddCorrectionInputElem.value;
      var shiftedDrop = shiftedTarget.DropCorrectionInputElem.value;
      var shiftedLeft = shiftedTarget.LeftCorrectionInputElem.value;
      var shiftedRight = shiftedTarget.RightCorrectionInputElem.value;
      var polarChecked = shiftedTarget.locationMethodShiftPolarElement.checked;
      var gridChecked = shiftedTarget.locationMethodShiftGridElement.checked;
      var foDist = shiftedTarget.FODistanceInputElem.value;
      var otLine = shiftedTarget.OTLineInputElem.value;

      for (var i = 0; i < targets.length; i++) {
        var loopTarget = targets[i];
        loopTarget.AddCorrectionInputElem.value = shiftedAdd;
        loopTarget.DropCorrectionInputElem.value = shiftedDrop;
        loopTarget.LeftCorrectionInputElem.value = shiftedLeft;
        loopTarget.RightCorrectionInputElem.value = shiftedRight;
        loopTarget.locationMethodShiftPolarElement.checked = polarChecked;
        loopTarget.locationMethodShiftGridElement.checked = gridChecked;
        loopTarget.FODistanceInputElem.value = foDist;
        loopTarget.OTLineInputElem.value = otLine;
        loopTarget.offsetCorrections();
      }
    }
  } //šis vispār būtu jāpārceļ uz main.js failu
  //@ts-ignore


  window.Mortar = Mortar;
  window.Target = Target;
  window.createLinearTarget = createLinearTarget;
  window.createFieldTarget = createFieldTarget;
  window.calcAllFiringData = calcAllFiringData;
  window.changeTargetOrderForFU = changeTargetOrderForFU;
  window.offSetAllCorrections = offSetAllCorrections; //@ts-ignore

  var mortarTargetRelationShip = new mortarTargetBipartiteGraph(); //@ts-ignore

  window.mortarTargetRelationShip = mortarTargetRelationShip;
  /***/
},
/* 2 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixMortar", function () {
    return prefixMortar;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixTarget", function () {
    return prefixTarget;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixNorth", function () {
    return prefixNorth;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixEast", function () {
    return prefixEast;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixOTLine", function () {
    return prefixOTLine;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixDirectionOutput", function () {
    return prefixDirectionOutput;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "prefixDistanceOutput", function () {
    return prefixDistanceOutput;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "getMortarPos", function () {
    return getMortarPos;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "getTargetPos", function () {
    return getTargetPos;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "outPutMortarDistance", function () {
    return outPutMortarDistance;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "outPutMortarDirection", function () {
    return outPutMortarDirection;
  });
  /* harmony import */


  var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

  var prefixMortar = "FU_";
  var prefixTarget = "TG_";
  var prefixNorth = "North_";
  var prefixEast = "East_";
  var prefixOTLine = "OTLine_";
  var prefixDirectionOutput = "Direction_";
  var prefixDistanceOutput = "Distance_";

  function getMortarPos(mortarNo) {
    var mortarEastInput = document.getElementById(prefixMortar + prefixEast + mortarNo).value;
    var mortarNorthInput = document.getElementById(prefixMortar + prefixNorth + mortarNo).value;
    var mortarEast = isNaN(mortarEastInput) ? 0 : Number(mortarEastInput);
    var mortarNorth = isNaN(mortarNorthInput) ? 0 : Number(mortarNorthInput);
    return {
      east: mortarEast,
      north: mortarNorth
    };
  }

  function getTargetPos(targetNo) {
    var targetEastInput = document.getElementById(prefixTarget + prefixEast + targetNo).value;
    var targetNorthInput = document.getElementById(prefixTarget + prefixNorth + targetNo).value;
    var targetEast = isNaN(targetEastInput) ? 0 : Number(targetEastInput);
    var targetNorth = isNaN(targetNorthInput) ? 0 : Number(targetNorthInput);
    return {
      east: targetEast,
      north: targetNorth
    };
  }

  function outPutMortarDistance(mortarNo, distance) {
    document.getElementById(prefixMortar + prefixDistanceOutput + mortarNo).innerHTML = "distance: " + distance;
  }

  function outPutMortarDirection(mortarNo, directionRadians) {
    var directionMils = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(directionRadians);
    document.getElementById(prefixMortar + prefixDirectionOutput + mortarNo).innerHTML = "direction: " + directionMils;
  }
  /***/

},
/* 3 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "milsInDeg", function () {
    return milsInDeg;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "getPoint1ToPoint2InPolar", function () {
    return getPoint1ToPoint2InPolar;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "getPointingLocationFromPoint1", function () {
    return getPointingLocationFromPoint1;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "shiftPoint", function () {
    return shiftPoint;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "rad2mil", function () {
    return rad2mil;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "rad2deg", function () {
    return rad2deg;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "deg2rad", function () {
    return deg2rad;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "mil2rad", function () {
    return mil2rad;
  });

  var milsInDeg = 160 / 9;

  function getPoint1ToPoint2InPolar(point1, point2) {
    var dEast = point2.east - point1.east;
    var dNorth = point2.north - point1.north;
    var distance = Math.sqrt(dEast * dEast + dNorth * dNorth); //var radiansZtoE = (dEast == 0) ? 0 : Math.atan2(dEast,dNorth);

    var radiansZtoE = Math.atan2(dEast, dNorth);
    return {
      radius: distance,
      radians: radiansZtoE
    };
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
    //var shiftAngle = (shiftGrid.right == 0) ? 0 : Math.atan2(shiftGrid.right,shiftGrid.add);
    var shiftAngle = Math.atan2(shiftGrid.right, shiftGrid.add);
    var shiftedAngle = pointerAngleRadians + shiftAngle;
    var shiftedDistance = Math.sqrt(shiftGrid.add * shiftGrid.add + shiftGrid.right * shiftGrid.right);
    var shiftedPoint = getPointingLocationFromPoint1(startingPoint, {
      radius: shiftedDistance,
      radians: shiftedAngle
    });
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
  /***/

},
/* 4 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcMortarByGrid", function () {
    return calcMortarByGrid;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcMortarFireDataGrid", function () {
    return calcMortarFireDataGrid;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcMortarFireDataPolar", function () {
    return calcMortarFireDataPolar;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcMortarFireDataShiftGrid", function () {
    return calcMortarFireDataShiftGrid;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "calcMortarFireDataShiftPolar", function () {
    return calcMortarFireDataShiftPolar;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "offSetShiftGrid", function () {
    return offSetShiftGrid;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "offSetShiftPolar", function () {
    return offSetShiftPolar;
  });
  /* harmony import */


  var _coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
  /* harmony import */


  var _inputOutputFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

  function calcMortarByGrid(mortarNo) {
    var mortarPosition = Object(_inputOutputFunctions__WEBPACK_IMPORTED_MODULE_1__["getMortarPos"])(mortarNo);
    var targetPosition = Object(_inputOutputFunctions__WEBPACK_IMPORTED_MODULE_1__["getTargetPos"])(mortarNo);
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, targetPosition);
    Object(_inputOutputFunctions__WEBPACK_IMPORTED_MODULE_1__["outPutMortarDistance"])(mortarNo, mortarFireData.radius);
    Object(_inputOutputFunctions__WEBPACK_IMPORTED_MODULE_1__["outPutMortarDirection"])(mortarNo, mortarFireData.radians);
  }

  function calcMortarFireDataGrid(mortar, target) {
    var mortarPosition = {
      east: mortar.getInputEast(),
      north: mortar.getInputNorth()
    };
    var targetPosition = {
      east: target.getInputEast(),
      north: target.getInputNorth()
    };
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
  }

  function calcMortarFireDataPolar(mortar, target, fo) {
    var mortarPosition = {
      east: mortar.getInputEast(),
      north: mortar.getInputNorth()
    };
    var foPosition = {
      east: fo.getInputEast(),
      north: fo.getInputNorth()
    };
    var foPointerToTarget = {
      radius: target.getInputFODistance(),
      radians: target.getInputOTLine()
    };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    target.eastInputElem.value = targetPosition.east.toString();
    target.northInputElem.value = targetPosition.north.toString();
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
  }

  function calcMortarFireDataShiftGrid(mortar, target) {
    var mortarPosition = {
      east: mortar.getInputEast(),
      north: mortar.getInputNorth()
    };
    var targetPosition = {
      east: target.getInputEast(),
      north: target.getInputNorth()
    };
    var shiftData = {
      right: target.getInputRight() - target.getInputLeft(),
      add: target.getInputAdd() - target.getInputDrop()
    };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.getInputOTLine());
    target.shiftedEastElem.value = shiftedTarget.east;
    target.shiftedNorthElem.value = shiftedTarget.north;
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
  }

  function calcMortarFireDataShiftPolar(mortar, target, fo) {
    var mortarPosition = {
      east: mortar.getInputEast(),
      north: mortar.getInputNorth()
    };
    var foPosition = {
      east: fo.getInputEast(),
      north: fo.getInputNorth()
    };
    var foPointerToTarget = {
      radius: target.getInputFODistance(),
      radians: target.getInputOTLine()
    };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    var shiftData = {
      right: target.getInputRight() - target.getInputLeft(),
      add: target.getInputAdd() - target.getInputDrop()
    };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.getInputOTLine());
    var shiftedOTData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(foPosition, shiftedTarget);
    target.shiftedEastElem.value = shiftedTarget.east;
    target.shiftedNorthElem.value = shiftedTarget.north;
    target.shiftedOTDistanceElem.value = shiftedOTData.radius;
    target.shiftedOTLineElem.value = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(shiftedOTData.radians);
    var mortarFireData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(mortarFireData.radians));
  }

  function offSetShiftGrid(target) {
    var targetPosition = {
      east: target.getInputEast(),
      north: target.getInputNorth()
    };
    var shiftData = {
      right: target.getInputRight() - target.getInputLeft(),
      add: target.getInputAdd() - target.getInputDrop()
    };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.getInputOTLine());
    target.eastInputElem.value = shiftedTarget.east;
    target.northInputElem.value = shiftedTarget.north;
    target.LeftCorrectionInputElem.value = 0;
    target.RightCorrectionInputElem.value = 0;
    target.AddCorrectionInputElem.value = 0;
    target.DropCorrectionInputElem.value = 0;
    target.shiftedEastElem.value = 0;
    target.shiftedNorthElem.value = 0;
  }

  function offSetShiftPolar(target, fo) {
    var foPosition = {
      east: fo.getInputEast(),
      north: fo.getInputNorth()
    };
    var foPointerToTarget = {
      radius: target.getInputFODistance(),
      radians: target.getInputOTLine()
    };
    var targetPosition = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPointingLocationFromPoint1"])(foPosition, foPointerToTarget);
    var shiftData = {
      right: target.getInputRight() - target.getInputLeft(),
      add: target.getInputAdd() - target.getInputDrop()
    };
    var shiftedTarget = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["shiftPoint"])(targetPosition, shiftData, target.getInputOTLine());
    var shiftedOTData = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["getPoint1ToPoint2InPolar"])(foPosition, shiftedTarget);
    target.eastInputElem.value = shiftedTarget.east;
    target.northInputElem.value = shiftedTarget.north;
    target.FODistanceInputElem.value = shiftedOTData.radius;
    target.OTLineInputElem.value = Object(_coordTransformFunctions__WEBPACK_IMPORTED_MODULE_0__["rad2mil"])(shiftedOTData.radians);
    target.shiftedEastElem.value = 0;
    target.shiftedNorthElem.value = 0;
    target.LeftCorrectionInputElem.value = 0;
    target.RightCorrectionInputElem.value = 0;
    target.AddCorrectionInputElem.value = 0;
    target.DropCorrectionInputElem.value = 0;
    target.shiftedOTDistanceElem.value = 0;
    target.shiftedOTLineElem.value = 0;
  } //@ts-ignore


  window.calcMortarByGrid = calcMortarByGrid;
  /***/
},
/* 5 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "creataMap", function () {
    return creataMap;
  });
  /* harmony import */


  var _createDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  var minX = 0;
  var maxX = 0;
  var minY = 0;
  var maxY = 0;
  var dstncBtwnGridLinesBold = 10; //1000 for production

  var boldLineWidth = 0.05;
  var fontSize = 1;
  var locPointRadius = 0.2;
  var startingX = 0;
  var endingX = 0;
  var startingY = 0;
  var endingY = 0;
  var mapSvg;

  function creataMap() {
    mapSvg = document.getElementById("mapSvg");
    mapSvg.innerHTML = "";
    trackMapMargins();
    drawGridLines();
    setViewBox();

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortarTargetRelationShip"].edges.forEach(function (pair) {
      var target = pair.target;
      var mortar = pair.mortar;
      drawCustomLine(mortar.getInputEast(), target.getInputEast(), mortar.getInputNorth(), target.getInputNorth(), mapSvg, boldLineWidth / 4, "255,0,0");
    });

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortars"].forEach(function (mortar) {
      addLocationPointOnMap(mortar, mapSvg, "red");
    });

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["targets"].forEach(function (target) {
      addLocationPointOnMap(target, mapSvg, "green");
    });

    addLocationPointOnMap(_createDomElements__WEBPACK_IMPORTED_MODULE_0__["frontObserver"], mapSvg, "blue");
    mapSvg.innerHTML = mapSvg.innerHTML + " ";
  }

  function trackMapMargins() {
    minX = 0;
    maxX = 0;
    minY = 0;
    maxY = 0;

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["mortars"].forEach(function (mortar) {
      trackMinMax(mortar);
    });

    _createDomElements__WEBPACK_IMPORTED_MODULE_0__["targets"].forEach(function (target) {
      trackMinMax(target);
    });

    trackMinMax(_createDomElements__WEBPACK_IMPORTED_MODULE_0__["frontObserver"]);
    var maxD = Math.max(maxX - minX, maxY - minY);

    if (maxD < 100) {
      dstncBtwnGridLinesBold = 10;
    } // else if(maxD < 1000){
    //   dstncBtwnGridLinesBold = 100;
    // }
    else {
        dstncBtwnGridLinesBold = 1000;
      }

    startingX = Math.floor(minX / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    endingX = Math.ceil(maxX / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    startingY = Math.floor(minY / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    endingY = Math.ceil(maxY / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold; //te arī noteikt fonta lielumu un bumbuļu izmērus

    var mapLenght = Math.max(endingX - startingX, endingY - startingY);
    fontSize = Math.ceil(mapLenght / 50);
    locPointRadius = 0.1 * Math.ceil(mapLenght / 25);
    boldLineWidth = locPointRadius / 4;
  }

  function addLocationPointOnMap(location, parentSVG, color) {
    if (Number(location.eastInputElem.value) == 0 && Number(location.northInputElem.value) == 0) {
      return;
    }

    var mortarSVGElem = document.createElement("circle");
    mortarSVGElem.setAttribute("cx", location.eastInputElem.value);
    mortarSVGElem.setAttribute("cy", -location.northInputElem.value);
    mortarSVGElem.setAttribute("r", locPointRadius.toString());
    mortarSVGElem.setAttributeNS(null, 'style', 'fill: ' + color + ';');
    parentSVG.appendChild(mortarSVGElem);
    var mortarSVGRounding = document.createElement("circle");
    mortarSVGRounding.setAttribute("cx", location.eastInputElem.value);
    mortarSVGRounding.setAttribute("cy", -location.northInputElem.value);
    mortarSVGRounding.setAttribute("r", "4%"); //5%

    mortarSVGRounding.setAttributeNS(null, 'style', 'fill: ' + color + '; fill-opacity:0.4 ');
    parentSVG.appendChild(mortarSVGRounding);
    var locNum = document.createElement("text");
    locNum.setAttribute("x", (Number(location.eastInputElem.value) + locPointRadius).toString());
    locNum.setAttribute("y", (-Number(location.northInputElem.value) - locPointRadius).toString());
    locNum.setAttribute("font-size", fontSize.toString());
    locNum.innerHTML = location.DisplayTitle;
    parentSVG.appendChild(locNum);
  }

  function trackMinMax(location) {
    if (Number(location.eastInputElem.value) == 0 && Number(location.northInputElem.value) == 0) return;

    if (minX == 0 && maxX == 0 && minY == 0 && maxY == 0) {
      minX = Number(location.eastInputElem.value);
      maxX = Number(location.eastInputElem.value);
      minY = Number(location.northInputElem.value);
      maxY = Number(location.northInputElem.value);
    } else {
      if (minX > Number(location.eastInputElem.value)) {
        minX = Number(location.eastInputElem.value);
      }

      if (maxX < Number(location.eastInputElem.value)) {
        maxX = Number(location.eastInputElem.value);
      }

      if (minY > Number(location.northInputElem.value)) {
        minY = Number(location.northInputElem.value);
      }

      if (maxY < Number(location.northInputElem.value)) {
        maxY = Number(location.northInputElem.value);
      }
    }
  }

  function drawGridLines() {
    if (minX == 0 && maxX == 0 && minY == 0 && maxY == 0) {
      return;
    }

    var deltaX = maxX - minX;
    var deltaY = maxY - minY;
    var gridStrokeWidth = boldLineWidth; //0.05;

    var boldLinesCountX = Math.ceil(deltaX / dstncBtwnGridLinesBold);
    var boldLinesCountY = Math.ceil(deltaY / dstncBtwnGridLinesBold);
    var maxLinesPerDrawing = 15;

    if (Math.max(boldLinesCountX, boldLinesCountY) > maxLinesPerDrawing) {
      return;
    } //  var startingX = Math.floor(minX/dstncBtwnGridLinesBold)*dstncBtwnGridLinesBold;
    //  var startingY = Math.floor(minY/dstncBtwnGridLinesBold)*dstncBtwnGridLinesBold;
    //  var endingX = Math.ceil(maxX/dstncBtwnGridLinesBold)*dstncBtwnGridLinesBold;
    //  var endingY = Math.ceil(maxY/dstncBtwnGridLinesBold)*dstncBtwnGridLinesBold;


    var linePos = 0;

    for (linePos = startingX; linePos <= endingX; linePos += dstncBtwnGridLinesBold) {
      drawVerticalLine(linePos, mapSvg, gridStrokeWidth, true);
      drawThinLines(linePos, false, gridStrokeWidth);
    }

    for (linePos = startingY; linePos <= endingY; linePos += dstncBtwnGridLinesBold) {
      drawHorizontalLine(linePos, mapSvg, gridStrokeWidth, true);
      drawThinLines(linePos, true, gridStrokeWidth);
    }
  }

  function drawThinLines(startingPos, isHorizontal, gridStrokeWidth) {
    var dstncBtwnGridLinesThin = dstncBtwnGridLinesBold / 4;
    var dstncBtwnGridLinesXtrThin = dstncBtwnGridLinesThin / 10;

    for (var linePos = startingPos; linePos < startingPos + dstncBtwnGridLinesBold; linePos += dstncBtwnGridLinesThin) {
      if (linePos > startingPos) isHorizontal ? drawHorizontalLine(linePos, mapSvg, gridStrokeWidth / 2, false) : drawVerticalLine(linePos, mapSvg, gridStrokeWidth / 2, false);

      for (var eThinlinePos = linePos + dstncBtwnGridLinesXtrThin; eThinlinePos < linePos + dstncBtwnGridLinesThin; eThinlinePos += dstncBtwnGridLinesXtrThin) {
        isHorizontal ? drawHorizontalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false) : drawVerticalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false);
      }
    }
  } // var nearStartX = Math.floor(0.1*(startingX-endingX));
  // var nearStartY = Math.floor(0.1*(startingY-endingY));


  function drawHorizontalLine(linePos, parentElem, strokeWidth, showLineNum) {
    var lineVGElem = document.createElement("line");
    lineVGElem.setAttribute("x1", minX - dstncBtwnGridLinesBold);
    lineVGElem.setAttribute("x2", maxX + dstncBtwnGridLinesBold);
    lineVGElem.setAttribute("y1", -linePos);
    lineVGElem.setAttribute("y2", -linePos); //var strokeWidth = isBold ? 0.5 : 0.25;

    lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
    parentElem.appendChild(lineVGElem); //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />

    if (showLineNum) {
      var nearStartX = Math.ceil(startingX + dstncBtwnGridLinesBold / 6); //var nearStartX = Math.ceil(0.1*(endingX-startingX));
      //var nearStartY = Math.floor(0.1*(startingY-endingY));

      var lineNum = document.createElement("text");
      lineNum.setAttribute("x", nearStartX.toString());
      lineNum.setAttribute("y", -linePos);
      lineNum.setAttribute("font-size", fontSize.toString());
      var displayLineNum = linePos < 1000 ? linePos : linePos / 1000;
      lineNum.innerHTML = displayLineNum.toString();
      parentElem.appendChild(lineNum); //<text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
    }
  }

  function drawVerticalLine(linePos, parentElem, strokeWidth, showLineNum) {
    var lineVGElem = document.createElement("line");
    lineVGElem.setAttribute("y1", -(minY - dstncBtwnGridLinesBold));
    lineVGElem.setAttribute("y2", -(maxY + dstncBtwnGridLinesBold));
    lineVGElem.setAttribute("x1", linePos);
    lineVGElem.setAttribute("x2", linePos); //var strokeWidth = isBold ? 0.5 : 0.25;

    lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
    parentElem.appendChild(lineVGElem); //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />

    if (showLineNum) {
      //var nearStartX = Math.floor(0.1*(startingX-endingX));
      //var nearStartY = Math.ceil(-0.1*(endingY-startingY));
      var nearStartY = Math.ceil(-1 * startingY - dstncBtwnGridLinesBold / 6);
      var lineNum = document.createElement("text");
      lineNum.setAttribute("y", nearStartY.toString());
      lineNum.setAttribute("x", linePos);
      lineNum.setAttribute("font-size", fontSize.toString());
      var displayLineNum = linePos < 1000 ? linePos : linePos / 1000;
      lineNum.innerHTML = displayLineNum.toString();
      parentElem.appendChild(lineNum);
    }
  }

  function drawCustomLine(x1, x2, y1, y2, parentElem, strokeWidth, colorRGBString) {
    var lineVGElem = document.createElement("line");
    lineVGElem.setAttribute("x1", x1.toString());
    lineVGElem.setAttribute("x2", x2.toString());
    lineVGElem.setAttribute("y1", (-y1).toString());
    lineVGElem.setAttribute("y2", (-y2).toString()); //var strokeWidth = isBold ? 0.5 : 0.25;

    lineVGElem.setAttribute("style", 'stroke:rgb(' + colorRGBString + ' );stroke-width:' + strokeWidth);
    parentElem.appendChild(lineVGElem); //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
  }

  function setViewBox() {
    // var viewBoxValue = 
    //   (minX-dstncBtwnGridLinesBold) + " " + 
    //   (-1)*(minY-dstncBtwnGridLinesBold) + " " + 
    //   (maxX+dstncBtwnGridLinesBold) + " " + 
    //   (-1)*(maxY+dstncBtwnGridLinesBold);
    var startingX = Math.floor(minX / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    var endingX = Math.ceil(maxX / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    var startingY = Math.floor(minY / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    var endingY = Math.ceil(maxY / dstncBtwnGridLinesBold) * dstncBtwnGridLinesBold;
    var xLimit = minX - dstncBtwnGridLinesBold;
    var xCeil = maxX + dstncBtwnGridLinesBold;
    var yLimit = minY - dstncBtwnGridLinesBold;
    var yCeil = maxY + dstncBtwnGridLinesBold;
    var sizeLimit = Math.max(maxX - minX, maxY - minY) + dstncBtwnGridLinesBold; // var viewBoxValue = 
    //   xLimit + " " + 
    //   (-1)*yCeil + " " + 
    //   sizeLimit+ " " + 
    //   sizeLimit;

    var viewBoxValue = startingX + " " + -1 * endingY + " " + (endingX - startingX) + " " + (endingY - startingY); // var viewBoxValue = 
    // xLimit + " " +
    // (-1) * (yCeil - yLimit)+
    // //(-1) * yLimit + " " +
    // (xCeil - xLimit) + " " +
    // //(-1) * (yCeil - yLimit)
    // (-1) * yLimit + " " ;

    mapSvg.setAttribute("viewBox", viewBoxValue);
  }
  /***/

}
/******/
]);