import getErrorMessage from "../getErrorMessage";

const ZENDESK_SUBDOMAIN = process.env["ZENDESK_SUBDOMAIN"];
const ZENDESK_API_USER = `${process.env["ZENDESK_API_USER"]}/token`;
const ZENDESK_API_TOKEN = process.env["ZENDESK_API_TOKEN"];

type UpdateTicket = {
	id: number;
	status: string;
	comment: {
		body: string;
		public: boolean;
	};
};

export default async function updateTicket(ticket: UpdateTicket) {
	try {
		const endpoint =
			ZENDESK_SUBDOMAIN + "/api/v2/tickets/" + ticket.id.toString() + ".json";
		const id = ticket.id;
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

		const data = await response.json();

		return data.ticket;
	} catch (e) {
		const error = e as Record<string, unknown>;

		return new Response(getErrorMessage(error), {
			status: 500,
		});
	}
}
