import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';

import './Styles.css';
import {Button} from 'reactstrap';

import Home from './components/home.js';
import Login from './components/auth/login.js';
import Register from './components/auth/register.js';
import Users from './components/users/users.js';
import Jokes from './components/jokes/jokes.js';

function App(props) {
  const logout = event => {
    event.preventDefault();
    localStorage.removeItem('token');
    props.history.push('/login')
  }
  return (
    <div className="App">
      <header>
        <h1>Welcome to A Slapstick Slapped-Together App of Dad Jokes!</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">List of Users</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/jokes">List of Jokes</NavLink>
        </nav>
        <div className="working"><Button color="primary" onClick={logout}>Log Out</Button></div>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path='/users' component={Users} />
        <Route path='/jokes' component={Jokes} />
      </main>
      <footer>
        <h6>Hyuk Hyuk Guffaw Incorporated 2019</h6>
      </footer>
    </div>
  );
}

export default withRouter(App);
