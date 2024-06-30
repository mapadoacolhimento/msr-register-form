describe("App", () => {
	it("should render heading", () => {
		cy.visit("/");
		cy.findByRole("heading", { name: /vite/i }).should("exist");
	});
});
