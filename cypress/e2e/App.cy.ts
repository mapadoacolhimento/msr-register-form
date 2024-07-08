describe("App", () => {
	it("should render all fields", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("msr@test.com");
		cy.get("#phone").type("81999999999");

		cy.findByRole("button", { name: "Continuar" }).should("exist");
	});

	it("should display error if name field is empty", () => {
		cy.visit("/");

		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("test@test.com");
		cy.get("#phone").type("81999999999");

		cy.findByRole("button", { name: "Continuar" }).should("exist").click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if email field is empty", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#confirmEmail").type("test@test.com");
		cy.get("#phone").type("81999999999");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if confirmEmail field is empty", () => {
		cy.visit("/");
		cy.get("#name").type("MSR teste");
		cy.get("#email").type("test@test.com");
		cy.get("#phone").type("81999999999");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if whatsapp field is empty", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#email").type("test@test.com");
		cy.get("#confirmEmail").type("test@test.com");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Esse campo é obrigatório.").should("exist");
	});

	it("should display error if confirm email does not match email", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("test@test");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Os e-mails precisam ser iguais.").should("exist");
	});

	it("should display error if invalid whatsapp format is entered", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("msr@test.com");
		cy.get("#phone").type("9999");

		cy.findByRole("button", { name: "Continuar" }).click();
		cy.contains("Insira um número de telefone válido com DDD.").should("exist");
	});

	it.only("should continue to the next step if all fields are filled correctly", () => {
		cy.visit("/");

		cy.get("#name").type("MSR teste");
		cy.get("#email").type("msr@test.com");
		cy.get("#confirmEmail").type("msr@test.com");
		cy.get("#phone").type("81999999999");

		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByRole("radio", {
			name: "Sim, aceito ser atendida online",
		}).should("exist");
		cy.findByRole("radio", {
			name: "Não, só posso receber atendimento presencial",
		}).should("exist");

		cy.findByRole("radio", {
			name: "Sim, aceito ser atendida online",
		}).click();

		cy.findByRole("button", { name: "Continuar" }).click();

		cy.findByRole("checkbox", {
			name: "Acolhimento psicológico",
		}).click({ force: true });
		cy.findByRole("checkbox", {
			name: "Acolhimento jurídico",
		}).click({ force: true });
	});
});
