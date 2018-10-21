import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		
		<div className='tc bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5 h8 w5'>
			<img alt='robots' src={`https://robohash.org/${id}`} />	
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

//https://robohash.org/hytel



