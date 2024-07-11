/// <reference types="cypress" />

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("fillFirstStep", () => {
	const firstName = "MSR teste";
	const email = "msr@test.com";
	const confirmEmail = "msr@test.com";
	const phone = "81999999999";
	const dateOfBirth = "18111996";

	cy.get("#name").type(firstName);
	cy.get("#email").type(email);
	cy.get("#confirmEmail").type(confirmEmail);
	cy.get("#phone").type(phone);
	cy.get("#dateOfBirth").type(dateOfBirth);
});

Cypress.Commands.add("fillSecondStep", () => {
	const color = "Preta";
	const disabilityStatus = "Não";

	cy.get("#color").select(color);
	cy.get("#disabilityStatus").select(disabilityStatus);
});

Cypress.Commands.add("fillThirdStep", () => {
	cy.get('[aria-labelledby="radio-label-0"]').should("exist");
	cy.get('[aria-labelledby="radio-label-1"]').should("exist");

	cy.get('[aria-labelledby="radio-label-1"]').click();
});

Cypress.Commands.add("fillFourthStep", () => {
	cy.get("#checkbox-group-supportType > :nth-child(2)").click();
	cy.get("#checkbox-group-supportType > :nth-child(3)").click();
});

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {};
