import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth.js';
import '../../Styles.css'

class Users extends React.Component {
    state = {
        users: [],
    }
    
    componentDidMount(){
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get('http://localhost:8000/api/users', options)
        .then(res => {
            console.log(res.data)
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
    if (this.state.users.length === 0) {
        return <div>Loading users...</div>
    }
    return (
        <div>
            <h3 className="headingTitle">List of users</h3>
            {this.state.users.map(user =>
                <div className="contentAlignment" key={user.id}>
                    <p>{user.username}</p>
                </div>
                )}
        </div>
    )
    }
}

export default requiresAuth(Users);