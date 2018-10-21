import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js';


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
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			console.log(robots.name);
	})

	if (this.state.robots.length ===0) {
		return<h1>Loading</h1>
	} else {
		return (
			<div className ='tc'>
				<h1 className = 'f1 ttc'>RoboHub</h1>
				<SearchBox searchChange= {this.onSearchChange}/>
				<scroll>
					<CardList robots = {filteredRobots} />
				</scroll>
			</div>
				);
			}
		
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
