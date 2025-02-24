describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    })

    it('Verify that user can login with valid credentials', () => {
        cy.get('#email').type('Janezoe@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Testing123!')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Jane Zoe!')

    })





})
