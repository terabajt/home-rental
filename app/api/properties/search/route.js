import connectDB from '@/config/database';
import Property from '@/models/Property';
import { PrefixPathnameNormalizer } from 'next/dist/server/future/normalizers/request/prefix';

// GET /api/properties

export const GET = async request => {
	try {
		await connectDB;

		const { searchParams } = new URL(request.url);
		const location = searchParams.get('location');
		const propertyType = searchParams.get('propertyType');

		const locationPattern = new RegExp(location, 'i');

		// March location pattern against database fields
		let query = {
			$or: [
				{ name: locationPattern },
				{ description: locationPattern },
				{ 'location.street': locationPattern },
				{ 'location.state': locationPattern },
				{ 'location.city': locationPattern },
				{ 'location.zipcode': locationPattern },
			],
		};
		// Only check for property if it's not 'All
		if (propertyType && propertyType !== 'All') {
			const typePattern = new RegExp(propertyType, 'i');
			query.type = typePattern;
		}

		const properties = await Property.find(query);
		return new Response(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ message: 'Something get wrong' }), { status: 500 });
	}
};
