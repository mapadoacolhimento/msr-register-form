import { NextRequest } from "next/server";
import { mockReset } from "vitest-mock-extended";
import mockedDb from "../../lib/__mocks__/db";
import { POST } from "../search/route";

describe("POST /search", () => {
	beforeEach(() => {
		mockReset(mockedDb);
	});

	it("returns false when msr and match exits", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce({
			msrId: 12345566 as unknown as bigint,
			email: "lua@email.com",
		});

		mockedDb.matches.findMany.mockResolvedValue({
			msrId: 12345566 as unknown as bigint,
			msrZendeskTicketId: 1234,
		});

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify({ email: "lua@email.com" }),
			})
		);
		const response = await POST(request);
		expect(response.status).toEqual(200);
		expect(await response.json()).toEqual({
			continue: false,
		});
	});

	it("returns true when msr does not exits", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(null);
		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify({ email: "lua@email.com" }),
			})
		);
		const response = await POST(request);
		expect(response.status).toEqual(200);
		expect(await response.json()).toEqual({
			continue: true,
		});
	});

	it("returns error when dont have a valid payload", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify({}),
			})
		);
		const response = await POST(request);
		expect(response.status).equal(400);
		expect(await response.text()).equal(
			"Validation error: email is a required field"
		);
	});
});
