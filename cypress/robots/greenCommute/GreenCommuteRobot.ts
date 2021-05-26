import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';

export class Dependencies extends BaseDependencies{
    visitGreenCommute(text:string){
        this.accessUrl(text);
    }
}

export class RobotEyes extends BaseEyes {
    checkQuestionLabel(text:string) {
        this.seesDomContainText('.jss6 > .MuiTypography-root', text);
    }

    checkAlerts(text:string){
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains(text);
        }
    
    )}

    // checkDropdownContent(text:string){
    //     this.seesTextInChildDom('.MuiAutocomplete-root','.MuiAutocomplete-noOptions', text);
    // }
    checkDropdownException(text:string){
        cy.get('.MuiAutocomplete-noOptions')
            .should('contain',text);
    }

    checkLocationSelection(text:string){
        this.seesTextWithClass('MuiInputBase-root',text);
    }

    checkCurrentUrl(text:string){
        this.seesPathNameInUrl(text);
    }

    checkTextOnDom(domClass:string,text:string){
        this.seesTextWithClass(domClass,text);
    }

    checkDomObjValue(domObj:string,text:string){
        this.seesDomContainText(domObj,text)
    }
    hasLengthForDomClass(domElement: string,elementName:string,children : string, length: number) {
        cy.get(`[${domElement}="${elementName}"]>${children}`).should('have.length', length);
        return this;
      }
}

export class RobotHands extends BaseHands{
    clickFunctionalButton(text:string){
        this.clickOnDomElement(text);
    }


    typeIntoLocation(className:string,text:string) {
        cy.get(className).type(text);
    }

    // clickOnStuffClassIndex(className:string, domClass:string, index:string){
    //     this.
    // }

    clickOnClasswithButtonTagandIndex(domClass: string, index: number){
    cy.get(domClass)
      .eq(index)
      .click();
    return this;
  }

    clickonDomusingLocator(locatorName: string, locatorValue: string,) {
        cy.get(`[${locatorName}="${locatorValue}"]`).click({multiple:true})
        return this;
      }

    checkboxWithClass(class1:string){
        cy.get(class1).check()
      }

}