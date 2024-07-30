import * as Yup from "yup";
import {
	db,
	getErrorMessage,
	statusOnGoingMatch,
	statusOnGoingSuppotRequest,
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

		payload.supportTypes.forEach((type: SupportType) => {
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

			matches.forEach((match) => {
				msrSearchResponse[match.supportType] = {
					supportRequestId: match.supportRequestId,
					shouldCreateMatch: false,
				};
			});

			if (matches.length < payload.supportTypes.length) {
				let where;
				if (matches.length === 0) {
					where = {
						msrId: msr.msrId,
						supportType: { in: payload.supportTypes },
					};
				} else {
					let supportRequestIds = matches.map(
						(match) => match.supportRequestId
					);
					where = {
						msrId: msr.msrId,
						supportType: { in: payload.supportTypes },
						supportRequestId: { notIn: supportRequestIds },
					};
				}
				const supportRequests = await db.supportRequests.findMany({
					where,
					select: {
						supportRequestId: true,
						status: true,
						supportType: true,
					},
				});

				supportRequests.forEach((supportRequest) => {
					msrSearchResponse[supportRequest.supportType] = {
						supportRequestId: supportRequest.supportRequestId,
						shouldCreateMatch: !statusOnGoingSuppotRequest.includes(
							supportRequest.status
						),
					};
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
