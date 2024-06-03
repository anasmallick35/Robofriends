// parent file
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield :''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {  // fetching hte input from the server where i didnt want to put the data manually it will fetch the data from the internet
            return response.json();
        })
        .then(users =>{
            this.setState({robots : users})
        });
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render()
    {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            
        })
        
        return(
    <div className = "tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
        <CardList robots = {filteredrobots}/>
        </Scroll>
        </div>
        );
        }
    }

export default App;
