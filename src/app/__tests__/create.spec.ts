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
	city: "SALVADOR",
	state: "BA",
	neighborhood: "Bairro",
	color: "black",
	status: "registered",
};

const mockPayload2 = {
	zendesk_user_id: 67890 as unknown as bigint,
	email: "msr2@email.br",
	phone: "71888888888",
	first_name: "Msr 2",
	last_name: "Teste",
	city: "CAMPINAS",
	state: "SP",
	neighborhood: "Bairro",
	zipcode: "00000000",
	color: "white",
	gender: "cis_woman",
	status: "registered",
	date_of_birth: "1990-03-14",
	has_disability: false,
	accepts_online_support: true,
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
	city: mockPayload.city,
	state: mockPayload.state,
	neighborhood: mockPayload.neighborhood,
	zipcode: "",
	dateOfBirth: null,
	raceColor: mockPayload.color as Race,
	gender: "not_found" as Gender,
	status: mockPayload.status as MSRStatus,
	hasDisability: false,
	acceptsOnlineSupport: true,
	createdAt: new Date(),
	updatedAt: new Date(),
};

const mockMsrPii = {
	msrId: mockPayload.zendesk_user_id,
	firstName: mockPayload.first_name,
	lastName: "not_found",
	email: mockPayload.email,
	phone: mockPayload.phone,
	dateOfBirth: null,
	createdAt: new Date(),
	updatedAt: new Date(),
};

const mockMsr2 = {
	msrId: mockPayload2.zendesk_user_id,
	phone: mockPayload2.phone,
	firstName: mockPayload2.first_name,
	lastName: mockPayload2.last_name,
	city: mockPayload2.city,
	state: mockPayload2.state,
	neighborhood: mockPayload2.neighborhood,
	zipcode: mockPayload2.zipcode,
	raceColor: mockPayload2.color as Race,
	gender: mockPayload2.gender as Gender,
	status: mockPayload2.status as MSRStatus,
	hasDisability: mockPayload2.has_disability,
	acceptsOnlineSupport: mockPayload2.accepts_online_support,
	createdAt: new Date(),
	updatedAt: new Date(),
};

const mockMsrPii2 = {
	msrId: mockPayload2.zendesk_user_id,
	firstName: mockPayload2.first_name,
	lastName: "",
	email: mockPayload2.email,
	phone: mockPayload2.phone,
	dateOfBirth: new Date(mockPayload2.date_of_birth),
	createdAt: new Date(),
	updatedAt: new Date(),
};

describe("POST /create", () => {
	beforeEach(() => {
		mockReset(mockedDb);
	});

	it("shoul create new msr with basics fields on db", async () => {
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
			msr_id: mockPayload.zendesk_user_id.toString(),
			email: mockPayload.email,
		});
	});

	it("shoul create new msr with all fields on db", async () => {
		mockedDb.mSRs.create.mockResolvedValueOnce(mockMsr2);
		mockedDb.mSRPiiSec.create.mockResolvedValueOnce(mockMsrPii2);
		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
				body: JSON.stringify(mockPayload2),
			})
		);
		const response = await POST(request);
		expect(mockedDb.mSRs.create).toHaveBeenCalledTimes(1);
		expect(mockedDb.mSRPiiSec.create).toHaveBeenCalledTimes(1);
		expect(await response.json()).toStrictEqual({
			msr_id: mockPayload2.zendesk_user_id.toString(),
			email: mockPayload2.email,
		});
	});

	it("returns error when dont have a payload", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/create", {
				method: "POST",
			})
		);
		const response = await POST(request);
		expect(await response.text()).toEqual("Error: Empty body!");
	});
	it("returns error when msr already exists", async () => {
		mockedDb.mSRs.create.mockRejectedValueOnce(
			new Prisma.PrismaClientKnownRequestError(
				"Unique constraint failed on the fields: (`msr_id`)",
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
		expect(await response.text()).toEqual(
			"Unique constraint failed on the fields: (`msr_id`)"
		);
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
