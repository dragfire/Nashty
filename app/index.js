import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import io from 'socket.io-client'

import App from './components/App'
import Home from './components/Home'
import Inbox from  './components/Inbox'
import ChatApp from './components/Chat'


let socket = io('localhost:3000');
var Routes = (
    <Router history={hashHistory}>
        <Route path="/" socket={socket} component={App}>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/home" component={Home}/>
            <Route path="/chat" socket={socket} component={ChatApp}/>
        </Route>
    </Router>
);

render(Routes, document.getElementById('nashty-app'));
