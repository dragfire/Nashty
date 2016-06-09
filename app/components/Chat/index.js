import React, {Component} from 'react'
import {ClearFloat} from '../Utils'

let socket;
class ChatInputs extends Component {
    constructor(props) {
        super(props);
        this.onSend = this.onSend.bind(this);
    }

    onSend() {
        this.props.handleChange(this.refs.text.value);
        this.newMessage();
    }

    componentDidMount() {
        console.log(this);
    }

    newMessage() {
        socket.emit('admin:new message', {text: this.refs.text.value});
    }

    render() {
        return (
            <div className="nash-inputs">
                <input type="hidden" id="company" value={this.props.company}/>
                <input type="text" id="nash-message" ref="text"/>
                <button id="nash-sendbtn" onClick={this.onSend}>Send</button>
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
    constructor(props) {
        super(props);
        console.log('Chat', this.props);
        socket = this.props.route.socket;
        this.state = {chats: []};
        this.handleInputChange = this.handleInputChange.bind(this);
        socket.on('client:message created', data => {
            console.log('client:message created', this);
            this.state.chats.push({text: data.text, type: 'received'});
            this.setState({chats: this.state.chats});
        });
    }

    refreshStatus(){
        socket.emit('room:refresh status', {room: 'hayum'});
    }

    handleInputChange(text) {
        console.log('HandleChange', text);
        let type = 'sent';
        this.state.chats.push({text: text, type: type});
        this.setState({chats: this.state.chats});
    }

    render() {
        let Chats = this.state.chats.map(chat => {
            return (
                <MessageText key={Math.floor(Math.random()*1000000)} type={chat.type}>{chat.text}</MessageText>
            );
        });
        return (
            <div className="nash-chat-board">
                <div className="nash-content">
                    {Chats}
                </div>
                <ChatInputs company="hayum" handleChange={this.handleInputChange}/>
            </div>
        );
    }
}
