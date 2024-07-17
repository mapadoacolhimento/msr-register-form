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

		cy.findByText("Seus dados");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre você");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByText("Sobre o acolhimento");
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
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
	});

	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
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

		cy.fillViolenceLocationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep();
	});

	it.only("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDiversityInformationStep();
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

		cy.fillViolenceLocationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillFinancialNeedStep();
	});
});
