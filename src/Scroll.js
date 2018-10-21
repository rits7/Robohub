import React from 'react';


const Scroll =()  => {
	return (

			<div style={{ overflow: 'scroll', border: '5px solid black', height: '100px' }}>
				{this.props.children}

			</div>
		)
};



export default Scroll;