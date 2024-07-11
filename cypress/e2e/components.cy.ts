it("should display error if color field is empty", () => {
	cy.visit("/");

	cy.fillFirstStep();

	cy.findByRole("button", { name: "Continuar" }).click();

	cy.get("#disabilityStatus").select("Não");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});

it("should display error if disability status field is empty", () => {
	cy.visit("/");

	cy.fillFirstStep();

	cy.findByRole("button", { name: "Continuar" }).click();

	cy.get("#color").select("Preta");

	cy.findByRole("button", { name: "Continuar" }).click();
	cy.contains("Esse campo é obrigatório.").should("exist");
});
