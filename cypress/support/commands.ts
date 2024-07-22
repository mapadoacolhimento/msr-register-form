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

	cy.findByRole("heading", { name: "Seus dados" }).should("exist");
	cy.get("#firstName").type(firstName);
	cy.get("#email").type(email);
	cy.get("#confirmEmail").type(confirmEmail);
	cy.get("#phone").type(phone);
	cy.get("#dateOfBirth").type(dateOfBirth);
	cy.get("#color").click();
	cy.contains(colorOption).should("be.visible").click();
});

Cypress.Commands.add("fillDisabilityStep", () => {
	cy.contains("Você é PcD (Pessoa com deficiência)?").should("exist");
	const hasDisability = "Sim";
	cy.contains(hasDisability).click();
});

Cypress.Commands.add("fillGenderIdentityStep", () => {
	cy.contains("Qual sua identidade de gênero?").should("exist");
	const gender = "Eu sou uma mulher cis";
	cy.findByRole("radio", { name: gender }).click();
});

Cypress.Commands.add("fillAcceptsOnlineSupportStep", () => {
	const accept = "Sim, aceito ser atendida online";
	const notAccept = "Não, só posso receber atendimento presencial";

	cy.findByRole("heading", { name: "Sobre o acolhimento" }).should("exist");
	cy.contains("Você aceitaria ser atendida online?").should("exist");
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
	cy.contains("Que tipo de acolhimento você precisa?").should("exist");
	cy.findByLabelText("Acolhimento psicológico").click({ force: true });
	cy.findByLabelText("Acolhimento jurídico").click({ force: true });
});

Cypress.Commands.add("fillGenderViolenceStep", () => {
	cy.contains("Você sofreu ou está sofrendo violência de gênero?").should(
		"exist"
	);
	cy.findByLabelText("Não").click({ force: true });
});

Cypress.Commands.add("fillViolenceLocationStep", () => {
	cy.contains("A violência ocorreu no Brasil?").should("exist");
	cy.findByLabelText("Sim").click({ force: true });
});

Cypress.Commands.add("fillExternalSupportStep", () => {
	cy.contains(
		"Você está recebendo acompanhamento jurídico pela defensoria pública?"
	).should("exist");
	cy.findByLabelText("Sim").click({ force: true });
});

Cypress.Commands.add("fillFinancialNeedStep", () => {
	cy.contains(
		"Você declara que não pode pagar por atendimento jurídico/psicológico?"
	).should("exist");
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
