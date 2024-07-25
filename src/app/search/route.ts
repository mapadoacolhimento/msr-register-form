import * as Yup from "yup";
import {
	db,
	getErrorMessage,
	statusSuppotRequestInProgress,
	updateManyTickets,
} from "../../lib";

const payloadSchema = Yup.object({
	email: Yup.string().email().required(),
	supportTypes: Yup.array().required(),
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

		let ids: bigint[] = [];

		const supportRequest = await db.supportRequests.findMany({
			where: {
				msrId: msr.msrId,
				status: { in: statusSuppotRequestInProgress },
				supportType: { in: payload.supportTypes },
			},
			select: {
				supportRequestId: true,
				status: true,
				zendeskTicketId: true,
			},
		});
		console.log(supportRequest);
		if (supportRequest.length == 0) {
			return Response.json({
				continue: true,
			});
		}

		supportRequest.map((element) => {
			ids.push(element.zendeskTicketId);
		});

		const bodyUpdate = {
			ticket: {
				status: "open",
				comment: {
					body: "MSR tentou realizar pedido de acolhimento novamente.",
					public: false,
				},
			},
		};

		const response = await updateManyTickets(ids.join().toString(), bodyUpdate);
		console.log(await response.text(), response.status);

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
