/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import "@testing-library/cypress/add-commands";
import userData from "../fixtures/userData.json";

Cypress.Commands.add("goThroughHomePage", () => {
	cy.findByRole("button", { name: "Quero ser acolhida" }).click();
});

Cypress.Commands.add("fillBasicRegisterInformationStep", () => {
	const { firstName, email, confirmEmail, phone, dateOfBirth, colorOption } =
		userData;

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
	const { hasDisability } = userData;
	cy.contains("Você é PcD (Pessoa com deficiência)?").should("exist");
	cy.contains(hasDisability).click();
});

Cypress.Commands.add("fillGenderIdentityStep", () => {
	const { gender } = userData;
	cy.contains("Qual sua identidade de gênero?").should("exist");
	cy.findByRole("radio", { name: gender }).click();
});

Cypress.Commands.add("fillAcceptsOnlineSupportStep", () => {
	const { acceptOnlineSupport } = userData;

	cy.findByRole("heading", { name: "Sobre o acolhimento" }).should("exist");
	cy.contains("Você aceitaria ser atendida online?").should("exist");
	cy.findByRole("radio", {
		name: acceptOnlineSupport[0],
	}).should("exist");
	cy.findByRole("radio", {
		name: acceptOnlineSupport[1],
	}).should("exist");

	cy.findByRole("radio", {
		name: acceptOnlineSupport[0],
	}).click();
});

Cypress.Commands.add("fillSupportTypeStep", () => {
	const { supportTypes } = userData;
	cy.contains("Que tipo de acolhimento você precisa?").should("exist");
	cy.findByLabelText(supportTypes[0]).click({ force: true });
	cy.findByLabelText(supportTypes[1]).click({ force: true });
});

Cypress.Commands.add("fillGenderViolenceStep", () => {
	const { genderViolence } = userData;
	cy.contains("Você sofreu ou está sofrendo violência de gênero?").should(
		"exist"
	);
	cy.findByLabelText(genderViolence).click({ force: true });
});

Cypress.Commands.add("fillViolenceLocationStep", () => {
	const { violenceLocation } = userData;
	cy.contains("A violência ocorreu no Brasil?").should("exist");
	cy.findByLabelText(violenceLocation).click({ force: true });
});

Cypress.Commands.add("fillExternalSupportStep", () => {
	const { externalSupport } = userData;
	cy.contains(
		"Você está recebendo acompanhamento jurídico pela defensoria pública?"
	).should("exist");
	cy.findByLabelText(externalSupport).click({ force: true });
});

Cypress.Commands.add("fillFinancialNeedStep", () => {
	const { financialNeed } = userData;
	cy.contains(
		"Você declara que não pode pagar por atendimento jurídico/psicológico?"
	).should("exist");
	cy.findByLabelText(financialNeed).click({ force: true });
});

export {};
