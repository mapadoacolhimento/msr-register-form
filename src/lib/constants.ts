import { MatchStatus, SupportRequestsStatus } from "@prisma/client";
import msrPayload from "./__mocks__/payloads";

export const colorOptions = [
	{ value: "black", label: "Preta" },
	{ value: "mixed", label: "Parda" },
	{ value: "indigenous", label: "Indígena" },
	{ value: "asian", label: "Amarela" },
	{ value: "white", label: "Branca" },
];

export const disabilityOptions = [
	{ value: "yes", name: "Sim" },
	{ value: "no", name: "Não" },
];

export const acceptsOnlineSupportOptions = [
	{ value: "yes", name: "Sim, aceito ser atendida online" },
	{
		value: "no",
		name: "Não, só posso receber atendimento presencial",
	},
];

export const supportTypeOptions = [
	{
		name: "Acolhimento psicológico",
		value: "psychological",
	},
	{
		name: "Acolhimento jurídico",
		value: "legal",
	},
];

export const genderIdentityOptions = [
	{ value: "ciswoman", name: "Eu sou uma mulher cis" },
	{
		value: "transwoman",
		name: "Eu sou uma mulher trans/travesti",
	},
	{
		value: "no-woman",
		name: "Não me identifico como mulher",
	},
];

export const genderViolenceOptions = [
	{ value: "yes", name: "Sim" },
	{
		value: "no",
		name: "Não",
	},
];

export const violenceLocationOptions = [
	{ value: "yes", name: "Sim" },
	{
		value: "no",
		name: "Não",
	},
];

export const externalSupportOptions = [
	{ value: "yes", name: "Sim" },
	{
		value: "no",
		name: "Não",
	},
];

export const financialNeedOptions = [
	{ value: "yes", name: "Sim" },
	{
		value: "no",
		name: "Não",
	},
];

export const statusMatchInProgress = [
	MatchStatus.waiting_contact,
	MatchStatus.started_contact,
	MatchStatus.in_contact,
];

export const statusSuppotRequestSocialWorker = [
	SupportRequestsStatus.scheduled_social_worker,
	SupportRequestsStatus.social_worker,
];
