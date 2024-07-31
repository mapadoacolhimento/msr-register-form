it("should display error if name field is empty", () => {
	cy.visit("/");
	cy.goThroughHomePage();

	cy.get("#email").type("msr@test.com");
	cy.get("#confirmEmail").type("test@test.com");
	cy.get("#phone").type("81999999999");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).should("exist").click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if email field is empty", () => {
	cy.visit("/");
	cy.goThroughHomePage();

	cy.get("#firstName").type("MSR teste");
	cy.get("#confirmEmail").type("test@test.com");
	cy.get("#phone").type("81999999999");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if confirmEmail field is empty", () => {
	cy.visit("/");
	cy.goThroughHomePage();

	cy.get("#firstName").type("MSR teste");
	cy.get("#email").type("test@test.com");
	cy.get("#phone").type("81999999999");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if whatsapp field is empty", () => {
	cy.visit("/");
	cy.goThroughHomePage();

	cy.get("#firstName").type("MSR teste");
	cy.get("#email").type("test@test.com");
	cy.get("#confirmEmail").type("test@test.com");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if confirm email does not match email", () => {
	cy.visit("/");
	cy.goThroughHomePage();

	cy.get("#firstName").type("MSR teste");
	cy.get("#email").type("msr@test.com");
	cy.get("#confirmEmail").type("test@test");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Os e-mails precisam ser iguais.").should("exist");
});

it("should display error if invalid whatsapp format is entered", () => {
	cy.visit("/");
	cy.goThroughHomePage();

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
	cy.goThroughHomePage();

	cy.get("#firstName").type("MSR teste");
	cy.get("#email").type("msr@test.com");
	cy.get("#confirmEmail").type("msr@test.com");
	cy.get("#phone").type("9999");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if color field is empty", () => {
	const hasDisability = "Não";
	cy.visit("/");
	cy.goThroughHomePage();

	cy.fillBasicRegisterInformationStep();
	cy.findByRole("button", { name: "Continuar" }).click();

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if disability status field is empty", () => {
	const color = "Preta";
	cy.visit("/");
	cy.goThroughHomePage();

	cy.fillBasicRegisterInformationStep();

	cy.findByRole("button", { name: "Continuar" }).click();

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});
