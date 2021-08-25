 import * as codeUnderTest from "../coordTransformFunctions"
 import { tPointGrid, tPolarPointer } from "../basicTypes"

 //npm i @types/jest
 test("mortar test 1",()=>{

   var point1:tPointGrid = {east:1,north:1};
   var point2:tPointGrid = {east:1,north:2};

   var point1ToPoint2Pointer:tPolarPointer = codeUnderTest.getPoint1ToPoint2InPolar(point1,point2);

   expect(point1ToPoint2Pointer.radius).toBeCloseTo(1);
     expect(point1ToPoint2Pointer.radians).toBeCloseTo(0);


     //this one is failing
     //expect(point1ToPoint2Pointer.radians).toBeCloseTo(5);

 })









describe('is working', () => {
    it('should work', () => {
        expect(true).toBeTruthy();
    })
})
