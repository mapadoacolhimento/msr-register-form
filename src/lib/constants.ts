import { MatchStatus, SupportRequestsStatus } from "@prisma/client";

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

export const statusSuppotRequestInProgress = [
	SupportRequestsStatus.scheduled_social_worker,
	SupportRequestsStatus.social_worker,
	SupportRequestsStatus.matched,
	SupportRequestsStatus.waiting_for_match,
	SupportRequestsStatus.waiting_for_match_with_priority,
	SupportRequestsStatus.special_case,
];
export const ZENDESK_SUBDOMAIN = process.env["ZENDESK_SUBDOMAIN"];
export const ZENDESK_API_USER = `${process.env["ZENDESK_API_USER"]}/token`;
export const ZENDESK_API_TOKEN = process.env["ZENDESK_API_TOKEN"];
