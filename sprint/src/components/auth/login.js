import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

   handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', this.state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/jokes')
        })
        .catch(err => {
            console.log(err)
        })
        this.setState({
            username: "",
            password: ""
        })
    }
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div><label htmlFor="username">Username: </label><input onChange={this.handleChanges} id="username" name="username" placeholder="username" type="text" value={this.state.username} /></div>
            <div><label htmlFor="password">Password: </label><input onChange={this.handleChanges} id="password" name="password" placeholder="password" type="password" value={this.state.password} /></div>
            <div><button type="submit">Log in!</button></div>
        </form>
    )
    }
}

export default withRouter(Login);