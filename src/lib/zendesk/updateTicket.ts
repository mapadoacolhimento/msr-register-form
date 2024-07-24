import {
	ZENDESK_API_TOKEN,
	ZENDESK_API_USER,
	ZENDESK_SUBDOMAIN,
} from "../constants";
import getErrorMessage from "../getErrorMessage";

type UpdateTicket = {
	id: number;
	status?: string;
	comment?: {
		body: string;
		public: boolean;
	};
};

export default async function updateTicket(ticket: UpdateTicket) {
	try {
		const endpoint =
			ZENDESK_SUBDOMAIN + "/api/v2/tickets/" + ticket.id.toString() + ".json";

		const response = await fetch(endpoint, {
			body: JSON.stringify({
				ticket,
			}),
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Basic " +
					Buffer.from(`${ZENDESK_API_USER}:${ZENDESK_API_TOKEN}`).toString(
						"base64"
					),
			},
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return response;
	} catch (e) {
		const error = e as Record<string, unknown>;

		return new Response(getErrorMessage(error), {
			status: 500,
		});
	}
}
