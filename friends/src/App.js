import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

const App = () => {
	const [users, setUsers] = useState([]);

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Link to='/login'>Login Form</Link>
				</Route>
				<Route exact path='/login'>
					<Login users={users} setUsers={setUsers} />
				</Route>
				<PrivateRoute exact path='/protected' />
			</Switch>
		</div>
	);
};

export default App;
