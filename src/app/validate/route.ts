import { db, getErrorMessage } from "../../lib";
import * as Yup from "yup";

export const runtime = "edge";

const payloadSchema = Yup.object({
	email: Yup.string().email().required(),
	phone: Yup.string().required(),
});

export async function POST(request: Request) {
	try {
		const payload = await request.json();

		await payloadSchema.validate(payload);

		const msrExistsOnDb = await db.mSRPiiSec.findUnique({
			where: {
				email: payload.email,
				phone: payload.phone,
			},
		});

		return Response.json({ isSupportRequestValid: !!msrExistsOnDb });
	} catch (e) {
		const error = e as Record<string, unknown>;

		if (error["name"] === "ValidationError") {
			const errorMsg = `Validation error: ${getErrorMessage(error)}`;

			console.error(`[compose] - [400]: ${errorMsg}`);

			return new Response(errorMsg, {
				status: 500,
			});
		}

		const errorMsg = getErrorMessage(error);

		return new Response(errorMsg, {
			status: 500,
		});
	}
}
