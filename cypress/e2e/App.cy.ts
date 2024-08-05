import userData from "../fixtures/userData.json";

describe("App", () => {
	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillViolenceLocationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillFinancialNeedStep();
	});

	it("should go back to the previous step when the back button is clicked", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();

		cy.findByRole("button", { name: "Voltar para o passo anterior" }).click();

		const { firstName } = userData;

		cy.get("#firstName").type(firstName);
	});
});
