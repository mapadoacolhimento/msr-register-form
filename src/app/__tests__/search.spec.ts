import { NextRequest } from "next/server";
import { mockReset } from "vitest-mock-extended";
import mockedDb from "../../lib/__mocks__/db";
import { POST } from "../search/route";
import * as updateManyTickets from "../../lib/zendesk/updateManyTickets";
import { expect } from "vitest";

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

	const mockMsrPiiSec = {
		msrId: 12345566 as unknown as bigint,
		email: "lua@email.com",
	};

	const mockSupportRequest = [
		{
			supportRequestId: 222,
			status: "scheduled_social_worker",
			zendeskTicketId: 1234,
		},

		{
			supportRequestId: 223,
			status: "matched",
			zendeskTicketId: 5678,
		},
	];
	const body = {
		ticket: {
			status: "open",
			comment: {
				body: "MSR tentou realizar pedido de acolhimento novamente.",
				public: false,
			},
		},
	};

	const mockUpdateTicket = vi.spyOn(updateManyTickets, "default");

	it("returns false when msr and support request exits", async () => {
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
		expect(mockUpdateTicket).toHaveBeenCalled();
		expect(response.status).toEqual(200);
		expect(await response.json()).toEqual({
			continue: false,
		});
		expect(mockUpdateTicket).toHaveBeenCalledWith("1234", body);
	});

	it("returns false when msr, two support request exits", async () => {
		mockedDb.mSRPiiSec.findUnique.mockResolvedValueOnce(mockMsrPiiSec);

		mockedDb.supportRequests.findMany.mockResolvedValue(mockSupportRequest);

		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr2),
			})
		);
		const response = await POST(request);
		expect(mockUpdateTicket).toHaveBeenCalled();
		expect(response.status).toEqual(200);
		expect(await response.json()).toEqual({
			continue: false,
		});
		expect(mockUpdateTicket).toHaveBeenCalledWith("1234,5678", body);
	});

	it("returns true when msr does not exits", async () => {
		const request = new NextRequest(
			new Request("http://localhost:3000/search", {
				method: "POST",
				body: JSON.stringify(msr),
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
			"Validation error: supportTypes is a required field"
		);
	});
});
