import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async request => {
	try {
		await connectDB();

		const properties = await Property.find({});
		return new Response(JSON.stringify(properties), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response('Something went wrong: ', { status: 500 });
	}
};

export const POST = async request => {
	try {
		const formData = await request.formData();

		// Access all values from amenities and images
		const amenities = formData.getAll('amenities');
		const images = formData.getAll('image').filter(img => image.name !== '');

		// Create propertyData object for database
		const propertyData = {
			type: formData.get('type'),
			name: formData.get('name'),
			description: formData.get('description'),
			location: {
				street: formData.get('location.street'),
				city: formData.get('location.city'),
				state: formData.get('location.state'),
				zipcode: formData.get('location.zipcode'),
			},
			beds: formData.get('beds'),
			baths: formData.get('baths'),
			square_feet: formData.get('square_feet'),
			amenities,
			rates: {
				weekly: formData.get('weekly'),
				monthly: formData.get('monthly'),
				nightly: formData.get('nightly'),
			},
			seller_info: {
				name: formData.get('name'),
				email: formData.get('email'),
				phone: formData.get('phone'),
			},
			images,
		};
		return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
	} catch (error) {
		return new Response('Failed to add property' + error, { status: 500 });
	}
};
