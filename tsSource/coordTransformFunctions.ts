import {tPointGrid, tPolarPointer,tShiftGrid} from "./basicTypes";

export var milsInDeg = 160/9;

export function getPoint1ToPoint2InPolar (point1:tPointGrid,point2:tPointGrid):tPolarPointer {
  var dEast = point2.east - point1.east;
  var dNorth = point2.north  - point1.north;

  var distance = Math.sqrt(dEast*dEast + dNorth*dNorth);

  var radiansZtoE = Math.atan2(dEast,dNorth);

  return {radius:distance,radians:radiansZtoE};
}

export function getPointingLocationFromPoint1 (point1:tPointGrid, pointer: tPolarPointer):tPointGrid {
  var dEast = pointer.radius * Math.sin(pointer.radians);
  var dNorth = pointer.radius * Math.cos(pointer.radians);

  var pointingLocation:tPointGrid = {
    east: dEast + point1.east,
    north: dNorth + point1.north
  }
  return pointingLocation;
}

export function shiftPoint(startingPoint:tPointGrid,shiftGrid:tShiftGrid,pointerAngleRadians:number):tPointGrid {
  var shiftAngle = Math.atan2(shiftGrid.right,shiftGrid.add);
  var shiftedAngle = pointerAngleRadians + shiftAngle;

  var shiftedDistance = Math.sqrt( shiftGrid.add*shiftGrid.add + shiftGrid.right*shiftGrid.right );

  var shiftedPoint = getPointingLocationFromPoint1(startingPoint,{radius:shiftedDistance,radians:shiftedAngle});
  return shiftedPoint;
}

export function rad2mil(radians:number):number{
  var degrees = rad2deg(radians);
  var miljens = degrees*(milsInDeg+Number.EPSILON);
  return miljens;
}

export function rad2deg(radians:number):number{
  var degrees = radians*180/Math.PI;
  if(degrees<0){
    degrees = degrees +360;
  };
  return degrees;
}

export function deg2rad(degrees:number):number{
  var radians = degrees*Math.PI/180;
  return radians;
}

export function mil2rad(miljens:number):number{
  var degrees = miljens/(milsInDeg-Number.EPSILON);
  var radians = deg2rad(degrees);
  return radians;
}
