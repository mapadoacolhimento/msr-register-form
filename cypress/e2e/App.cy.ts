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

	it("should display error if name field is empty", () => {
		cy.visit("/");

		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("test@test.com");
		cy.get("#phone").type("81999999999");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).should("exist").click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if email field is empty", () => {
		cy.visit("/");

		cy.get("#firstName").type("MSR teste");
		cy.get("#confirmEmail").type("test@test.com");
		cy.get("#phone").type("81999999999");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if confirmEmail field is empty", () => {
		cy.visit("/");
		cy.get("#firstName").type("MSR teste");
		cy.get("#email").type("test@test.com");
		cy.get("#phone").type("81999999999");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if whatsapp field is empty", () => {
		cy.visit("/");

		cy.get("#firstName").type("MSR teste");
		cy.get("#email").type("test@test.com");
		cy.get("#confirmEmail").type("test@test.com");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if confirm email does not match email", () => {
		cy.visit("/");

		cy.get("#firstName").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("test@test");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Os e-mails precisam ser iguais.").should("exist");
	});

	it("should display error if invalid whatsapp format is entered", () => {
		cy.visit("/");

		cy.get("#firstName").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("msr@test.com");
		cy.get("#phone").type("9999");
		cy.get("#dateOfBirth").type("11111111");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Insira um número de telefone válido com DDD.").should("exist");
	});

	it("should display error if date of birth field is empty", () => {
		cy.visit("/");

		cy.get("#firstName").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("msr@test.com");
		cy.get("#phone").type("9999");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});
});
