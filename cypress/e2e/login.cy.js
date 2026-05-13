describe('React App Test', () => {

    it('opens homepage', () => {
        cy.visit('https://dev.deepcarve.online')

        cy.title().should('exist')
    })

    it('checks login button', () => {
        cy.visit('https://dev.deepcarve.online')

        cy.get('#login-btn')
            .should('be.visible')
    })
})
