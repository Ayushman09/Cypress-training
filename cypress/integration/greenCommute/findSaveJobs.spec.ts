import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';
context('Find and Save Jobs', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('testing find and save jobs', ()=> {
        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/findJobs');
        })

        it('Search Jobs (functionality)',()=>{
            robotEyes.checkTextOnDom('jss22 > :nth-child(1) > .MuiTypography-root','Find Jobs');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Software {downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
        }) 
        
        it('check search result',()=>{
            robotEyes.checkTextOnDom('jss22 > :nth-child(1) > .MuiTypography-root','Find Jobs');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Software');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotEyes.checkDomObjValue(':nth-child(1) > .jss53 > [data-testid=jobCard-placeholder] > :nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','Software Engineer 1')
        })

        it('changing search value and getting results',() => {
            robotEyes.checkTextOnDom('jss22 > :nth-child(1) > .MuiTypography-root','Find Jobs');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Software {downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotEyes.checkDomObjValue(':nth-child(1) > .jss53 > [data-testid=jobCard-placeholder] > :nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','Software Engineer 1');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','{selectall}{backspace}');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Python {downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotEyes.checkDomObjValue(':nth-child(1) > .jss53 > [data-testid=jobCard-placeholder] > :nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','Python Developer');

        })

        it('Entering wrong skill',()=>{
            robotEyes.checkTextOnDom('jss22 > :nth-child(1) > .MuiTypography-root','Find Jobs');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Sware{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotEyes.checkAlerts('please enter a correct skill');

        })

        it('Save one Job',()=> {
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Software');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotHands.clickFunctionalButton(':nth-child(1) > .jss53 > [data-testid=jobCard-placeholder] > :nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]');
            robotHands.clickFunctionalButton('.MuiGrid-root > .MuiButton-outlined');
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/savedJobs');
            robotEyes.checkTextOnDom('jss37 > :nth-child(1) > [data-testid=cardLabel-placeholder]','Software Engineer1');

        })

        it('Save more than one Job',()=> {
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','Software');
            robotHands.typeIntoLocation('.jss35 > .jss34 > .MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton('[data-testid=find-job] > .MuiButton-root');
            robotHands.clickFunctionalButton(':nth-child(1) > .jss53 > [data-testid=jobCard-placeholder] > :nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]');
            robotHands.clickFunctionalButton('.MuiGrid-root > .MuiButton-outlined');
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/savedJobs');

        })


    })
})