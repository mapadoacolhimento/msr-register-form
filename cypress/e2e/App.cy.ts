describe("App", () => {
	it("should render all fields", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();

		cy.findByRole("button", { name: "Continuar" }).should("exist");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre você");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre você");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre o acolhimento");
	});

	it.only("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
	});
});
