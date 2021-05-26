import {Dependencies, RobotHands, RobotEyes} from '../../robots/greenCommute/GreenCommuteRobot';
context('Filter Jobs', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('testing filters to jobs', ()=> {
        beforeEach(() => {
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/findJobs');
        })

        it("no location and skills ",()=>{

            robotHands.clickonDomusingLocator("data-testid","filterButton")
            robotHands.checkboxWithClass('input[name="Yes"]')
            robotHands.checkboxWithClass('input[name="0-10 kms"]')
            robotHands.checkboxWithClass('input[name="10-20 kms"]')
    
            robotHands.clickOnClasswithButtonTagandIndex("button",-1)
    
    
            robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",15)
    
        })
        it("no filtering",()=>{
    
            robotHands.typeTextonDom('placeholder','Location','mum{downarrow}{enter}')
            robotHands.typeTextonDom('placeholder','Search skills','{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
    
            robotHands.clickOnClasswithButtonTagandIndex(".MuiButton-root",0)
            robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)
    
        })
        it("not entering skills ",()=>{
    
            robotHands.typeTextonDom('placeholder','Location','bang{downarrow}{enter}')
            robotHands.clickonDomusingLocator("data-testid","filterButton")
    
            robotHands.checkboxWithClass('input[name="Yes"]')
            robotHands.checkboxWithClass('input[name="0-10 kms"]')
    
            robotHands.clickOnClasswithButtonTagandIndex("button",-1)
            robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)
    
        })
        it("not entering location ",()=>{
    
            robotHands.typeTextonDom('placeholder','Search skills','soft{downarrow}{enter}')
            robotHands.clickonDomusingLocator("data-testid","filterButton")
    
            robotHands.checkboxWithClass('input[name="Yes"]')
            robotHands.checkboxWithClass('input[name="0-10 kms"]')
    
            robotHands.clickOnClasswithButtonTagandIndex("button",-1)
    
            robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)
    
        })

        it('add distance filter',()=>{
            robotHands.typeTextonDom('placeholder','Location','hyd{downarrow}{enter}');
            robotHands.clickonDomusingLocator("data-testid","filterButton");
            robotHands.checkboxWithClass('input[name="Yes"]');
            robotHands.checkboxWithClass('input[name="10-20 kms"]');
            robotHands.clickOnClasswithButtonTagandIndex("button",-1);


        })

        it("add 2 distance filter ",()=>{

            robotHands.typeTextonDom('placeholder','Location','hyd{downarrow}{enter}');
            robotHands.clickonDomusingLocator("data-testid","filterButton");
            robotHands.checkboxWithClass('input[name="Yes"]');
            robotHands.checkboxWithClass('input[name="0-10 kms"]');
            robotHands.checkboxWithClass('input[name="10-20 kms"]');
            robotHands.clickOnClasswithButtonTagandIndex("button",-1);
            robotHands.typeTextonDom('placeholder','Search skills','ux{downarrow}{enter}');
            robotHands.clickOnClasswithButtonTagandIndex(".MuiButton-root",0);
            robotEyes.hasLengthForDomClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",4);
    
        })

        
    })
})