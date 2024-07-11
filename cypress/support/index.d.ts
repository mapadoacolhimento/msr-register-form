/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject = any> {
		fillFirstStep(
			name?: string,
			email?: string,
			confirmEmail?: string,
			phone?: string,
			dateOfBirth?: string
		): Chainable<any>;
		fillSecondStep(color?: string, disabilityStatus?: string): Chainable<any>;
		fillThirdStep(): Chainable<any>;
		fillFourthStep(): Chainable<any>;
	}
}
