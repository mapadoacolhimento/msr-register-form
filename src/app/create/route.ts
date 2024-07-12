import * as Yup from "yup";
import { db, getErrorMessage } from "../../lib";
import { Gender, MSRStatus, Race } from "@prisma/client";

const payloadSchema = Yup.object({
	msrZendeskUserId: Yup.number().required(),
	email: Yup.string().email().required(),
	phone: Yup.string().min(10).max(12).required(),
	firstName: Yup.string().required(),
	city: Yup.string().required(),
	state: Yup.string().length(2).required(),
	neighborhood: Yup.string().required(),
	color: Yup.string().oneOf(Object.values(Race)).required(),
	zipcode: Yup.string().min(8).max(9).required(),
	status: Yup.string().oneOf(Object.values(MSRStatus)).required(),
	dateOfBirth: Yup.date().required().nullable(),
	gender: Yup.string().oneOf(Object.values(Gender)).required(),
	hasDisability: Yup.boolean().required().nullable(),
	acceptsOnlineSupport: Yup.boolean().required(),
}).required();

export async function POST(request: Request) {
	try {
		const payload = await request.json();

		await payloadSchema.validate(payload);

		const msr = await db.mSRs.create({
			data: {
				msrId: payload.zendesUserId,
				gender: payload.gender,
				raceColor: payload.color,
				hasDisability: payload.hasDisability ? payload.hasDisability : null,
				acceptsOnlineSupport: payload.acceptsOnlineSupport
					? payload.acceptsOnlineSupport
					: true,
				neighborhood: payload.neighborhood,
				city: payload.city,
				state: payload.state,
				zipcode: payload.zipcode,
				status: payload.status,
			},
		});
		await db.mSRPiiSec.create({
			data: {
				msrId: payload.zendesUserId,
				firstName: payload.firstName,
				email: payload.email,
				phone: payload.phone,
				dateOfBirth: payload.dateOfBirth
					? new Date(payload.dateOfBirth).toISOString()
					: null,
			},
		});
		return Response.json({
			msrId: msr.msrId.toString(),
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
			return new Response(error.message, {
				status: 400,
			});
		}
		return new Response(getErrorMessage(error), {
			status: 500,
		});
	}
}
