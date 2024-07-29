import * as Yup from "yup";
import {
	db,
	getErrorMessage,
	statusOnGoingMatch,
	statusSuppotRequestOnGoing,
} from "../../lib";
import { SupportType } from "@prisma/client";

type MsrSearchResponse = {
	psychological?: {
		supportRequestId: number | null;
		shouldCreateMatch: boolean;
	};
	legal?: {
		supportRequestId: number | null;
		shouldCreateMatch: boolean;
	};
};

const payloadSchema = Yup.object({
	email: Yup.string().email().required(),
	supportTypes: Yup.array()
		.of(Yup.string().oneOf(Object.values(SupportType)).required())
		.required(),
}).required();

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		await payloadSchema.validate(payload);

		const msr = await db.mSRPiiSec.findUnique({
			where: {
				email: payload.email,
			},
			select: {
				msrId: true,
				email: true,
			},
		});

		let msrSearchResponse: MsrSearchResponse = {};

		payload.supportTypes.map((type: SupportType) => {
			msrSearchResponse[type] = {
				supportRequestId: null,
				shouldCreateMatch: true,
			};
		});

		if (msr) {
			const matches = await db.matches.findMany({
				where: {
					msrId: msr.msrId,
					status: { in: statusOnGoingMatch },
					supportType: { in: payload.supportTypes },
				},
				select: {
					supportRequestId: true,
					status: true,
					supportType: true,
				},
			});

			matches.map((match) => {
				msrSearchResponse[match.supportType] = {
					supportRequestId: match.supportRequestId,
					shouldCreateMatch: false,
				};
			});

			if (matches.length < payload.supportTypes.length) {
				const supportRequests = await db.supportRequests.findMany({
					where: {
						msrId: msr.msrId,
						supportType: { in: payload.supportTypes },
					},
					select: {
						supportRequestId: true,
						status: true,
						supportType: true,
						zendeskTicketId: true,
					},
				});

				supportRequests.map((supportRequest) => {
					if (
						!matches.find(
							(match) =>
								match.supportRequestId === supportRequest.supportRequestId
						)
					) {
						let shouldCreateMatch = true;
						statusSuppotRequestOnGoing.map((status) => {
							if (supportRequest.status === status) shouldCreateMatch = false;
						});
						msrSearchResponse[supportRequest.supportType] = {
							supportRequestId: supportRequest.supportRequestId,
							shouldCreateMatch: shouldCreateMatch,
						};
					}
				});
			}
		}

		return Response.json(msrSearchResponse);
	} catch (e) {
		const error = e as Record<string, unknown>;
		if (error["name"] === "ValidationError") {
			const errorMsg = `Validation error: ${getErrorMessage(error)}`;

			return new Response(errorMsg, {
				status: 400,
			});
		}

		return new Response(getErrorMessage(error), {
			status: 500,
		});
	}
}
