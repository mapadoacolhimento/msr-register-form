import type { MSRs, MSRPiiSec } from "@prisma/client";

export type Msr = Pick<
	MSRs,
	| "msrId"
	| "neighborhood"
	| "city"
	| "state"
	| "status"
	| "gender"
	| "raceColor"
	| "hasDisability"
	| "acceptsOnlineSupport"
>;

export type MsrPiiSec = Pick<
	MSRPiiSec,
	"msrId" | "email" | "firstName" | "phone"
>;
