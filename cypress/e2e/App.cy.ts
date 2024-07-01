describe("App", () => {
	it("should render heading", () => {
		cy.visit("/");
		cy.findByRole("button", { name: /continuar/i }).should("exist");
	});
});
