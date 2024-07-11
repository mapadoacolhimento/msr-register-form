/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject = any> {
		fillFirstStep(
			firstName?: string,
			email?: string,
			confirmEmail?: string,
			phone?: string,
			dateOfBirth?: string
		): Chainable<any>;
		fillSecondStep(color?: string, hasDisability?: string): Chainable<any>;
		fillThirdStep(): Chainable<any>;
		fillFourthStep(): Chainable<any>;
	}
}
