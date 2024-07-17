/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("fillBasicRegisterInformationStep", () => {
	const firstName = "MSR teste";
	const email = "msr@test.com";
	const confirmEmail = "msr@test.com";
	const phone = "81999999999";
	const dateOfBirth = "18111996";
	const colorOption = "Indígena";

	cy.get("#firstName").type(firstName);
	cy.get("#email").type(email);
	cy.get("#confirmEmail").type(confirmEmail);
	cy.get("#phone").type(phone);
	cy.get("#dateOfBirth").type(dateOfBirth);
	cy.get("#color").click();
	cy.contains(colorOption).should("be.visible").click();
});

Cypress.Commands.add("fillDisabilityStep", () => {
	const hasDisability = "Sim";
	cy.contains(hasDisability).click();
});

Cypress.Commands.add("fillGenderIdentityStep", () => {
	const gender = "Mulher Transgênero";
	cy.contains(gender).click();
});

Cypress.Commands.add("fillAcceptsOnlineSupportStep", () => {
	const accept = "Sim, aceito ser atendida online";
	const notAccept = "Não, só posso receber atendimento presencial";

	cy.findByRole("radio", {
		name: accept,
	}).should("exist");
	cy.findByRole("radio", {
		name: notAccept,
	}).should("exist");

	cy.findByRole("radio", {
		name: accept,
	}).click();
});

Cypress.Commands.add("fillSupportTypeStep", () => {
	cy.findByLabelText("Acolhimento psicológico").click({ force: true });
	cy.findByLabelText("Acolhimento jurídico").click({ force: true });
});

Cypress.Commands.add("fillGenderViolenceStep", () => {
	cy.findByLabelText("Não").click({ force: true });
});

Cypress.Commands.add("fillViolenceLocationStep", () => {
	cy.findByLabelText("Sim").click({ force: true });
});

Cypress.Commands.add("fillExternalSupportStep", () => {
	cy.findByLabelText("Sim").click({ force: true });
});

Cypress.Commands.add("fillFinancialNeedStep", () => {
	cy.findByLabelText("Sim").click({ force: true });
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
