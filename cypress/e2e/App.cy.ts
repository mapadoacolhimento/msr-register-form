import userData from "../fixtures/userData.json";

describe("App", () => {
	it("should continue to next step if all fields are filled correctly", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Eu sou uma mulher cis");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep("Não");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillViolenceLocationStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillFinancialNeedStep("Sim");
	});

	it("should redirect to `fora-criterios` page if gender identity is filled with option `Não me identifico como mulher`", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Não me identifico como mulher");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.url().should("include", "/fora-criterios");
	});

	it("should redirect to `fora-criterios` page if gender violence is filled with option `Não`", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Eu sou uma mulher cis");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep("Não");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.url().should("include", "/fora-criterios");
	});

	it("should redirect to `fora-criterios` page if external support  is filled with option `Sim`", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Eu sou uma mulher cis");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.url().should("include", "/fora-criterios");
	});

	it("should redirect to `fora-criterios` page if violence location is filled with option `Não`", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Eu sou uma mulher cis");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep("Não");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillViolenceLocationStep("Não");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.url().should("include", "/fora-criterios");
	});

	it("should redirect to `fora-criterios` page if financial need is filled with option `Não`", () => {
		cy.visit("/");
		cy.goThroughHomePage();

		cy.fillBasicRegisterInformationStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillDisabilityStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderIdentityStep("Eu sou uma mulher cis");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillAcceptsOnlineSupportStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillSupportTypeStep();
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillGenderViolenceStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillExternalSupportStep("Não");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillViolenceLocationStep("Sim");
		cy.findByRole("button", { name: "Continuar" }).click();

		cy.fillFinancialNeedStep("Não");

		cy.get("#terms").click();
		cy.findByRole("button", { name: "Enviar" }).click();

		cy.url().should("include", "/fora-criterios");
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
