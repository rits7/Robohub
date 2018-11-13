import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
	<div className = 'pt0 pb3 mt0'>	
		<input className='pa3 ba b--green bg-washed-blue tc mb2 mt0' 
		type = 'search' 
		placeholder ='Search Robots' 
		onChange={searchChange}
		/>
	</div>
	);
}

export default SearchBox;


