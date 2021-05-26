import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';

context('Landing Page (Skills) Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test exceptions on 3rd landing page i.e "Your Skill" ', ()=> {
        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/');
            robotHands.clickFunctionalButton(':nth-child(2) > [data-testid=button]');
            robotHands.clickFunctionalButton(':nth-child(2) > [data-testid=button]');
        })

        
        it('checking back button',() => {
                robotHands.clickFunctionalButton('[data-testid=back-button] > .MuiSvgIcon-root > path');
                robotEyes.checkQuestionLabel('Where do you want to work?')
            })

        it('directly clicking finish', ()=> {
                robotEyes.checkQuestionLabel('What do you want to do?');
                robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
                robotEyes.checkCurrentUrl('/findJobs');
                
            })

        it('adding one skill',()=>{
            robotHands.typeIntoLocation('.MuiInputBase-root','Software');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
        })

        it('add multiple skills',()=>{
            robotHands.typeIntoLocation('.MuiInputBase-root','Software');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            robotHands.typeIntoLocation('.MuiInputBase-root','Python');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            robotHands.typeIntoLocation('.MuiInputBase-root','Javascript');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
        })

        
    })

})