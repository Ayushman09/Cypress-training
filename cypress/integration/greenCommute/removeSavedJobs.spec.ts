import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';
context('Remove saved Jobs', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('testing remove functionality', ()=> {
        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/savedJobs');
        })

        it('remove a saved job',()=>{
            robotHands.clickonDomusingLocator("data-testid","jobList-placeholder");
            cy.wait(2000);
            
            //robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",1);
            robotHands.clickOnClasswithButtonTagandIndex("button",0);

            
        })
    })
})