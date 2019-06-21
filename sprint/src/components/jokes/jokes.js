import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth.js';

class Jokes extends React.Component {
    state = {
        jokes: [],
    }
    
    componentDidMount(){
        const options = {
            headers: {
                accept: 'application/json'
            }
        }
        axios.get('https://icanhazdadjoke.com/search', options)
        .then(res => {
            console.log(res.data)
            this.setState({
                jokes: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
    if (this.state.jokes.length === 0) {
        return <div>Loading jokes...</div>
    }
    return (
        <div>
            <h3>List of jokes</h3>
            {this.state.jokes.map(joke =>
                <div key={joke.id}>
                    <p>{joke.joke}</p>
                </div>
                )}
        </div>
    )
    }
}

export default requiresAuth(Jokes);