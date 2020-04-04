import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

	const USERS = [
	{
		id: 'u1', 
		name: 'John Doe', 
		image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
		places: 4
	}
	];

	return <UsersList items={USERS}/>;
		
};

export default Users;