import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [

	{
		id: 'p1',
		title: 'BMA Road',
		description: 'One of the most beautiful roads in Ctg for cycling',
		imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-o/18/93/a8/1b/vatiary-lake.jpg',
		address: 'Bhatiari - Hathazari Link Rd, Bhatiari',
		location: {
			lat: 22.6302981,
			lng: 91.4596408
		},
		creator: 'u1'
	},

	{
		id: 'p2',
		title: 'BMA Road',
		description: 'One of the most beautiful roads in Ctg for cycling',
		imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-o/18/93/a8/1b/vatiary-lake.jpg',
		address: 'Bhatiari - Hathazari Link Rd, Bhatiari',
		location: {
			lat: 22.6302981,
			lng: 91.4596408
		},
		creator: 'u2'
	}

];

const UserPlaces = () => {
	const userId =  useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator === userId);

	return (
		<PlaceList items={loadedPlaces} />
	);
};

export default UserPlaces;