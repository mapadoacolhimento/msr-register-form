import { expect } from "vitest";
import { NextRequest } from "next/server";
import { mockReset } from "vitest-mock-extended";
import { Gender, MSRStatus, Prisma, Race } from "@prisma/client";
import { mockedDb } from "../__mocks__/db";
import { POST } from "../create/route";

const mockPayload = {
	zendesk_user_id: 12345 as unknown as bigint,
	email: "msr@email.br",
	phone: "71999999999",
	first_name: "Msr",
	last_name: "Teste",
	city: "SALVADOR",
	state: "BA",
	neighborhood: "Bairro",
	date_of_birth: null,
	color: "black",
	status: "registered",
	has_disability: false,
	accepts_online_support: false,
};

const mockIncompletePayload = {
	email: "msr@email.br",
	phone: "71999999999",
	first_name: "Msr",
	last_name: "Teste",
	city: "SALVADOR",
	state: "BA",
	neighborhood: "Bairro",
	date_of_birth: null,
	color: "black",
	status: "registered",
	has_disability: false,
	accepts_online_support: false,
};

const mockMsr = {
	msrId: mockPayload.zendesk_user_id,
	phone: mockPayload.phone,
	firstName: mockPayload.first_name,
	lastName: mockPayload.last_name,
	city: mockPayload.city,
	state: mockPayload.state,
	neighborhood: mockPayload.neighborhood,
	zipcode: "",
	dateOfBirth: null,
	raceColor: mockPayload.color as Race,
	gender: "not_found" as Gender,
	status: mockPayload.status as MSRStatus,
	hasDisability: false,
	acceptsOnlineSupport: false,
	createdAt: new Date(),
	updatedAt: new Date(),
};

const mockMsrPii = {
	msrId: mockPayload.zendesk_user_id,
	firstName: mockPayload.first_name,
	lastName: mockPayload.last_name,
	email: mockPayload.email,
	phone: mockPayload.phone,
	dateOfBirth: mockPayload.date_of_birth,
	createdAt: new Date(),
	updatedAt: new Date(),
};

describe("POST /create", () => {
	beforeEach(() => {
		mockReset(mockedDb);
	});

	it("shoul create new msr on db", async () => {
		mockedDb.mSRs.create.mockResolvedValueOnce(mockMsr);
		mockedDb.mSRPiiSec.create.mockResolvedValueOnce(mockMsrPii);
		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
				body: JSON.stringify(mockPayload),
			})
		);
		const response = await POST(request);
		expect(mockedDb.mSRs.create).toHaveBeenCalledTimes(1);
		expect(mockedDb.mSRPiiSec.create).toHaveBeenCalledTimes(1);
		expect(await response.json()).toStrictEqual({
			id: mockPayload.zendesk_user_id,
			email: mockPayload.email,
		});
	});
	it("returns error when dont have a payload", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
			})
		);
		const response = await POST(request);
		expect(await response.text()).toEqual("Empty body!");
	});
	it("returns error when msr already exists", async () => {
		mockedDb.mSRs.create.mockRejectedValueOnce(
			new Prisma.PrismaClientKnownRequestError(
				"Unique constraint failed on the fields: (`msrId`)",
				{ code: "P2002", clientVersion: "some-version" }
			)
		);

		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
				body: JSON.stringify(mockPayload),
			})
		);
		const response = await POST(request);
		expect(mockedDb.mSRs.create).toHaveBeenCalledTimes(1);
		expect(await response.text()).toEqual("Erro: MSR Already exisits!");
	});

	it("returns error when dont have a valid payload", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
				body: JSON.stringify(mockIncompletePayload),
			})
		);
		const response = await POST(request);
		expect(await response.text()).toEqual(
			"Validation error: zendesk_user_id is a required field"
		);
	});
});
