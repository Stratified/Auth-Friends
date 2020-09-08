import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Link to='/api/login'>Login Form</Link>
				</Route>
				<Route exact path='/api/login'>
					<Login />
				</Route>
				<ProtectedRoute exact path='/api/friends'>
					<FriendsList />
				</ProtectedRoute>
				<PrivateRoute path='/api/friends/:id'>
					<Friend />
				</PrivateRoute>
			</Switch>
		</div>
	);
};

export default App;
