describe('BDD Atlas', () => {
    it('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq','http://bdd.atlasid.tech/')
        // different method for same assert url
        cy.url().then((url) => {
            expect(url).to.be.equal('http://bdd.atlasid.tech/')
        })
    })
    
    it('Type a Quote', () => {
        cy.get('#inputQuote').type('Testing text')
    })
    it('Click dropdown color', () => {
        cy.get('#colorSelect').select('Yellow')
    })
    it('Submit a quote', () => {
        cy.get('#buttonAddQuote').click();
        cy.contains('Testing text').should('exist');
    })
    it('Clear specific quote', () => {
        cy.wait(3000);
        // cy.contains('Testing').click().should('not.exist');
        // different method for same assert not exist
        // cy.contains('Testing').then(($elm) => {
        //     cy.get($elm).click();
        //     cy.get($elm).should('not.exist');
        // })
    })

})