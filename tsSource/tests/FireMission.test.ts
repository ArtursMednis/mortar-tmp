import { FireMission } from "../FireMission";


describe('is working', () => {

    var mission: FireMission = new FireMission();
    mission.addMortar();
    mission.addTarget();
    mission.mortarTargetRelationShip.addPair(mission.mortars[0], mission.targets[0]);

    it('should work', () => {
        expect(true).toBeTruthy();
    })
})