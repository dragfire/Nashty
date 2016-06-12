import React, {Component} from 'react'
import {ClearFloat} from '../Utils'

let socket;
let socketid;

class ChatInputs extends Component {
    constructor(props) {
        super(props);
        this.onSend = this.onSend.bind(this);
    }

    onSend() {
        this.props.handleChange(this.refs.text.value);
        this.newMessage();
    }

    newMessage() {
        if (socketid) {
            socket.emit('admin:new message', {sid: socketid, text: this.refs.text.value});
        } else {
            socket.emit('admin:new message', {text: this.refs.text.value});
        }
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
        console.log('ChatApp Constructor:', this.props);
        socket = this.props.route.socket;
        this.state = {chats: [], key: Math.random()};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStaticSocketEvents(); // Global Socket events
        this.handleDynamicSocketEvents(this.props); // Client Socket Updates
    }

    handleStaticSocketEvents() {
        socket.on('client:message created', data => {
            console.log('client:message created', this);
            this.state.chats.push({text: data.text, type: 'received'});
            this.setState({chats: this.state.chats, key: Math.random()});
        });

        socket.on('client:got admin', function (data) {
            console.log('client:got admin', data);
        });

        socket.on('admin:admin assigned', function (data) {
            console.log('admin:admin assigned', data);
        });

        socket.on('ChatApp:notified admin left', function (data) {
            console.log('ChatApp:notified admin left', data);
        });
    }

    handleDynamicSocketEvents(props) {
        socket = props.route.socket;
        socketid = props.location.query.sid;
        console.log('DynamicSocketEvents:', socket, socketid);

        if (socketid) {
            console.log('Sending Admin Id to Client:', socket, socketid);
            socket.emit('admin:assign admin', {
                sid: socketid
            });
        }
    }

    componentWillReceiveProps(newProps) {
        console.log('New Props', newProps);
        this.setState({chats: [], key: Math.random()});
        this.handleDynamicSocketEvents(newProps);
        socket.emit('ChatApp:admin left', {sid: this.props.location.query.sid});
    }

    refreshStatus() {
        socket.emit('room:refresh status', {room: 'hayum'});
    }

    handleInputChange(text) {
        console.log('HandleChange', text);
        let type = 'sent';
        this.state.chats.push({text: text, type: type});
        this.setState({chats: this.state.chats, key: this.state.key});
    }

    render() {

        let Chats = this.state.chats.map(chat => {
            return (
                <MessageText key={Math.floor(Math.random()*1000000)} type={chat.type}>{chat.text}</MessageText>
            );
        });

        return (
            <div className="nash-chat-board" key={this.state.key}>
                <div className="nash-content">
                    {Chats}
                </div>
                <ChatInputs company="hayum" handleChange={this.handleInputChange}/>
            </div>
        );
    }
}
