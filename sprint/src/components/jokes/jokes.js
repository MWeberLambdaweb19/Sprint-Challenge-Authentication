import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth.js';
import '../../Styles.css'

class Jokes extends React.Component {
    state = {
        jokes: [],
    }
    
    componentDidMount(){
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: localStorage.token
            }
        }
        axios.get('http://localhost:8000/api/jokes', options)
        .then(res => {
            console.log(res.data)
            this.setState({
                jokes: res.data
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
            <h3 className="headingTitle">List of jokes</h3>
            {this.state.jokes.map(joke =>
                <div className="contentAlignment" key={joke.id}>
                    <p>{joke.joke}</p>
                </div>
                )}
        </div>
    )
    }
}

export default requiresAuth(Jokes);