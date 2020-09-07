import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUsers, users }) => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const login = (e) => {
		e.preventDefault();
		axios
			.post('localhost:5000/', credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				window.history.push('/protected');
				console.log(res);
			})
			.catch((err) => {
				console.log('Error in login function! ', err);
			});
	};

	return (
		<div>
			<form onSubmit={login}>
				<label htmlFor='username'>Username: </label>
				<input
					type='text'
					name='username'
					id='username'
					value={credentials.username}
					onChange={onChange}
				/>
				<br />
				<label htmlFor='password'>Password : </label>
				<input
					type='text'
					name='password'
					id='password'
					value={credentials.password}
					onChange={onChange}
				/>
				<br />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
