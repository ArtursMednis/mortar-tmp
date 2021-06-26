import { getPoint1ToPoint2InPolar, rad2mil, rad2deg, getPointingLocationFromPoint1, shiftPoint } from "./coordTransformFunctions";
export function calcMortarFireDataGrid(mortar, target) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var targetPosition = { east: target.location.east, north: target.location.north };
    var mortarFireData = getPoint1ToPoint2InPolar(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + rad2mil(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + rad2deg(mortarFireData.radians));
}
export function calcMortarFireDataPolar(mortar, target, fo) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = getPointingLocationFromPoint1(foPosition, foPointerToTarget);
    target.location.east = targetPosition.east;
    target.location.north = targetPosition.north;
    var mortarFireData = getPoint1ToPoint2InPolar(mortarPosition, targetPosition);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + rad2mil(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + rad2deg(mortarFireData.radians));
}
export function calcMortarFireDataShiftGrid(mortar, target) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var targetPosition = { east: target.location.east, north: target.location.north };
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = shiftPoint(targetPosition, shiftData, target.OTLineRad);
    target.shiftedLocation.east = shiftedTarget.east;
    target.shiftedLocation.north = shiftedTarget.north;
    var mortarFireData = getPoint1ToPoint2InPolar(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + rad2mil(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + rad2deg(mortarFireData.radians));
}
export function calcMortarFireDataShiftPolar(mortar, target, fo) {
    var mortarPosition = { east: mortar.location.east, north: mortar.location.north };
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = getPointingLocationFromPoint1(foPosition, foPointerToTarget);
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = shiftPoint(targetPosition, shiftData, target.OTLineRad);
    var shiftedOTData = getPoint1ToPoint2InPolar(foPosition, shiftedTarget);
    target.shiftedLocation.east = shiftedTarget.east;
    target.shiftedLocation.north = shiftedTarget.north;
    target.shiftedFODistance = shiftedOTData.radius;
    target.shiftedOTLineRad = shiftedOTData.radians;
    var mortarFireData = getPoint1ToPoint2InPolar(mortarPosition, shiftedTarget);
    mortar.addLineToResaults("Distance: " + mortarFireData.radius);
    mortar.addLineToResaults("Direction mil: " + rad2mil(mortarFireData.radians));
    mortar.addLineToResaults("Direction degrees: " + rad2deg(mortarFireData.radians));
}
export function offSetShiftGrid(target) {
    var targetPosition = { east: target.location.east, north: target.location.north };
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = shiftPoint(targetPosition, shiftData, target.OTLineRad);
    target.location.east = shiftedTarget.east;
    target.location.north = shiftedTarget.north;
    target.LeftCorrection = 0;
    target.RightCorrection = 0;
    target.AddCorrection = 0;
    target.DropCorrection = 0;
    target.shiftedLocation.east = 0;
    target.shiftedLocation.north = 0;
}
export function offSetShiftPolar(target, fo) {
    var foPosition = { east: fo.location.east, north: fo.location.north };
    var foPointerToTarget = { radius: target.FODistance, radians: target.OTLineRad };
    var targetPosition = getPointingLocationFromPoint1(foPosition, foPointerToTarget);
    var shiftData = { right: (target.RightCorrection - target.LeftCorrection), add: (target.AddCorrection - target.DropCorrection) };
    var shiftedTarget = shiftPoint(targetPosition, shiftData, target.OTLineRad);
    var shiftedOTData = getPoint1ToPoint2InPolar(foPosition, shiftedTarget);
    target.location.east = shiftedTarget.east;
    target.location.north = shiftedTarget.north;
    target.FODistance = shiftedOTData.radius;
    target.OTLineMil = rad2mil(shiftedOTData.radians);
    target.shiftedLocation.east = 0;
    target.shiftedLocation.north = 0;
    target.LeftCorrection = 0;
    target.RightCorrection = 0;
    target.AddCorrection = 0;
    target.DropCorrection = 0;
    target.shiftedFODistance = 0;
    target.shiftedOTLineRad = 0;
}
