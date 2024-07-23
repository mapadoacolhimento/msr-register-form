import * as Yup from "yup";
import {
	db,
	getErrorMessage,
	statusMatchInProgress,
	statusSuppotRequestSocialWorker,
	updateTicket,
} from "../../lib";

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
		// atualizar ticket match
		if (match) {
			for (let i = 0; i < match.length; i++) {
				await updateTicket({
					id: match[0].msrZendeskTicketId as unknown as number,
					status: "new",
					comment: {
						body: "MSR tentou pedir um acolhimento novamente.",
						public: false,
					},
				});
			}
		}

		// ataulizar ticket supportreuquest
		if (suppotRequest) {
			for (let i = 0; i < suppotRequest.length; i++) {
				await updateTicket({
					id: suppotRequest[i].zendeskTicketId as unknown as number,
					status: "new",
					comment: {
						body: "MSR tentou pedir um acolhimento novamente.",
						public: false,
					},
				});
			}
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
