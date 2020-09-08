import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const Friend = () => {
	const [friend, setFriend] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axiosWithAuth()
			.get(`/${id}`)
			.then((response) => {
				setFriend(response.data);
				console.log(response.data);
				console.log(friend);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<h1>{friend.name}</h1>
			<p>{friend.age}</p>
			<p>{friend.email}</p>
		</div>
	);
};

export default Friend;
