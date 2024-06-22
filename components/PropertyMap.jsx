import React from 'react';
import { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import { setDefaults, fromAddress } from 'react-geocode';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';

const PropertyMap = ({ property }) => {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [viewport, setViewport] = useState({
		latitude: 0,
		longitude: 0,
		zoom: 12,
		width: '100%',
		height: '500px',
	});
	const [loading, setLoading] = useState(true);
	const [geoCodeError, setGeoCodeError] = useState(true);

	setDefaults({
		key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
		language: 'en',
		region: 'us',
	});

	useEffect(() => {
		const fetchCoords = async () => {
			try {
				const res = await fromAddress(
					`${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
				);
				// Check for results
				if (res.results.length === 0) {
					// No result found
					setGeoCodeError(true);
					setLoading(false);
					return;
				}
				const { lat, lng } = res.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				setViewport({
					...viewport,
					latitude: lat,
					longitude: lat,
				});
				setLoading(false);
			} catch (error) {
				console.log(error);
				setGeoCodeError(true);
				setLoading(false);
			}
		};
		fetchCoords();
	}, []);
	if (loading) return <Spinner loading={loading} />;

	if (geoCodeError) {
		// Handle case where geocode failed
		return <p>No location data found.</p>;
	}
	return (
		!loading && (
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				mapLib={import('mapbox-gl')}
				initialViewState={{ latitude: lat, longitude: lng, zoom: 15 }}
				style={{ width: '100%', height: 500 }}
				mapStyle="mapbox://styles/mapbox/streets-v9">
				{' '}
				<Marker longitude={lng} latitude={lat} anchor="bottom">
					{' '}
					<Image src={pin} alt="location" width={40} height={40} />
				</Marker>
			</Map>
		)
	);
};

export default PropertyMap;
