import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

export default App;
