import React, {Component} from 'react'

let socket;

export default class Inbox extends Component {
    constructor(props){
        super(props);
        socket = this.props.route.socket;
    }

    render(){
        return (
            <div style={{position: 'absolute'}}>
                <h1>Showing Inbox</h1>
            </div>
        );
    }
}
