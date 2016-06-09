import React, {Component} from 'react'
import {MainView, MainViewContainer} from './Mainview'
import {Link} from 'react-router'

import ChatApp from './Chat'
import Sidebar from './Sidebar'
import {Collection, CollectionItem} from '../components/Materialize/Collection'


//*****************
//  App:
//     Sidebar:
//          CardPanel
//          NavButtons
//          Button {Logout}
//          Card:
//              CardContent {Online Admins}
//              CardReveal {Online Clients}
//
//     MainView:
//         MainViewContainer:
//              ChatApp



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="app outline">
                <Sidebar socket={this.props.route.socket}/>
                <MainView>
                    <MainViewContainer socket={this.props.route.socket}>
                        {this.props.children}
                    </MainViewContainer>
                </MainView>
            </div>
        );
    }
}