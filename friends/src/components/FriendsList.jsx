import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [friend, setFriend] = useState({
		id: 1,
		name: '',
		age: '',
		email: '',
	});
	const [update, setUpdate] = useState({
		name: '',
		age: '',
		email: '',
	});

	useEffect(() => {
		axiosWithAuth()
			.get()
			.then((res) => {
				console.log('axiosWithAuth response: ', res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.log('axiosWithAuth error: ', err);
			});
	}, []);

	const addFriend = (e) => {
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', friend)
			.then((res) => {
				setFriends([...friends, res]);
				console.log('friends: ', friends);
				console.log('friend: ', friend);
			})
			.catch((err) => {
				console.log('addFriend error: ', err);
			});
	};

	const updateFriend = (id) => {
		axiosWithAuth()
			.put(`http://localhost:5000/api/friends/${id}`, {
				name: 'Vladimir',
				age: '50',
				email: 'vlad@impaler.com',
			})
			.then((res) => {
				setUpdate({ name: 'Vladimir', age: '50', email: 'vlad@impaler.com' });
				console.log('updateFriend called: ', res);
			})
			.catch((err) => {
				console.log('updateFriend error: ', err);
			});
	};

	useEffect(() => {
		updateFriend(8);
	}, []);

	const removeFriend = (id) => {
		axiosWithAuth()
			.delete(`http://localhost:5000/api/friends/${id}`)
			.then((res) => {
				console.log('removeFriend called.');
			})
			.catch((err) => {
				console.log('removeFriend ERROR!');
			});
	};

	useEffect(() => {
		removeFriend(24);
	}, []);

	const onChange = (e) => {
		setFriend({
			...friend,
			[e.target.name]: e.target.value,
			id: friends.length + 1,
		});
	};

	return (
		<div>
			{friends.map((friend) => (
				<FriendCard friend={friend} key={friend.id} />
			))}
			<form onSubmit={addFriend}>
				<label htmlFor='name'>Name: </label>
				<input
					type='text'
					name='name'
					id='name'
					value={friend.username}
					onChange={onChange}
				/>
				<br />
				<label htmlFor='age'>Age: </label>
				<input
					type='text'
					name='age'
					id='age'
					value={friend.age}
					onChange={onChange}
				/>
				<br />
				<label htmlFor='email'>Email: </label>
				<input
					type='text'
					name='email'
					id='email'
					value={friend.password}
					onChange={onChange}
				/>
				<br />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default FriendsList;
