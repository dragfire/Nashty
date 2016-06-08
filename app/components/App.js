import React, {Component} from 'react'
import {MainView, MainViewContainer} from './Mainview'
import ChatApp from './Chat'
import Sidebar from './Sidebar'
import io from 'socket.io-client'

let socket = io('localhost:3000');

export default class App extends Component {
    constructor() {
        super();
        this.joinAdmin();
        socket.on('admin joined', data => {
            console.log('Admin joined', data);
        });
    }

    joinAdmin() {
        socket.emit('join admin', {role: 'admin', site: 'hayum'});
    }

    render() {
        return (
            <div className="app outline">
                <Sidebar/>
                <MainView>
                    <MainViewContainer>
                        <ChatApp/>
                    </MainViewContainer>
                </MainView>
            </div>
        );
    }
}








