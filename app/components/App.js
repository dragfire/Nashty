import React, {Component} from 'react'
import {MainView, MainViewContainer} from './Mainview'
import ChatApp from './Chat'
import Sidebar from './Sidebar'

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








