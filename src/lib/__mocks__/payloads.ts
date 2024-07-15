type msrPayloadParams = {
	msrZendeskUserId?: bigint;
	email?: string;
	phone?: string;
	firstName?: string;
	city?: string;
	state?: string;
	neighborhood?: string;
	zipcode?: string;
	color?: string;
	gender?: string;
	status?: string;
	dateOfBirth?: string;
	hasDisability?: boolean;
	acceptsOnlineSupport?: boolean;
};

function msrPayload(msr?: msrPayloadParams) {
	const payload = {
		msrZendeskUserId: msr?.msrZendeskUserId
			? msr.msrZendeskUserId
			: (12346789 as unknown as bigint),
		email: msr?.email ? msr.email : "msr@email.br",
		phone: msr?.phone ? msr.phone : "71999999999",
		firstName: msr?.firstName ? msr.firstName : "Msr",
		city: msr?.city ? msr.city : "SALVADOR",
		state: msr?.state ? msr.state : "BA",
		neighborhood: msr?.neighborhood ? msr.neighborhood : "Bairro",
		zipcode: msr?.zipcode ? msr.zipcode : "not_found",
		color: msr?.color ? msr.color : "black",
		status: msr?.status ? msr.status : "registered",
		dateOfBirth: msr?.dateOfBirth ? msr.dateOfBirth : null,
		gender: msr?.gender ? msr.gender : "not_found",
		hasDisability: msr?.hasDisability ? msr.hasDisability : null,
		acceptsOnlineSupport: msr?.acceptsOnlineSupport
			? msr.acceptsOnlineSupport
			: true,
	};

	return payload;
}

export default msrPayload;
