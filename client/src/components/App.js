import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import styled from 'styled-components';

class App extends Component {
  render() {

    const ApContainer = styled.div`
    background:(red);
    `

    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
             <ApContainer>
          <ProtectedRoute exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
            </ApContainer>
          </Switch>
        </FetchUser>
        
      </div>
    );
  }
}

export default App;
