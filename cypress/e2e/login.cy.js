describe('React App Test', () => {

    it('opens homepage', () => {
        cy.visit('http://localhost:3000')

        cy.title().should('exist')
    })

    it('checks login button', () => {
        cy.visit('http://localhost:3000')

        cy.get('#login-btn')
            .should('be.visible')
    })
})
