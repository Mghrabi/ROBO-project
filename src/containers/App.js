import React, {Component} from 'react';
import CardArray from '../CardArray';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';




class App extends Component {

    constructor(){
        super()
        this.state = {
            robots:[],
            search_field:''
        }
    }



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => response.json())
        .then(users => {this.setState({robots : users})
        return users;
    }
        ).
        then(users => console.log(users))
        
    }


    searchChange = (event) => {
        this.setState({search_field : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1>ROBO SEARCH</h1>
                <SearchBox searchChange={this.searchChange}/>
                <Scroll>
                    <CardArray robots={filteredRobots} />
                </Scroll>
            </div>
               
            
        )
    }
   
}



export default App;