import React, {Component} from 'react'
import {ClearFloat} from '../Utils'
class ChatInputs extends Component {
    constructor(props){
        super(props);
        this.onSend = this.onSend.bind(this);
    }

    onSend(){
        this.props.handleChange(this.refs.text.value);
    }

    componentDidMount(){
        console.log(this);
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
    constructor(props){
        super(props);
        this.state = {chats: []};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(text){
        console.log('HandleChange', text);
        let type = 'received';
        this.state.chats.push({text: text, type: type});
        this.setState({chats: this.state.chats});
    }

    render() {
        let Chats = this.state.chats.map(chat => {
            return (
                <MessageText key={Math.floor(Math.random()*1000000)} type={chat.type}>{chat.text}</MessageText>
            );
        });
        console.log(Chats);
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
