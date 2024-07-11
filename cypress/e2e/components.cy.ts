it("should display error if color field is empty", () => {
	cy.visit("/");

	cy.get("#name").type("MSR teste");
	cy.get("#email").type("msr@test.com");
	cy.get("#confirmEmail").type("msr@test.com");
	cy.get("#phone").type("81999999999");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();

	cy.get("#disabilityStatus").select("Não");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if disability status field is empty", () => {
	cy.visit("/");

	cy.get("#name").type("MSR teste");
	cy.get("#email").type("msr@test.com");
	cy.get("#confirmEmail").type("msr@test.com");
	cy.get("#phone").type("81999999999");
	cy.get("#dateOfBirth").type("11111111");

	cy.findByRole("button", { name: "Continuar" }).click();

	cy.get("#color").select("Preta");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});
