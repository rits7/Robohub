import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends React.Component { 
	constructor () {
		super()
		this.state = {
			robots: [],
			searchField:''
		};
			
}


componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users => this.setState({robots: users}));

}


onSearchChange = (event)  => {
	this.setState({ searchField: event.target.value });
}
	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
			//console.log(robot.name);
	})

	return !robots.length ? 
		<h2 style = {{color:'#fff'}}>Loading...</h2> : 
		(
			<div className ='tc'>
				<h1 className = 'f1 ttc'>RoboHub</h1>
				<SearchBox searchChange= {this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots} />
				</Scroll>
			</div>
		);

		}
				
	}


/* we did this first time
const App = () => {
	return (
		<div className ='tc'>
			<h1 className = 'f1 ttc'>RoboHub</h1>
			<SearchBox />
			<CardList robots = {robots}/>
		</div>
		);
}*/

export default App;
