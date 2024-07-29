import { NextRequest } from "next/server";
import { mockReset } from "vitest-mock-extended";
import mockedDb from "../../lib/__mocks__/db";
import { POST } from "../search/route";

describe("POST /search", () => {
	beforeEach(() => {
		mockReset(mockedDb);
	});

	const msr = {
		email: "lua@email.com",
		supportTypes: ["psychological"],
	};

	const msr2 = {
		email: "sol@email.com",
		supportTypes: ["psychological", "legal"],
	};

	const msr3 = {
		email: "venus@email.com",
		supportTypes: ["legal"],
	};

	const mockMsrPiiSec = {
		msrId: 12345566 as unknown as bigint,
		email: "lua@email.com",
	};

	const mockSupportRequest = [
		{
			supportRequestId: 222,
			status: "social_worker",
			supportType: "psychological",
		},

		{
			supportRequestId: 223,
			status: "matched",
			supportType: "legal",
		},
	];

	const mockMatch = {
		supportRequestId: 224,
		status: "waiting_contact",
		supportType: "legal",
	};

	it("should return `psychological: {shouldCreateMatch: false, supportRequestId: 222,}` when msr and support request exists", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(mockMsrPiiSec);

		mockedDb.matches.findMany.mockResolvedValue([]);

		mockedDb.supportRequests.findMany.mockResolvedValue([
			mockSupportRequest[0],
		]);

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr),
			})
		);
		const response = await POST(request);
		expect(response.status).toStrictEqual(200);
		expect(await response.json()).toStrictEqual({
			psychological: {
				supportRequestId: 222,
				shouldCreateMatch: false,
			},
		});
	});

	it("should return `legal: {shouldCreateMatch: false, supportRequestId: 224,}` when msr exists and has one match", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(mockMsrPiiSec);

		mockedDb.matches.findMany.mockResolvedValue([mockMatch]);

		mockedDb.supportRequests.findMany.mockResolvedValue(mockSupportRequest);

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr2),
			})
		);
		const response = await POST(request);
		//	expect(response.status).toStrictEqual(200);
		expect(await response.json()).toStrictEqual({
			psychological: {
				supportRequestId: 222,
				shouldCreateMatch: false,
			},
			legal: {
				supportRequestId: 223,
				shouldCreateMatch: true,
			},
		});
	});

	it("should return `legal: {shouldCreateMatch: false, supportRequestId: 224,}` when msr exists and has one match", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(mockMsrPiiSec);

		mockedDb.matches.findMany.mockResolvedValue([mockMatch]);

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr3),
			})
		);
		const response = await POST(request);
		expect(response.status).toStrictEqual(200);
		expect(await response.json()).toStrictEqual({
			legal: {
				supportRequestId: 224,
				shouldCreateMatch: false,
			},
		});
	});

	it("should return `psychological: {supportRequestId: null,  shouldCreateMatch: true}` when msr does not exist", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr),
			})
		);
		const response = await POST(request);
		expect(response.status).toStrictEqual(200);
		expect(await response.json()).toStrictEqual({
			psychological: {
				supportRequestId: null,
				shouldCreateMatch: true,
			},
		});
	});

	it("should return `psychological: {supportRequestId: null,  shouldCreateMatch: true}` when msr exists but she has no matches and no supprt_requests", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(mockMsrPiiSec);

		mockedDb.matches.findMany.mockResolvedValue([]);
		mockedDb.supportRequests.findMany.mockResolvedValue([]);

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr),
			})
		);
		const response = await POST(request);
		expect(response.status).toStrictEqual(200);
		expect(await response.json()).toStrictEqual({
			psychological: {
				supportRequestId: null,
				shouldCreateMatch: true,
			},
		});
	});

	it("should return an error when theres not a valid payload", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify({}),
			})
		);
		const response = await POST(request);
		expect(response.status).toStrictEqual(400);
		expect(await response.text()).toStrictEqual(
			"Validation error: supportTypes is a required field"
		);
	});
});
