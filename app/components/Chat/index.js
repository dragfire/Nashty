import React, {Component} from 'react'
import {ClearFloat} from '../Utils'
class ChatInputs extends Component {
    render() {
        return (
            <div className="nash-inputs">
                <input type="hidden" id="company" value={this.props.company}/>
                <input type="text" id="nash-message"/>
                <button id="nash-sendbtn">Send</button>
            </div>
        )
    }
}

class MessageText extends Component {
    render() {
        return (
            <div className="chat-bubble">
                <div className={"msg "+ this.props.type}>{this.props.children}</div>
                <ClearFloat />
            </div>
        )
    }
}

export default class ChatApp extends Component {
    render() {
        return (
            <div className="nash-chat-board">
                <div className="nash-content">
                    <MessageText type="sent">Hello There</MessageText>
                    <MessageText type="received">Hi! How are you?</MessageText>
                </div>
                <ChatInputs company="hayum"/>
            </div>
        );
    }
}
