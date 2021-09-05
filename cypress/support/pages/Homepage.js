const locator = require('../locators/HomepageLocator');
let css_color = {
    Yellow: 'background-color: yellow;',
    Blue: 'background-color: blue;',
    Cyan: 'background-color: cyan;',
    White: 'background-color: white;'
}

class Homepage {
    async visit(path){
        cy.visit(path)
        return cy.url().should('eq','http://bdd.atlasid.tech/');
    }

    async type_quote(quote){
        return cy.get(locator.datatestid.ta_quote).type(quote);
    }

    async sel_color(color){
        return cy.get(locator.datatestid.sel_color).select(color);
    }

    async submit_quote(color,quote){
        cy.get('#buttonAddQuote').click();
        cy.get(locator.datatestid.cont_color).should('have.attr','style',css_color[color])
        // diff methods same result
        cy.get(locator.datatestid.cont_color).should('have.attr','style').then((colors)=>{
          expect(colors).to.be.equal(css_color[color])  
        })
        return cy.contains(quote).should('exist');
    }

    async clear_quote(quote){
        return cy.contains(quote).click().should('not.exist');
    }
}

module.exports=Homepage;