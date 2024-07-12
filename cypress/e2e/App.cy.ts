describe("App", () => {
	it("should render all fields", () => {
		cy.visit("/");

		cy.fillFirstStep();

		cy.findByRole("button", { name: "Continuar" }).should("exist");
	});

	it("should continue to step2 if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillFirstStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		// Step 2
		cy.fillSecondStep();
	});

	it("should continue to step3 if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillFirstStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		// Step 2
		cy.fillSecondStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre o acolhimento");
	});

	it("should continue to step4 if all fields are filled correctly", () => {
		// Step 3
		cy.visit("/");

		cy.fillFirstStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSecondStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillThirdStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		// Step 4
		cy.fillFourthStep();
	});
});
