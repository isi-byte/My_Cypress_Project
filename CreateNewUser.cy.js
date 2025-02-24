import * as locators from '../pageobjects/locators.js';
import {faker} from "@faker-js/faker";
const firstname =faker.name.firstName();
const lastname =faker.name.lastName();
const email =faker.internet.email();



           describe('Validate all required fields for creating new account',
           () => {
            beforeEach(() => {
            cy.visit(locators.URL)
            cy.get(locators.CreatNewAccBtn).click()


        })

         it('Verify that new user cannot be created without firstname', () => {
            cy.get(locators.lastnameField).type('TesterCyp')
            cy.get(locators.EmailField).type('UK123@gmail.com')
            cy.get(locators.PasswordField).type('Testing123!')
            cy.get(locators.PasswordConfirmation).type('Testing123!')
            cy.get(locators.CreateAccBtn).click()
            //cy.get('#firstname-error').should('have.text', 'This is a required field.')


         })



            it('Verify that new user cannot be created without lastname', () => {
                cy.get(locators.firstnameField).type('isi')
                cy.get(locators.EmailField).type('UK123@gmail.com')
                cy.get(locators.PasswordField).type('Testing123!')
                cy.get(locators.PasswordConfirmation).type('Testing123!')
                cy.get(locators.CreateAccBtn).click()
                cy.get('#lastname-error').should('have.text', 'This is a required field.')

            })


            it('Verify that new user cannot be created without Email', () => {
                cy.get(locators.firstnameField).type('isi')
                cy.get(locators.lastnameField).type('TesterCyp')
                //cy.get('#email_address').type('UK123@gmail.com')
                cy.get(locators.PasswordField).type('Testing123!')
                cy.get(locators.PasswordConfirmation).type('Testing123!')
                cy.get(locators.CreateAccBtn).click()
                cy.get('#email_address-error').should('have.text', 'This is a required field.')

            })

            it('Verify that new user cannot be created without Password', () => {
                cy.get(locators.firstnameField).type('isi')
                cy.get(locators.lastnameField).type('TesterCyp')
                cy.get(locators.EmailField).type('UK123@gmail.com')
                //cy.get('#password').type('Testing123!')
                cy.get(locators.PasswordConfirmation).type('Testing123!')
                cy.get(locators.CreateAccBtn).click()
                cy.get('#password-error').should('have.text', 'This is a required field.')

            })


                it('Verify that new user cannot be created without ConfirmPassword', () => {
                 cy.get(locators.firstnameField).type('isi')
                 cy.get(locators.lastnameField).type('TesterCyp')
                 cy.get(locators.EmailField).type('UK123@gmail.com')
                 cy.get(locators.PasswordField).type('Testing123!')
                //cy.get('#password-confirmation').type('Testing123!')should('have.text', 'This is a required field.')
                cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()


            })


             it('Verify that user can create new account', () => {
                 cy.get(locators.firstnameField).type(firstname)
                 cy.get(locators.lastnameField).type(lastname)
                 cy.get(locators.EmailField).type(email)
                 cy.get(locators.PasswordField).type('Testing123!')
                 cy.get(locators.PasswordConfirmation).type('Testing123!')
                 cy.get(locators.CreateAccBtn).click()
                 cy.wait(5000)
                 cy.get('.message-success > div').should('have.text', 'Thank you for registering with Main Website Store.')


})


    })










