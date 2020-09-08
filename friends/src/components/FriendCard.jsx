import React from 'react';
const FriendCard = ({ friend }) => {
	return (
		<div>
			{friend.name}
			{friend.age}
			{friend.email}
		</div>
	);
};

export default FriendCard;
