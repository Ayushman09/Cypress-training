import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';

context('Landing Page (Work) Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test exceptions on 2nd landing page i.e "Work Location" ', ()=> {
        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/');
            robotHands.clickFunctionalButton(':nth-child(2) > [data-testid=button]');
        })

        it('directly clicking next', ()=> {
            robotEyes.checkQuestionLabel('Where do you want to work?');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
            robotEyes.checkAlerts('please enter the location');
            })

        it('clicking skip button', () => {
            robotHands.clickFunctionalButton(':nth-child(2) > [data-testid=button]');
            robotEyes.checkQuestionLabel('What do you want to do?');

        })

        it('checking back button',() => {
            robotHands.clickFunctionalButton('[data-testid=back-button] > .MuiSvgIcon-root > path');
            robotEyes.checkQuestionLabel('Where do you stay?')
        })
        
        it('typing wrong location',() => {
            robotHands.typeIntoLocation('.MuiInputBase-root','Dlhi');
            // robotEyes.checkDropdownContent('No options');
            robotEyes.checkDropdownException('No options');
        })
        it('typing and selecting valid location', () => {
            robotHands.typeIntoLocation('.MuiInputBase-root','Hyderabad');
            robotHands.typeIntoLocation('.MuiInputBase-root','{downArrow}{enter}');
            robotHands.clickFunctionalButton(':nth-child(1) > [data-testid=button]');
            robotEyes.checkQuestionLabel('What do you want to do?');
        })

    })

})