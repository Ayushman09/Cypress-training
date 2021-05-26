import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';

context('Landing Page Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();
    
    describe('test exceptions on landing page i.e "Your Location" ', ()=> {

        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/')
        })

        it('directly clicking next', ()=> {
            robotEyes.checkQuestionLabel('Where do you stay?');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
            robotEyes.checkAlerts('please enter the location');
            })

        it('clicking skip button', () => {
            robotHands.clickFunctionalButton(':nth-child(2) > [data-testid=button]');
            robotEyes.checkQuestionLabel('Where do you want to work?');

        })

        it('typing wrong location',() => {
            robotHands.typeIntoLocation('.MuiInputBase-root','Dlhi');
            // robotEyes.checkDropdownContent('No options');
            robotEyes.checkDropdownException('No options');
        })

        it('typing and selecting valid location', () => {
            robotHands.typeIntoLocation('.MuiInputBase-root','Hyderabad');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            //robotEyes.checkLocationSelection('Hyderabad, Telangana');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
            robotEyes.checkQuestionLabel('Where do you want to work?');
        })
    })
})