import * as Yup from "yup";
import { db, getErrorMessage } from "../../lib";
import { Msr, MsrPiiSec } from "../../types";

const payloadSchema = Yup.object({
	zendesk_user_id: Yup.number().required(),
	email: Yup.string().email().required(),
	phone: Yup.string().required(),
	first_name: Yup.string().required(),
	last_name: Yup.string(),
	city: Yup.string().required(),
	state: Yup.string().required(),
	neighborhood: Yup.string().required(),
	zipcode: Yup.string().required().nullable(),
	date_of_birth: Yup.date().required().nullable(),
	color: Yup.string().required(),
	gender: Yup.string(),
	status: Yup.string().required(),
	had_disability: Yup.boolean(),
	accepts_online_support: Yup.boolean(),
});

export async function POST(request: Request) {
	try {
		if (!request.body) {
			throw new Error("Empty body!");
		}
		const payload = await request.json();

		await payloadSchema.validate(payload);

		const msr: Msr = await db.mSRs.create({
			data: {
				msrId: payload.zendesk_user_id,
				gender: payload.gender,
				raceColor: payload.color,
				hasDisability: payload.has_disability,
				acceptsOnlineSupport: payload.accepts_online_support,
				neighborhood: payload.neighborhood,
				city: payload.city,
				state: payload.atate,
				zipcode: payload.zipcode,
				status: payload.status,
			},
		});
		const msrPii: MsrPiiSec = await db.mSRPiiSec.create({
			data: {
				msrId: payload.zendesk_user_id,
				firstName: payload.first_name,
				lastName: payload.last_name,
				email: payload.email,
				phone: payload.phone,
				dateOfBirth: payload.date_of_birth,
			},
		});
		return Response.json({
			id: msr.msrId,
			email: msrPii.email,
		});
	} catch (e) {
		const error = e as Record<string, unknown>;
		if (error["name"] === "ValidationError") {
			const errorMsg = `Validation error: ${getErrorMessage(error)}`;

			return new Response(errorMsg, {
				status: 400,
			});
		}
		if (
			error instanceof Error &&
			"code" in error &&
			(error as any).code === "P2002"
		) {
			return new Response("Erro: MSR Already exisits!", {
				status: 400,
			});
		}
		return new Response(getErrorMessage(error), {
			status: 500,
		});
	}
}
