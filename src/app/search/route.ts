import * as Yup from "yup";
import {
	db,
	getErrorMessage,
	statusMatchInProgress,
	statusSuppotRequestSocialWorker,
} from "../../lib";
import { MatchStatus } from "@prisma/client";

const payloadSchema = Yup.object({
	email: Yup.string().email().required(),
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

		if (!msr) {
			return Response.json({
				continue: true,
			});
		}
		const match = await db.matches.findMany({
			where: {
				msrId: msr.msrId,
				status: { in: statusMatchInProgress },
			},
			select: {
				matchId: true,
				status: true,
				msrZendeskTicketId: true,
			},
		});
		const suppotRequest = await db.supportRequests.findMany({
			where: {
				msrId: msr.msrId,
				status: { in: statusSuppotRequestSocialWorker },
			},
			select: {
				supportRequestId: true,
				status: true,
				zendeskTicketId: true,
			},
		});
		if (!match && !suppotRequest) {
			return Response.json({
				continue: true,
			});
		}

		return Response.json({
			continue: false,
		});
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
