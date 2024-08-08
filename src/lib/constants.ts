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

export const statusOnGoingMatch = [
	MatchStatus.waiting_contact,
	MatchStatus.in_contact,
];

export const statusSupportRequestOngoingSocialWorker = [
	SupportRequestsStatus.scheduled_social_worker,
	SupportRequestsStatus.social_worker,
];
export const statusSupportRequestisAlreadyInQueue = [
	SupportRequestsStatus.waiting_for_match,
	SupportRequestsStatus.waiting_for_match_with_priority,
];

export const ZENDESK_SUBDOMAIN = process.env["ZENDESK_SUBDOMAIN"];
export const ZENDESK_API_USER = `${process.env["ZENDESK_API_USER"]}/token`;
export const ZENDESK_API_TOKEN = process.env["ZENDESK_API_TOKEN"];

export const ZENDESK_CUSTOM_FIELDS_DICIO = {
	nome_msr: 360016681971,
	link_match: 360016631632,
	status_acolhimento: 360014379412,
	data_encaminhamento: 360017432652,
	nome_voluntaria: 360016631592,
	estado: 360021879791,
	telefone: 360021812712,
	cidade: 360021879811,
};
