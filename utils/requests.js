const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch all properties
async function fetchProperties() {
	try {
		// Handle the case that domain is not available yet

		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${apiDomain}/properties`);

		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();

		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

// Fetch single property
async function fetchProperty(id) {
	try {
		// Handle the case that domain is not available yet

		if (!apiDomain) {
			return null;
		}
		const res = await fetch(`${apiDomain}/properties/${id}`);

		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();

		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export { fetchProperties, fetchProperty };
